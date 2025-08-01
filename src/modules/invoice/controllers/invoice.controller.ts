import { NextFunction, Request, Response } from 'express'
import { TripInvoiceService } from '../services/invoice.service'
import { BadRequestError, NotFoundError } from '@/utils/error'
import { TripPayHistoryService } from '@/modules/payment-history/services/payhist.service'
import { createdResponse, successResponse } from '@/utils/response'
import { TripService } from '@/modules/trip/services/trip.service'

export class TripInvoiceController {
    constructor(
        private readonly service: TripInvoiceService,
        private readonly servicePaymentHistory: TripPayHistoryService,
        private readonly tripService: TripService
    ) {}

    getAll = async (_: Request, res: Response, next: NextFunction) => {
        try {
            const tripInvoice = await this.service.findAll()
            const serializedTrips = tripInvoice.map((trip) => ({
                id: trip.trip_invoice_id?.toString(),
                trip_id: trip.trip_id?.toString(),
                pay_type_id: trip.pay_type_id?.toString(),
                total_amount: trip.total_amount?.toString(),
                quantity: trip.quantity?.toString(),
            }))
            return successResponse(res, serializedTrips, 200, 'Invoices retrieved successfully')
        } catch (error) {
            next(error)
        }
    }

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.params.id) {
                throw new BadRequestError('Invalid invoice Id')
            }
            const trip = await this.service.findById(parseInt(req.params.id))
            if (!trip) throw new NotFoundError('Invoice not found')

            const result = {
                id: trip.trip_invoice_id,
                trip_id: trip.trip_id,
                pay_type_id: trip.pay_type_id,
                total_amount: trip.total_amount,
                quantity: trip.quantity,
            }

            return successResponse(res, result, 200, 'Invoice retrieved successfully')
        } catch (error) {
            next(error)
        }
    }

    handleCallback = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { invoice_no, status, amount } = req.body
            if (!invoice_no || !status || !amount) {
                throw new BadRequestError('invoice no, status and amount are required')
            }

            let pay_status_id: bigint
            switch (status) {
                case 'settlement':
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
                throw new NotFoundError('Invoice not found')
            }

            if (tripInvoice.total_amount !== amount) {
                throw new BadRequestError('Amount is not correct')
            }

            const payHist = await this.servicePaymentHistory.findByTripInvoiceId(Number(tripInvoice.trip_invoice_id))
            if (payHist.pay_status_id === BigInt(2)) {
                throw new BadRequestError('Invoice already paid')
            }

            await this.servicePaymentHistory.create({
                trip_invoice_id: Number(tripInvoice.trip_invoice_id),
                pay_status_id: pay_status_id,
                created_at: new Date(),
            })

            await this.tripService.update(Number(tripInvoice.trip_id), {
                trip_status: BigInt(2),
            })

            return createdResponse(res, 201, 'OK', 'Payment status updated successfully')
        } catch (error) {
            next(error)
        }
    }
}
