import { PrismaClient, tb_user } from '@/generated/prisma/client'

export interface IUserRepository {
    create(data: { email: string; password: string; name: string; role_id: number }): Promise<tb_user>

    findByEmail(email: string): Promise<tb_user | null>

    findById(id: string): Promise<tb_user | null>

    findAll(): Promise<tb_user[]>

    update(id: string, data: Partial<tb_user>): Promise<tb_user>

    delete(id: string): Promise<void>
}
