import { Router } from "express";
import { paths } from "../config/paths.js";

const router = Router();

// Serve index.html for all routes
router.get("*", (_req, res) => {
  // Set proper content type for HTML
  res.set({
    "Content-Type": "text/html",
    "Cache-Control": "no-cache",
  });
  res.sendFile(paths.client.index);
});

export const spaRoutes = router;
