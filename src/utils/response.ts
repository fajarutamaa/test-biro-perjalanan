import { Response } from 'express'

export function successResponse(res: Response, data: any, code = 200, status = 'OK') {
    return res.status(code).json({
        code,
        status,
        data,
    })
}

export function createdResponse(res: Response, code = 201, status = 'OK', Message: string) {
    return res.status(code).json({
        code,
        status,
        Message,
    })
}

export function errorResponse(res: Response, code = 500, status = 'Internal Server Error', data: any = null) {
    return res.status(code).json({
        code,
        status,
        data,
    })
}
