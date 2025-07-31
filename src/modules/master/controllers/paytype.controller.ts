import { successResponse } from '@/utils/response'
import { MasterPayTypeService } from '../services/paytype.service'
import { NextFunction, Request, Response } from 'express'

export class MasterPayTypeController {
    constructor(private readonly service: MasterPayTypeService) {}

    getAll = async (_: Request, res: Response, next: NextFunction) => {
        try {
            const paymentTypes = await this.service.findAll()
            console.log(paymentTypes)
            const result = paymentTypes.map((paymentType) => ({
                ...paymentType,
                pay_type_id: Number(paymentType.pay_type_id),
            }))
            return successResponse(res, result, 200, 'Payment type retrieved successfully')
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}
