// middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express'
import { AppError } from '../utils/error' // atau path sesuai kamu

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            code: err.statusCode,
            status: getHttpStatusText(err.statusCode),
            message: err.message,
        })
    }

    // Unexpected Error
    return res.status(500).json({
        code: 500,
        status: 'Internal Server Error',
        message: 'Unexpected error occurred',
    })
}

const getHttpStatusText = (code: number): string => {
    switch (code) {
        case 400:
            return 'Bad Request'
        case 401:
            return 'Unauthorized'
        case 403:
            return 'Forbidden'
        case 404:
            return 'Not Found'
        case 500:
            return 'Internal Server Error'
        default:
            return 'Error'
    }
}
