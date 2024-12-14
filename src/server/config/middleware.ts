import { Express } from "express";
import express from "express";
import { corsMiddleware } from "../middleware/cors.js";
import { securityMiddleware } from "../middleware/security.js";

export function setupMiddleware(app: Express) {
  app.use(corsMiddleware);
  app.use(express.json());
  app.use(securityMiddleware);
}
