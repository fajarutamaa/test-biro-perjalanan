import { prisma } from '@/config/prisma'
import { TripRepository } from './trip.repository'
import { tb_trip } from '@/generated/prisma'
import { CreateTripDTO } from '../dtos'

export class PrismaTripRepository implements TripRepository {
    async create(data: CreateTripDTO): Promise<number> {
        const trip = await prisma.tb_trip.create({
            data,
            select: {
                trip_id: true,
            },
        })
        return Number(trip.trip_id)
    }

    async findAll(): Promise<tb_trip[]> {
        return prisma.tb_trip.findMany()
    }

    async findAllByUserIdAndStatus(user_id: string): Promise<tb_trip[]> {
        return prisma.tb_trip.findMany({
            where: {
                user_id,
                tb_trip_invoice: {
                    some: {
                        tb_payment_history: {
                            some: {
                                pay_status_id: 2,
                            },
                        },
                    },
                },
            },
            include: {
                tb_user: true,
                tb_trip_invoice: {
                    include: {
                        tb_payment_history: {
                            where: {
                                pay_status_id: 2,
                            },
                            orderBy: {
                                created_at: 'desc',
                            },
                        },
                    },
                },
            },
        })
    }

    async findById(trip_id: number): Promise<tb_trip | null> {
        return prisma.tb_trip.findUnique({ where: { trip_id } })
    }

    async update(trip_id: number, data: Partial<tb_trip>): Promise<tb_trip> {
        return prisma.tb_trip.update({ where: { trip_id }, data })
    }

    async delete(trip_id: number): Promise<void> {
        await prisma.tb_trip.delete({ where: { trip_id } })
    }
}
