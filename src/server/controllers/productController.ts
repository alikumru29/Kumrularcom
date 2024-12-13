import { Request, Response } from "express";
import { ProductService } from "../services/productService.js";

export async function getProducts(_req: Request, res: Response) {
  try {
    const productService = ProductService.getInstance();
    const products = await productService.fetchProducts();
    res.json(products);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({
      error: "Internal server error",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
