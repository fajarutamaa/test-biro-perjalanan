import { NextFunction, Request, Response } from 'express'
import { TripInvoiceService } from '../services/invoice.service'
import { BadRequestError } from '@/utils/error'
import { TripPayHistoryService } from '@/modules/payment-history/services/payhist.service'

export class TripInvoiceController {
    constructor(
        private readonly service: TripInvoiceService,
        private readonly servicePaymentHistory: TripPayHistoryService
    ) {}

    getAll = async (_: Request, res: Response) => {
        const trips = await this.service.findAll()
        res.json(trips)
    }

    getById = async (req: Request, res: Response) => {
        const trip = await this.service.findById(parseInt(req.params.id))
        if (!trip) return res.status(404).json({ message: 'Trip not found' })
        res.json(trip)
    }

    delete = async (req: Request, res: Response) => {
        await this.service.delete(parseInt(req.params.id))
        res.status(204).send()
    }

    handleCallback = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { invoice_no, status } = req.body
            if (!invoice_no || !status) {
                throw new BadRequestError('Missing required fields: invoice_no or status')
            }

            let pay_status_id: bigint
            switch (status) {
                case 'paid':
                    pay_status_id = BigInt(2)
                    break
                case 'expired':
                    pay_status_id = BigInt(3)
                    break
                case 'overdue':
                    pay_status_id = BigInt(4)
                    break
                default:
                    throw new BadRequestError('invalid status value')
            }

            const tripInvoice = await this.service.findInvoiceByInvoiceNo(invoice_no)
            if (!tripInvoice) {
                return res.status(404).json({ message: 'Invoice not found' })
            }

            await this.servicePaymentHistory.create({
                trip_invoice_id: Number(tripInvoice.trip_invoice_id),
                pay_status_id: pay_status_id,
            })

            return res.status(200).json({ message: 'Payment status updated successfully' })
        } catch (error) {
            next(error)
        }
    }
}
