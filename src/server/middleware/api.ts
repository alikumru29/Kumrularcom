import { Request, Response, NextFunction } from "express";
import { ApiUtils } from "../utils/api.js";
import { logger } from "../utils/logger.js";
import { env } from "../config/env.js";

const API_KEY = process.env.API_KEY || "kumrular-api-key-2024";

export function apiMiddleware(req: Request, res: Response, next: NextFunction) {
  // Add API response helpers
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

  // Only check API requests
  if (!req.path.startsWith("/api/")) {
    return next();
  }

  // Skip auth check in development
  if (!env.isProduction) {
    return next();
  }

  // Check API key for production
  const apiKey = req.headers["x-api-key"];
  const referer = req.headers.referer;
  const origin = req.headers.origin;

  // Allow requests from our own domain or with valid API key
  if (
    referer?.includes("kumrular.com") ||
    origin?.includes("kumrular.com") ||
    apiKey === API_KEY
  ) {
    next();
  } else {
    res.status(401).json({
      success: false,
      error: "Unauthorized",
      details: "Invalid or missing API key",
    });
  }
}
