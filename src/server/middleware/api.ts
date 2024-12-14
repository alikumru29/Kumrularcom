import { Request, Response, NextFunction } from "express";
import { ApiUtils } from "../../utils/api.js";
import { logger } from "../utils/logger.js";

export function apiMiddleware(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  res.api = {
    success: (data: any) => {
      res.json(ApiUtils.createSuccessResponse(data));
    },
    error: (error: any) => {
      const apiError = ApiUtils.handleError(error);
      logger.error("API Error:", apiError);
      res.status(500).json(ApiUtils.createErrorResponse(apiError));
    },
  };
  next();
}
