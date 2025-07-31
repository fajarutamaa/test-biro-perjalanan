import { successResponse } from '@/utils/response'
import { MasterTripStatusService } from '../services/tripstatus.service'
import { Request, Response } from 'express'

export class MasterTripStatusController {
    constructor(private readonly service: MasterTripStatusService) {}

    getAll = async (_: Request, res: Response) => {
        const trips = await this.service.findAll()
        return successResponse(res, trips, 200, 'Trip status retrieved successfully')
    }
}
