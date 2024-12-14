import { createApp } from "./app.js";
import { logger } from "./utils/logger.js";

async function startServer() {
  try {
    const app = await createApp();
    const port = process.env.PORT || 4000;

    const server = app.listen(port, () => {
      logger.info(`Server running on port ${port}`);
      logger.info(`Environment: ${process.env.NODE_ENV}`);
      logger.info(`Process ID: ${process.pid}`);
    });

    // Handle graceful shutdown
    process.on("SIGTERM", () => {
      logger.info("SIGTERM received. Shutting down gracefully...");
      server.close(() => {
        logger.info("Server closed");
        process.exit(0);
      });
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
