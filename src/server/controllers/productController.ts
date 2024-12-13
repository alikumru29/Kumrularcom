import { Request, Response } from "express";
import { ProductService } from "../services/productService.js";
import { paths } from "../config/paths.js";
import fs from "fs";

export async function getProducts(_req: Request, res: Response) {
  try {
    // Check if cache directory exists
    if (!fs.existsSync(paths.cache)) {
      fs.mkdirSync(paths.cache, { recursive: true });
    }

    // Initialize ProductService and fetch products
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
