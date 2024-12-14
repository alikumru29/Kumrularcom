import cors from "cors";
import { env } from "../config/env.js";

export const corsMiddleware = cors({
  origin: env.isProduction
    ? [
        "https://kumrular.com",
        "https://www.kumrular.com",
        "http://localhost:4000",
      ]
    : true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "X-API-Key", "Authorization"],
  credentials: true,
});
