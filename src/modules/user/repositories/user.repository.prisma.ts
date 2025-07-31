import { tb_user } from '@/generated/prisma'
import { prisma } from '@/config/prisma'
import { IUserRepository } from './user.repository'

export class UserRepository implements IUserRepository {
    async create(data: { email: string; password: string; name: string; role_id: number }): Promise<tb_user> {
        return prisma.tb_user.create({ data })
    }

    async findByEmail(email: string): Promise<tb_user | null> {
        return prisma.tb_user.findUnique({ where: { email } })
    }

    async findById(id: string): Promise<tb_user | null> {
        return prisma.tb_user.findUnique({ where: { user_id: id } })
    }

    async findAll(): Promise<tb_user[]> {
        return prisma.tb_user.findMany()
    }

    async update(id: string, data: Partial<tb_user>): Promise<tb_user> {
        return prisma.tb_user.update({ where: { user_id: id }, data })
    }

    async delete(id: string): Promise<void> {
        await prisma.tb_user.delete({ where: { user_id: id } })
    }
}
