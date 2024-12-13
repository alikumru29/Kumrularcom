import { createApp } from "./app.js";
import { env } from "./config/env.js";

// For production (Passenger)
export default createApp();

// For development
if (!env.isProduction) {
  createApp()
    .then((app) => {
      app.listen(env.port, () => {
        console.log(
          `Server running on port ${env.port} in ${env.nodeEnv} mode`
        );
      });
    })
    .catch((error) => {
      console.error("Failed to start server:", error);
      process.exit(1);
    });
}
