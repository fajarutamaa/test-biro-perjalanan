import { tb_trip_status } from '@/generated/prisma'

export interface MasterTripStatusRepository {
    findAll(): Promise<tb_trip_status[]>
}
