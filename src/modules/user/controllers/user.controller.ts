import { NextFunction, Request, Response } from 'express'
import { UserService } from '../services/user.service'
import { RegisterDTO, LoginDTO } from '../dtos'
import { createdResponse, successResponse } from '@/utils/response'
import { responseUsers } from '../responses/user.responses'
import { NotFoundError } from '@/utils/error'
import logger from '@/utils/logger'
import { formatToIsoUtc7 } from '@/utils/helpers'

const userService = new UserService()

export class UserController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const dto: RegisterDTO = req.body
            await userService.register(dto)
            return createdResponse(res, 201, 'OK', 'User registered successfully')
        } catch (error) {
            next(error)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const dto: LoginDTO = req.body
            const result = await userService.login(dto.email, dto.password)
            return successResponse(res, result, 200, 'User logged in successfully')
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }

    async getProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = (req as any).user?.user_id
            const user = await userService.getUserById(userId)
            if (!user) throw new NotFoundError('User not found')
            const result = {
                id: user.user_id,
                name: user.name,
                email: user.email,
                is_active: user.is_active,
                created_at: formatToIsoUtc7(user.created_at),
            }
            return successResponse(res, result, 200, 'User retrieved successfully')
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = (req as any).user?.user_id
            const updated = await userService.updateUser(userId, req.body)
            return createdResponse(res, 201, 'OK', 'User updated successfully')
        } catch (error) {
            next(error)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = (req as any).user?.user_id
            await userService.deleteUser(userId, { is_active: false })
            return createdResponse(res, 201, 'OK', 'User deleted successfully')
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }

    async deletedById(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.id
            await userService.deleteUser(userId, { is_active: false })
            return successResponse(res, 'User has been deleted')
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.listUsers()
            return successResponse(res, responseUsers(users), 200, 'User retrieved successfully')
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }
}
