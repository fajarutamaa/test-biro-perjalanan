import { tb_trip_status } from '@/generated/prisma'
import { MasterTripStatusRepository } from './tripstatus.repository'
import { prisma } from '@/config/prisma'

export class PrismaMasterTripStatusRepository implements MasterTripStatusRepository {
    async findAll(): Promise<tb_trip_status[]> {
        return await prisma.tb_trip_status.findMany()
    }
}
