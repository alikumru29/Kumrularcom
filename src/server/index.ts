import { createApp } from "./app.js";
import { env } from "./config/env.js";

async function startServer() {
  try {
    const app = await createApp();

    if (!env.isProduction) {
      // Development mode - start server directly
      app.listen(env.port, () => {
        console.log(
          `Server running on port ${env.port} in ${env.nodeEnv} mode`
        );
      });
    }

    // For production (Passenger)
    return app;
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Start server in development
if (!env.isProduction) {
  startServer();
}

// Export for Passenger in production
export default startServer();
