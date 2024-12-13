import { Product } from "../../types/product.js";
import { XmlService } from "./xmlService.js";
import { CacheService } from "./cacheService.js";
import fs from "fs";
import path from "path";
import { paths } from "../config/paths.js";

export class ProductService {
  private static instance: ProductService;
  private products: Product[] = [];
  private readonly xmlService: XmlService;
  private readonly cacheService: CacheService;

  private constructor() {
    this.xmlService = XmlService.getInstance();
    this.cacheService = CacheService.getInstance();
  }

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      // Try to get from cache first
      const cachedProducts = this.cacheService.getItem<Product[]>("products");
      if (cachedProducts) {
        this.products = cachedProducts;
        return cachedProducts;
      }

      // Fetch fresh data if cache miss
      const products = await this.xmlService.fetchProducts();

      // Ensure cache directory exists
      if (!fs.existsSync(paths.cache)) {
        fs.mkdirSync(paths.cache, { recursive: true });
      }

      // Update cache
      this.cacheService.setItem("products", products);
      this.products = products;

      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      // If there's an error fetching new data, try to use existing cache
      const existingCache = path.join(paths.cache, "parsed_products.json");
      if (fs.existsSync(existingCache)) {
        const cachedData = JSON.parse(fs.readFileSync(existingCache, "utf-8"));
        return cachedData.products;
      }
      throw error;
    }
  }

  getProducts(): Product[] {
    return this.products;
  }
}
