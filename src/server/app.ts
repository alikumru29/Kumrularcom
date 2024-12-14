import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { setupMiddleware } from "./config/middleware.js";
import { setupRoutes } from "./config/routes.js";
import { initializeServices } from "./config/services.js";
import { errorHandler } from "./middleware/error.js";
import { logger } from "./utils/logger.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CLIENT_BUILD_PATH = path.join(__dirname, "../../client");

export async function createApp() {
  const app = express();

  logger.info(`Client build path: ${CLIENT_BUILD_PATH}`);

  // Initialize core services
  try {
    await initializeServices();
  } catch (error) {
    logger.error("Failed to initialize services:", error);
  }

  // Setup middleware
  setupMiddleware(app);

  // Setup routes
  setupRoutes(app, CLIENT_BUILD_PATH);

  // Error handling should be last
  app.use(errorHandler);

  return app;
}
