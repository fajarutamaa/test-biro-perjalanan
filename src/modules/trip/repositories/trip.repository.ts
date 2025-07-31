import { tb_trip } from '@/generated/prisma'
import { CreateTripDTO } from '../dtos'

export interface TripRepository {
    create(data: CreateTripDTO): Promise<number>
    findAll(): Promise<tb_trip[]>
    findById(trip_id: number): Promise<tb_trip | null>
    findAllByUserIdAndStatus(user_id: string): Promise<tb_trip[]>
    update(trip_id: number, data: Partial<tb_trip>): Promise<tb_trip>
    delete(trip_id: number): Promise<void>
}
