import { prisma } from '@/config/prisma'
import { TripInvoiceRepository } from './invoice.repository'
import { tb_trip_invoice } from '@/generated/prisma'
import { CreateTripInvoiceDTO } from '@/modules/invoice/dtos'

export class PrismaTripInvoiceRepository implements TripInvoiceRepository {
    async create(data: CreateTripInvoiceDTO) {
        const trip = await prisma.tb_trip_invoice.create({
            data,
            select: {
                trip_invoice_id: true,
            },
        })
        return Number(trip.trip_invoice_id)
    }

    async findAll(): Promise<tb_trip_invoice[]> {
        return prisma.tb_trip_invoice.findMany()
    }

    async findById(trip_invoice_id: number): Promise<tb_trip_invoice | null> {
        return prisma.tb_trip_invoice.findUnique({ where: { trip_invoice_id } })
    }

    async findInvoiceByInvoiceNo(invoice_no: string): Promise<tb_trip_invoice | null> {
        return prisma.tb_trip_invoice.findFirst({ where: { invoice_no } })
    }

    async findByTripId(tripId: number): Promise<tb_trip_invoice | null> {
        return prisma.tb_trip_invoice.findFirst({ where: { trip_id: tripId } })
    }

    async update(trip_invoice_id: number, data: Partial<tb_trip_invoice>): Promise<tb_trip_invoice> {
        return prisma.tb_trip_invoice.update({ where: { trip_invoice_id }, data })
    }

    async delete(trip_invoice_id: number): Promise<void> {
        await prisma.tb_trip_invoice.delete({ where: { trip_invoice_id } })
    }
}
