import { Request } from 'express'

export interface JwtPayload {
    user_id: string
    email: string
    role_id: number
    name?: string
    is_active?: boolean
    iat?: number
    exp?: number
}

declare module 'express-serve-static-core' {
    interface Request {
        user?: JwtPayload
    }
}
