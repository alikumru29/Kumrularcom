import { Request, Response, NextFunction } from "express";
import { env } from "../config/env.js";

const API_KEY = process.env.API_KEY || "kumrular-api-key-2024";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Production'da API key kontrolü yap
  if (env.isProduction) {
    const apiKey = req.headers["x-api-key"];
    const referer = req.headers.referer;

    // Kendi domainimizden gelen isteklere veya geçerli API key'e izin ver
    if (referer?.includes("kumrular.com") || apiKey === API_KEY) {
      next();
    } else {
      res.status(401).json({
        success: false,
        error: "Unauthorized",
        details: "Invalid or missing API key",
      });
    }
  } else {
    // Development ortamında herkese izin ver
    next();
  }
}
