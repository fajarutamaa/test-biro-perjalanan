import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import { JwtPayload } from '@/types'
import { UnauthorizedError } from '@/utils/error'

export interface AuthenticatedRequest extends Request {
    user?: JwtPayload
}

export const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Missing or invalid Authorization header' })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET!) as JwtPayload
        req.user = decoded
        next()
    } catch (err) {
        throw new UnauthorizedError()
    }
}

export function authorizeRoles(...allowedRoles: number[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user as JwtPayload
        console.log(user)
        if (!user || !allowedRoles.includes(user.role_id)) {
            return res.status(403).json({
                code: 403,
                status: 'Forbidden',
                message: 'You do not have permission to perform this action',
            })
        }
        next()
    }
}
