import { ProductService } from "../services/productService.js";
import { logger } from "../utils/logger.js";

export async function initializeServices() {
  const productService = ProductService.getInstance();

  logger.info("Initializing services...");

  try {
    logger.info("Fetching initial product data...");
    await productService.fetchProducts();
    logger.info("Initial product data fetched successfully");
  } catch (error) {
    logger.error("Error fetching initial product data:", error);
    throw error;
  }
}
