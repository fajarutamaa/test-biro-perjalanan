import { tb_destination } from '@/generated/prisma'

export interface MasterDestinationsRepository {
    findAll(filters?: { is_open?: boolean }): Promise<tb_destination[]>
    findById(destination_id: number): Promise<tb_destination | null>
    update(destination_id: number, data: any): Promise<void>
}
