import { createApp } from "./app.js";

async function startServer() {
  try {
    await createApp();
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
