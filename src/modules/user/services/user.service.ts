import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserRepository } from '../repositories/user.repository.prisma'
import { tb_user } from '@/generated/prisma'
import config from '@/config'
import { AllReadyExistError, BadRequestError, NotFoundError } from '@/utils/error'
import { registerSchema } from '../dtos'

export class UserService {
    private userRepository: UserRepository

    constructor(userRepository?: UserRepository) {
        this.userRepository = userRepository || new UserRepository()
    }

    async register(data: { name: string; email: string; password: string }): Promise<tb_user> {
        const { error, value } = registerSchema.validate(data, {
            abortEarly: false,
            stripUnknown: true,
        })

        if (error) {
            throw new BadRequestError(error.message)
        }
        const existing = await this.userRepository.findByEmail(data.email)
        if (existing) {
            throw new AllReadyExistError('Email already exists')
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)
        return this.userRepository.create({
            ...data,
            role_id: 3,
            password: hashedPassword,
        })
    }

    async login(email: string, password: string): Promise<{ token: string }> {
        const user = await this.userRepository.findByEmail(email)
        if (!user) {
            throw new BadRequestError('Invalid email')
        }

        if (!user.is_active) {
            throw new BadRequestError('Inactive user')
        }

        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
            throw new BadRequestError('Invalid password')
        }

        const token = jwt.sign({ user_id: user.user_id, role_id: user.role_id }, config.JWT_SECRET!, {
            expiresIn: '1d',
        })

        return { token }
    }

    async getUserById(userId: string): Promise<tb_user | null> {
        const user = this.userRepository.findById(userId)
        if (!user) throw new NotFoundError('User not found')
        return user
    }

    async updateUser(userId: string, data: Partial<tb_user>): Promise<tb_user> {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10)
        }
        return this.userRepository.update(userId, data)
    }

    async deleteUser(userId: string): Promise<void> {
        await this.userRepository.update(userId, {
            is_active: false,
        })
    }

    async listUsers(): Promise<tb_user[]> {
        return this.userRepository.findAll()
    }
}
