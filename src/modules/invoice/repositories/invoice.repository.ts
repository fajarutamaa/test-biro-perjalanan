import { tb_trip_invoice } from '@/generated/prisma'
import { CreateTripInvoiceDTO } from '@/modules/invoice/dtos'

export interface TripInvoiceRepository {
    create(data: CreateTripInvoiceDTO): Promise<number>
    findAll(): Promise<tb_trip_invoice[]>
    findById(trip_id: number): Promise<tb_trip_invoice | null>
    update(trip_id: number, data: Partial<tb_trip_invoice>): Promise<tb_trip_invoice>
    delete(trip_id: number): Promise<void>
    findInvoiceByInvoiceNo(invoice_no: string): Promise<tb_trip_invoice | null>
}
