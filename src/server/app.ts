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

  // API routes must come FIRST
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

  return app;
}

// Sadece doğrudan çalıştırıldığında sunucuyu başlat
if (import.meta.url === `file://${process.argv[1]}`) {
  const port = env.port || 4000;

  // Port kullanımda mı kontrol et
  const server = await createApp();
  server
    .listen(port, () => {
      logger.info(`Server running on port ${port} in ${env.nodeEnv} mode`);
    })
    .on("error", (err: any) => {
      if (err.code === "EADDRINUSE") {
        logger.error(`Port ${port} is already in use`);
        process.exit(1);
      } else {
        logger.error("Server error:", err);
        process.exit(1);
      }
    });
}
