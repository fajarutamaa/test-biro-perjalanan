export interface JwtPayload {
    user_id: string
    role_id: number
    iat?: number
    exp?: number
}

export enum Role {
    SUPERADMIN = 1,
    ADMIN = 2,
    GENERAL_USER = 3,
}

export interface AuthenticatedRequest extends Request {
  user: {
    user_id: string;
    email: string;
    role_id: number;
  };
}