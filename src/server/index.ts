import express from "express";
import fs from "fs";
import { env } from "./config/env.js";
import { corsMiddleware } from "./middleware/cors.js";
import { securityMiddleware } from "./middleware/security.js";
import { staticMiddleware } from "./middleware/static.js";
import { apiRoutes } from "./routes/api.js";
import { spaRoutes } from "./routes/spa.js";
import { startProductUpdateScheduler } from "./services/scheduler.js";
import { paths } from "./config/paths.js";

async function startServer() {
  try {
    const app = express();

    // Basic middleware
    app.use(corsMiddleware);
    app.use(express.json());
    app.use(securityMiddleware);

    // Ensure cache directory exists
    app.use((_req, _res, next) => {
      try {
        if (!fs.existsSync(paths.server.cache)) {
          fs.mkdirSync(paths.server.cache, { recursive: true });
        }
        next();
      } catch (error) {
        console.error("Error creating cache directory:", error);
        next(error);
      }
    });

    // Error handling middleware
    app.use((err: any, _req: any, res: any, _next: any) => {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });

    // Routes
    app.use("/api", apiRoutes);
    app.use(staticMiddleware);
    app.use(spaRoutes); // This should be last

    // Start scheduler
    await startProductUpdateScheduler();

    // Start server
    app.listen(env.port, () => {
      console.log(`Server running on port ${env.port} in ${env.nodeEnv} mode`);
      console.log(`Static files served from: ${paths.client.dist}`);
      console.log(`Cache directory: ${paths.server.cache}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer().catch(console.error);
