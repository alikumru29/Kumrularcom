import { Router } from "express";
import { getProducts } from "../controllers/productController.js";
import { generateToken } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// Public endpoints (token alma)
router.post("/auth/token", generateToken);

// Protected endpoints (token gerekli)
router.use(authMiddleware);
router.get("/products", getProducts);

export const apiRoutes = router;
