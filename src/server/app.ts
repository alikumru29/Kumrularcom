import express from "express";
import { corsMiddleware } from "./middleware/cors.js";
import { securityMiddleware } from "./middleware/security.js";
import { staticMiddleware } from "./middleware/static.js";
import { apiMiddleware } from "./middleware/api.js";
import { apiRoutes } from "./routes/api.js";
import { spaRoutes } from "./routes/spa.js";
import { startProductUpdateScheduler } from "./services/scheduler.js";
import { errorHandler } from "./middleware/error.js";
import { env } from "./config/env.js";
import { logger } from "./utils/logger.js";

export async function createApp() {
  const app = express();

  // Basic middleware
  app.use(corsMiddleware);
  app.use(express.json());
  app.use(securityMiddleware);
  app.use(apiMiddleware);

  // Routes
  app.use("/api", apiRoutes);
  app.use(staticMiddleware);
  app.use(spaRoutes);

  // Error handling middleware
  app.use(errorHandler);

  // Start scheduler
  try {
    await startProductUpdateScheduler();
  } catch (error) {
    logger.error("Scheduler error:", error);
  }

  // Only start server if not running under Passenger
  if (!env.isPassenger) {
    app.listen(env.port, () => {
      logger.info(`Server running on port ${env.port} in ${env.nodeEnv} mode`);
    });
  }

  return app;
}
