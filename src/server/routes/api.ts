import { Router } from "express";
import { getProducts } from "../controllers/productController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// API middleware - MUTLAKA Content-Type application/json olmalı
router.use((_req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "Kumrular API");
  next();
});

// Auth middleware
router.use(authMiddleware);

// Products endpoint
router.get("/products", getProducts);

// Catch-all route for API 404s
router.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: "API endpoint not found",
  });
});

export const apiRoutes = router;
