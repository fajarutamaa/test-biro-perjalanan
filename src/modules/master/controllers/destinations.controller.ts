import { NextFunction, Request, Response } from 'express'
import { MasterDestinationsService } from '../services/destinations.service'
import { successResponse } from '@/utils/response'
import logger from '@/utils/logger'
import { BadRequestError, NotFoundError } from '@/utils/error'

export class MasterDestinationsController {
    constructor(private readonly service: MasterDestinationsService) {}

    getAll = async (_: Request, res: Response, next: NextFunction) => {
        try {
            const destinations = await this.service.findAll()
            return successResponse(res, destinations, 200, 'Destinations retrieved successfully')
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.params.id) {
                throw new BadRequestError('Invalid destination Id')
            }
            const destination = await this.service.findById(parseInt(req.params.id))
            if (!destination) throw new NotFoundError('Destination not found')
            return successResponse(res, destination, 200, 'Destination retrieved successfully')
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }
}
