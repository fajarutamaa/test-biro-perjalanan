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
import { MasterPayTypeService } from '@/modules/master/services/paytype.service'
import { MasterTripStatusService } from '@/modules/master/services/tripstatus.service'

export class TripController {
    constructor(
        private readonly service: TripService,
        private readonly serviceInvoice: TripInvoiceService,
        private readonly servicePaymentHistory: TripPayHistoryService,
        private readonly serviceDestination: MasterDestinationsService,
        private readonly serviceUser: UserService,
        private readonly serviceTripStatus: MasterTripStatusService,
        private readonly servicePayType: MasterPayTypeService
    ) {}

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { destination_id, quantity, pay_type_id, schedule_at } = req.body
            const { user_id: userId } = (req as any).user || {}
            const trip = await this.service.create({
                destination_id: parseInt(destination_id),
                schedule_at: new Date(schedule_at),
                trip_status: 1,
                user_id: userId,
                created_by: userId,
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
            const { user_id: userId } = (req as any).user || {}
            const trips = await this.service.findAllByUserIdAndStatus(userId)

            const serializedTrips = await Promise.all(
                trips.map(async (trip) => {
                    const destination = await this.serviceDestination.findById(Number(trip.destination_id))
                    const user = await this.serviceUser.getUserById(userId)

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
            console.log(error)
            next(error)
        }
    }

    getTripById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { role_id: userRole, user_id: userId } = (req as any).user || {}
            const tripId = parseInt(req.params.id)
            if (isNaN(tripId)) {
                throw new BadRequestError('Invalid trip ID')
            }
            const trip = await this.service.findById(tripId)
            if (userRole !== 1 && userRole !== 2) {
                if (trip.user_id != userId) {
                    throw new NotFoundError('Trip not found')
                }
            }

            if (!trip) throw new NotFoundError('Trip not found')

            const destination = await this.serviceDestination.findById(Number(trip.destination_id))
            const user = await this.serviceUser.getUserById(trip.user_id)
            const tripStatus = await this.serviceTripStatus.findById(Number(trip.trip_status))
            const tripInvoice = await this.serviceInvoice.findByTripId(Number(trip.trip_id))
            const payType = await this.servicePayType.findById(Number(tripInvoice?.pay_type_id))

            let response = {
                id: Number(trip.trip_id),
                destination: {
                    id: Number(trip.destination_id),
                    name: destination?.name || null,
                    benefit: destination?.destinations || null,
                },
                start_time: trip.start_time,
                end_time: trip.end_time,
                trip_status: tripStatus.name,
                user: {
                    name: user?.name || null,
                    email: user?.email || null,
                },
                quantity: parseInt(tripInvoice?.quantity.toString()),
                total_amount: tripInvoice?.total_amount,
                pay_type: payType?.name,
                schedule_at: trip.schedule_at,
                created_by: trip.created_by,
            }

            return successResponse(res, response, 200, 'Trip retrieved successfully')
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    cancelTrip = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = (req as any).user?.user_id
            const trip = await this.service.findById(parseInt(req.params.id))
            if (!trip) throw new NotFoundError('Trip not found')

            await this.service.update(parseInt(req.params.id), {
                trip_status: BigInt(4),
                updated_by: userId,
                updated_at: new Date(),
            })

            return createdResponse(res, 201, 'OK', 'Trip cancelled successfully')
        } catch (error) {
            next(error)
        }
    }
}
