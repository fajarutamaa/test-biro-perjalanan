import { TripInvoiceRepository } from '../repositories/invoice.repository'
import { tb_trip_invoice } from '@/generated/prisma'
import { CreateTripInvoiceDTO } from '@/modules/invoice/dtos'

export class TripInvoiceService {
    constructor(private readonly repo: TripInvoiceRepository) {}

    create(data: CreateTripInvoiceDTO) {
        return this.repo.create(data)
    }

    findAll() {
        return this.repo.findAll()
    }

    findById(id: number) {
        return this.repo.findById(id)
    }

    update(id: number, data: Partial<tb_trip_invoice>) {
        return this.repo.update(id, data)
    }

    delete(id: number) {
        return this.repo.delete(id)
    }

    findInvoiceByInvoiceNo(invoice_no: string) {
        return this.repo.findInvoiceByInvoiceNo(invoice_no)
    }
}
