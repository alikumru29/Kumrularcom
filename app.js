import { createApp } from "./dist/server/app.js";

async function startServer() {
  try {
    const app = await createApp();
    return app;
  } catch (error) {
    console.error("Failed to start server:", error);
    throw error;
  }
}

export default startServer();
