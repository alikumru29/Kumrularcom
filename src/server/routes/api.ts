import { Router } from "express";
import { getProducts } from "../controllers/productController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// API middleware
router.use((_req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Auth middleware
router.use(authMiddleware);

// Products endpoint
router.get("/products", getProducts);

export const apiRoutes = router;
