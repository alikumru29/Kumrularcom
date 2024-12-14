import express from "express";
import { corsMiddleware } from "./middleware/cors.js";
import { securityMiddleware } from "./middleware/security.js";
import { staticMiddleware } from "./middleware/static.js";
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

  // API routes must come FIRST, before any static or SPA routes
  app.use("/api", apiRoutes);

  // Static files come after API but before SPA
  app.use(staticMiddleware);

  // SPA routes come last
  app.use(spaRoutes);

  // Error handling
  app.use(errorHandler);

  // Start scheduler
  try {
    await startProductUpdateScheduler();
  } catch (error) {
    logger.error("Scheduler error:", error);
  }

  // Start server if not running under Passenger
  if (!env.isPassenger) {
    const port = env.port || 4000;
    app.listen(port, () => {
      logger.info(`Server running on port ${port} in ${env.nodeEnv} mode`);
    });
  }

  return app;
}
