import { prisma } from '@/config/prisma'
import { MasterDestinationsRepository } from './destinations.repository'
import { tb_destination } from '@/generated/prisma'

export class PrismaMasterDestinationsRepository implements MasterDestinationsRepository {
    async findAll(filters?: { is_open?: boolean }): Promise<tb_destination[]> {
        return await prisma.tb_destination.findMany({
            where: {
                ...(filters?.is_open !== undefined && { is_open: filters.is_open }),
            },
        })
    }

    async findById(destination_id: number): Promise<tb_destination | null> {
        return prisma.tb_destination.findUnique({ where: { destination_id } })
    }

    async update(destination_id: number, data: any): Promise<void> {
        await prisma.tb_destination.update({
            where: { destination_id },
            data,
        })
    }
}
