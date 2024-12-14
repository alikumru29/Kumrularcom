import { Request, Response } from "express";
import { ProductService } from "../services/productService.js";
import { logger } from "../utils/logger.js";

export async function getProducts(_req: Request, res: Response) {
  try {
    const productService = ProductService.getInstance();
    const products = await productService.fetchProducts();

    // Explicitly set Content-Type
    res.setHeader("Content-Type", "application/json");

    res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    logger.error("Error getting products:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
