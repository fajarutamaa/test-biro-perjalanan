import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import { ForbiddenError, UnauthorizedError } from '@/utils/error'
interface JwtPayload {
    user_id: string
    email: string
    role_id: number
    name?: string
    iat?: number
    exp?: number
}

interface AuthenticatedRequest extends Request {
    user: JwtPayload
}

export const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthorizedError('Missing or invalid Authorization header')
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET!) as JwtPayload
        req.user = decoded
        next()
    } catch (err) {
        throw new UnauthorizedError('Invalid token')
    }
}

export function authorizeRoles(...allowedRoles: number[]) {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        const user = req.user

        if (!user || !allowedRoles.includes(user.role_id)) {
            throw new ForbiddenError('You do not have permission to perform this action')
        }
        next()
    }
}
