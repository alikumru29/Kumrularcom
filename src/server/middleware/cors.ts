import cors from "cors";
import { env } from "../config/env.js";

export const corsMiddleware = cors({
  origin: env.isProduction
    ? ["https://kumrular.com", "https://www.kumrular.com"]
    : true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});
