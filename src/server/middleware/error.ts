import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../types/api.js";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Error:", err);

  const response: ApiResponse = {
    success: false,
    error: "Internal Server Error",
    details: err instanceof Error ? err.message : "Unknown error occurred",
  };

  res.status(500).json(response);
}
