import { Request, Response, NextFunction } from "express";

export interface ApiResponse {
  success: (data: any) => void;
  error: (error: any) => void;
}

declare global {
  namespace Express {
    interface Response {
      api: ApiResponse;
    }
  }
}

export type ExpressHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>;
export type ExpressMiddleware = ExpressHandler;
