import { createApp } from "./app.js";
import { logger } from "./utils/logger.js";

async function startServer() {
  try {
    const app = await createApp();
    const port = process.env.PORT || 4000;

    app.listen(port, () => {
      logger.info(`Server running on port ${port}`);
      logger.info(`Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
