import { ExpressMiddleware } from "../types/express.js";

export const securityMiddleware: ExpressMiddleware = (_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
};
