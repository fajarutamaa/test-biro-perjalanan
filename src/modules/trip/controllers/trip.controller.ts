import { NextFunction, Request, Response } from 'express'
import { TripService } from '../services/trip.service'
import { TripInvoiceService } from '@/modules/invoice/services/invoice.service'
import { TripPayHistoryService } from '@/modules/payment-history/services/payhist.service'
import { generateInvoiceNumber } from '@/utils/helpers'
import { createdResponse, successResponse } from '@/utils/response'
import { responseTrips } from '../responses/user.responses'
import { MasterDestinationsService } from '@/modules/master/services/destinations.service'
import { UserService } from '@/modules/user/services/user.service'
import { BadRequestError, NotFoundError } from '@/utils/error'

export class TripController {
    constructor(
        private readonly service: TripService,
        private readonly serviceInvoice: TripInvoiceService,
        private readonly servicePaymentHistory: TripPayHistoryService,
        private readonly serviceDestination: MasterDestinationsService,
        private readonly serviceUser: UserService
    ) {}

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { destination_id, quantity, pay_type_id, schedule_at } = req.body

            const user_id = req.user?.user_id || ''
            const created_by = req.user?.user_id || ''

            const trip = await this.service.create({
                destination_id: parseInt(destination_id),
                schedule_at: new Date(schedule_at),
                trip_status: 1,
                user_id: user_id,
                created_by: created_by,
            })

            const destination = await this.serviceDestination.findById(destination_id)
            const totalAmount = Number(destination?.price) * quantity

            const tripInvoice = await this.serviceInvoice.create({
                invoice_no: generateInvoiceNumber(),
                trip_id: trip,
                pay_type_id: BigInt(pay_type_id),
                total_amount: Number(totalAmount),
                quantity: BigInt(quantity),
            })

            await this.servicePaymentHistory.create({
                trip_invoice_id: tripInvoice,
                pay_status_id: BigInt(1),
            })

            return createdResponse(res, 201, 'OK', 'Trip created successfully')
        } catch (error) {
            console.error(error)
            next(error)
        }
    }

    getAll = async (_: Request, res: Response) => {
        try {
            const trips = await this.service.findAll()
            const serializedTrips = trips.map((trip) => ({
                ...trip,
                id: trip.trip_id?.toString(),
                destination_id: trip.destination_id?.toString(),
                trip_status: trip.trip_status?.toString(),
            }))

            return successResponse(res, responseTrips(serializedTrips), 200, 'Trips retrieved successfully')
        } catch (error) {
            console.log(error)
        }
    }

    getAllByUserId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const trips = await this.service.findAllByUserIdAndStatus(req.user?.user_id || '')

            const serializedTrips = await Promise.all(
                trips.map(async (trip) => {
                    const destination = await this.serviceDestination.findById(Number(trip.destination_id))
                    const user = await this.serviceUser.getUserById(trip.user_id)

                    return {
                        id: Number(trip.trip_id),
                        destination: {
                            name: destination?.name || null,
                            benefit: destination?.destinations || null,
                        },
                        trip_status: Number(trip.trip_status),
                        user: {
                            name: user?.name || null,
                            email: user?.email || null,
                        },
                        schedule_at: trip.schedule_at,
                        created_by: trip.created_by,
                    }
                })
            )

            return successResponse(res, serializedTrips, 200, 'Trips retrieved successfully')
        } catch (error) {
            next(error)
        }
    }

    getById = async (req: Request, res: Response) => {
        const trip = await this.service.findById(parseInt(req.params.id))
        if (!trip) return res.status(404).json({ message: 'Trip not found' })
        res.json(trip)
    }

    cancelTrip = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.user?.user_id || ''
            const trip = await this.service.findById(parseInt(req.params.id))
            if (!trip) throw new NotFoundError('Trip not found')

            await this.service.update(parseInt(req.params.id), {
                trip_status: BigInt(4),
                updated_by: user,
                updated_at: new Date(),
            })

            return createdResponse(res, 201, 'OK', 'Trip cancelled successfully')
        } catch (error) {
            next(error)
        }
    }
}
