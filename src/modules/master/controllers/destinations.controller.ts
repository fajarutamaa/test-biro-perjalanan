import { Request, Response } from 'express'
import { MasterDestinationsService } from '../services/destinations.service'
import { successResponse } from '@/utils/response'

export class MasterDestinationsController {
    constructor(private readonly service: MasterDestinationsService) {}

    getAll = async (_: Request, res: Response) => {
        const trips = await this.service.findAll()
        return successResponse(res, trips, 200, 'Destinations retrieved successfully')
    }

    getById = async (req: Request, res: Response) => {
        const trip = await this.service.findById(parseInt(req.params.id))
        if (!trip) return res.status(404).json({ message: 'Trip not found' })
        res.json(trip)
    }
}
