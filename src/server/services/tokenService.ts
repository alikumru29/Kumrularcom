import jwt from "jsonwebtoken";
import { CacheService } from "./cacheService.js";

const JWT_SECRET = process.env.JWT_SECRET || "kumrular-jwt-secret-2024";
const TOKEN_EXPIRY = "24h";

export class TokenService {
  private static instance: TokenService;
  private readonly cacheService: CacheService;

  private constructor() {
    this.cacheService = CacheService.getInstance();
  }

  static getInstance(): TokenService {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService();
    }
    return TokenService.instance;
  }

  generateToken(): string {
    const payload = {
      iss: "kumrular-api",
      iat: Math.floor(Date.now() / 1000),
      clientId: Math.random().toString(36).substring(7),
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
  }

  verifyToken(token: string): boolean {
    try {
      jwt.verify(token, JWT_SECRET);
      return true;
    } catch {
      return false;
    }
  }

  // Token'ı cache'e kaydet
  cacheToken(token: string): void {
    this.cacheService.setItem(`token_${token}`, { createdAt: Date.now() });
  }

  // Token'ın cache'de olup olmadığını kontrol et
  isTokenCached(token: string): boolean {
    return this.cacheService.getItem(`token_${token}`) !== null;
  }
}
