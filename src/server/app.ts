import express from "express";
import fs from "fs";
import { corsMiddleware } from "./middleware/cors.js";
import { securityMiddleware } from "./middleware/security.js";
import { staticMiddleware } from "./middleware/static.js";
import { apiRoutes } from "./routes/api.js";
import { spaRoutes } from "./routes/spa.js";
import { startProductUpdateScheduler } from "./services/scheduler.js";
import { paths } from "./config/paths.js";
import { errorHandler } from "./middleware/error.js";

export async function createApp() {
  const app = express();

  // Basic middleware
  app.use(corsMiddleware);
  app.use(express.json());
  app.use(securityMiddleware);

  // Ensure cache directory exists
  try {
    if (!fs.existsSync(paths.server.cache)) {
      fs.mkdirSync(paths.server.cache, { recursive: true });
    }
  } catch (error) {
    console.error("Error creating cache directory:", error);
  }

  // Routes
  app.use("/api", apiRoutes);
  app.use(staticMiddleware);
  app.use(spaRoutes); // This should be last

  // Error handling middleware
  app.use(errorHandler);

  // Start scheduler
  try {
    await startProductUpdateScheduler();
  } catch (error) {
    console.error("Scheduler error:", error);
    // Continue server startup even if scheduler fails
  }

  return app;
}
