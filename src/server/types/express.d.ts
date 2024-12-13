import { Request, Response, NextFunction } from "express";

export type ExpressHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>;
export type ExpressMiddleware = ExpressHandler;
