import { Request, Response, NextFunction } from "express";
import { TokenService } from "../services/tokenService.js";
import { env } from "../config/env.js";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Development modunda auth bypass
  if (!env.isProduction) {
    return next();
  }

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      error: "Token gerekli",
    });
  }

  const token = authHeader.split(" ")[1];
  const tokenService = TokenService.getInstance();

  if (!tokenService.verifyToken(token)) {
    return res.status(401).json({
      success: false,
      error: "Geçersiz token",
    });
  }

  next();
}
