import express from "express";
import { env } from "./config/env.js";
import { corsMiddleware } from "./middleware/cors.js";
import { securityMiddleware } from "./middleware/security.js";
import { staticMiddleware } from "./middleware/static.js";
import { apiRoutes } from "./routes/api.js";
import { spaRoutes } from "./routes/spa.js";
import { startProductUpdateScheduler } from "./services/scheduler.js";

async function startServer() {
  try {
    const app = express();

    // Error handling middleware
    app.use(
      (
        err: any,
        _req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.error("Unhandled error:", err);
        res.status(500).json({
          error: "Internal Server Error",
          message: err.message || "Bilinmeyen bir hata oluştu",
        });
        next(err);
      }
    );

    // Basic middleware
    app.use(corsMiddleware);
    app.use(express.json());
    app.use(securityMiddleware);

    // Routes
    app.use("/api", apiRoutes);
    app.use(staticMiddleware);
    app.use(spaRoutes);

    // Start scheduler
    await startProductUpdateScheduler();

    // Start server
    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port} in ${env.nodeEnv} mode`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer().catch(console.error);
