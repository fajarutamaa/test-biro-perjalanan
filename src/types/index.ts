export enum Role {
    SUPERADMIN = 1,
    ADMIN = 2,
    GENERAL_USER = 3,
}

export interface JwtPayload {
    user_id: string
    email: string
    role_id: number
    name?: string
    is_active?: boolean
    iat?: number // issued at
    exp?: number // expiration time
}

// Export other types as needed
export interface AuthenticatedRequest extends Request {
    user: JwtPayload // Make it required if you're sure it will be set
}
