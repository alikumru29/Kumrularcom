import { Request, Response, NextFunction } from "express";
import { TokenService } from "../services/tokenService.js";
import { env } from "../config/env.js";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Development ortamında auth kontrolü yapma
  if (!env.isProduction) {
    return next();
  }

  const tokenService = TokenService.getInstance();
  const authHeader = req.headers.authorization;
  const referer = req.headers.referer;

  // Kendi domainimizden gelen isteklere izin ver
  if (referer?.includes("kumrular.com")) {
    // Eğer token yoksa yeni token üret
    if (!authHeader) {
      const token = tokenService.generateToken();
      tokenService.cacheToken(token);
      res.setHeader("X-Auth-Token", token);
      return next();
    }
  }

  // Token formatını kontrol et
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized",
      details: "Invalid authorization header",
    });
  }

  const token = authHeader.split(" ")[1];

  // Token'ı doğrula
  if (!tokenService.verifyToken(token) || !tokenService.isTokenCached(token)) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized",
      details: "Invalid or expired token",
    });
  }

  next();
}
