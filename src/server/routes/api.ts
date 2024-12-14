import { Router } from "express";
import { ProductService } from "../services/productService.js";

const router = Router();
const productService = ProductService.getInstance();

// API middleware
router.use((_req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Products endpoint
router.get("/products", async (_req, res) => {
  try {
    const products = await productService.fetchProducts();
    res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Ürünler yüklenirken bir hata oluştu",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export const apiRoutes = router;
