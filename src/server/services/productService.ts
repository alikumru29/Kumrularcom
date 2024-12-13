import { Product } from "../../types/product.js";
import { XmlService } from "./xmlService.js";
import { CacheService } from "./cacheService.js";
import { paths } from "../config/paths.js";
import fs from "fs";
import path from "path";

export class ProductService {
  private static instance: ProductService;
  private products: Product[] = [];
  private readonly xmlService: XmlService;
  private readonly cacheService: CacheService;
  private readonly PRODUCTS_CACHE_KEY = "parsed_products";

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
      // Ensure cache directory exists
      if (!fs.existsSync(paths.server.cache)) {
        fs.mkdirSync(paths.server.cache, { recursive: true });
      }

      // Try to get from cache first
      const cachedProducts = this.cacheService.getItem<Product[]>(
        this.PRODUCTS_CACHE_KEY
      );
      if (cachedProducts && cachedProducts.length > 0) {
        console.log(`Using cached products (${cachedProducts.length} items)`);
        this.products = cachedProducts;
        return cachedProducts;
      }

      // Fetch fresh data if cache miss
      console.log("Fetching fresh product data from XML...");
      const products = await this.xmlService.fetchProducts();

      if (!products || products.length === 0) {
        throw new Error("No products returned from XML service");
      }

      // Update cache
      this.cacheService.setItem(this.PRODUCTS_CACHE_KEY, products);
      this.products = products;

      console.log(`Cached ${products.length} products successfully`);
      return products;
    } catch (error) {
      console.error("Error in ProductService.fetchProducts:", error);

      // Try to use existing cache as fallback
      const fallbackCachePath = path.join(
        paths.server.cache,
        `${this.PRODUCTS_CACHE_KEY}.json`
      );
      if (fs.existsSync(fallbackCachePath)) {
        try {
          console.log("Using fallback cache...");
          const cachedData = JSON.parse(
            fs.readFileSync(fallbackCachePath, "utf-8")
          );
          if (cachedData.data && Array.isArray(cachedData.data)) {
            return cachedData.data;
          }
        } catch (cacheError) {
          console.error("Error reading fallback cache:", cacheError);
        }
      }

      throw new Error(
        "Ürünler yüklenirken bir hata oluştu ve önbellek kullanılamadı."
      );
    }
  }

  getProducts(): Product[] {
    return this.products;
  }
}
