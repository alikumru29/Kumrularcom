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
      // Try to get from cache first
      const cachedProducts = this.cacheService.getItem<Product[]>(
        this.PRODUCTS_CACHE_KEY
      );
      if (cachedProducts) {
        this.products = cachedProducts;
        return cachedProducts;
      }

      // Fetch fresh data if cache miss
      console.log("Fetching fresh product data from XML...");
      const products = await this.xmlService.fetchProducts();

      // Update cache
      this.cacheService.setItem(this.PRODUCTS_CACHE_KEY, products);
      this.products = products;

      console.log(`Cached ${products.length} products successfully`);
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);

      // If there's an error fetching new data, try to use existing cache
      const fallbackCachePath = path.join(
        paths.server.cache,
        `${this.PRODUCTS_CACHE_KEY}.json`
      );
      if (fs.existsSync(fallbackCachePath)) {
        console.log("Using fallback cache...");
        const cachedData = JSON.parse(
          fs.readFileSync(fallbackCachePath, "utf-8")
        );
        return cachedData.data;
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
