import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
// Import JwtPayload from the express types file
import { JwtPayload } from '../types/express'
import { UnauthorizedError } from '@/utils/error'

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
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
        return res.status(401).json({ error: 'Invalid or expired token' })
    }
}

export function authorizeRoles(...allowedRoles: number[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user
        
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