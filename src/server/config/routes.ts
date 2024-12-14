import { Express } from "express";
import express from "express";
import path from "path";
import { apiRoutes } from "../routes/api.js";
import { logger } from "../utils/logger.js";

export function setupRoutes(app: Express, clientPath: string) {
  // API routes must come before static files
  app.use("/api", apiRoutes);

  // Serve static files from client build
  app.use(express.static(clientPath));

  // SPA fallback - serve index.html for all other routes
  app.get("*", (req, res) => {
    logger.info(`Serving index.html for path: ${req.path}`);
    res.sendFile(path.join(clientPath, "index.html"), (err) => {
      if (err) {
        logger.error("Error serving index.html:", err);
        res.status(500).send("Error loading page");
      }
    });
  });
}
