import express from "express";
import { corsMiddleware } from "./middleware/cors.js";
import { securityMiddleware } from "./middleware/security.js";
import { staticMiddleware } from "./middleware/static.js";
import { apiRoutes } from "./routes/api.js";
import { spaRoutes } from "./routes/spa.js";
import { startProductUpdateScheduler } from "./services/scheduler.js";
import { errorHandler } from "./middleware/error.js";
import { env } from "./config/env.js";

export async function createApp() {
  const app = express();

  // Basic middleware
  app.use(corsMiddleware);
  app.use(express.json());
  app.use(securityMiddleware);

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
    console.error("Scheduler error:", error);
  }

  // Start server
  app.listen(env.port, () => {
    console.log(`Server running on port ${env.port} in ${env.nodeEnv} mode`);
  });

  return app;
}
