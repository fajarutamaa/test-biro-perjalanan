// src/types/express.d.ts

import { Request } from 'express';

// Define JwtPayload for your custom user claims
export interface JwtPayload {
  user_id: string;
  email: string;
  role_id: number;
  name?: string;
  is_active?: boolean;
  iat?: number;
  exp?: number;
}

// Extend Express Request
declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload;
  }
}
