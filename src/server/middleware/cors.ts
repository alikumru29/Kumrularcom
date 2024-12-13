import cors from "cors";
import { env } from "../config/env.js";

export const corsMiddleware = cors({
  origin: env.isProduction ? "https://kumrular.com" : true,
  credentials: true,
});
