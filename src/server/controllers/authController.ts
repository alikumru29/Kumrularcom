import { Request, Response } from "express";
import { TokenService } from "../services/tokenService.js";

export function generateToken(_req: Request, res: Response) {
  try {
    const tokenService = TokenService.getInstance();
    const token = tokenService.generateToken();
    tokenService.cacheToken(token);

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Token generation failed",
    });
  }
}
