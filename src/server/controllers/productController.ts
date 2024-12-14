import { Request, Response } from "express";
import { ProductService } from "../services/productService.js";
import { logger } from "../utils/logger.js";

export async function getProducts(_req: Request, res: Response) {
  try {
    const productService = ProductService.getInstance();
    const products = await productService.fetchProducts();
    res.api.success(products);
  } catch (error) {
    logger.error("Error getting products:", error);
    res.api.error(error);
  }
}
