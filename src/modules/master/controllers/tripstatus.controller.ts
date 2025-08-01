import { successResponse } from '@/utils/response'
import { MasterTripStatusService } from '../services/tripstatus.service'
import { NextFunction, Request, Response } from 'express'
import logger from '@/utils/logger'

export class MasterTripStatusController {
    constructor(private readonly service: MasterTripStatusService) {}

    getAll = async (_: Request, res: Response, next: NextFunction) => {
        try {
            const trips = await this.service.findAll()
            return successResponse(res, trips, 200, 'Trip status retrieved successfully')
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }
}
