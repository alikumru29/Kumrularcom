import { Product } from "../../types/product.js";
import { XmlParser } from "../utils/xmlParser.js";
import { logger } from "../utils/logger.js";
import fetch from "node-fetch";

export class ProductService {
  private static instance: ProductService;
  private products: Product[] = [];
  private lastFetch: number = 0;
  private readonly XML_URL =
    "https://www.yapihome.net/TicimaxXml/278B3C02B88342ACBEA3385B6BAF600C";
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
  private fetchPromise: Promise<Product[]> | null = null;

  private constructor() {
    // Start periodic update
    setInterval(() => {
      this.fetchProducts().catch((error) => {
        logger.error("Error in periodic product update:", error);
      });
    }, this.CACHE_DURATION);
  }

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      // Return cached data if valid
      if (this.hasValidCache()) {
        logger.info(`Returning ${this.products.length} cached products`);
        return this.products;
      }

      // If a fetch is already in progress, return its promise
      if (this.fetchPromise) {
        logger.info("Fetch already in progress, waiting...");
        return this.fetchPromise;
      }

      // Start new fetch
      logger.info("Fetching fresh product data from XML...");
      this.fetchPromise = this.fetchFreshData();

      const products = await this.fetchPromise;
      this.fetchPromise = null;

      if (!products || products.length === 0) {
        throw new Error("No products returned from XML service");
      }

      // Update cache
      this.products = products;
      this.lastFetch = Date.now();

      logger.info(
        `Successfully fetched and cached ${products.length} products`
      );
      return products;
    } catch (error) {
      this.fetchPromise = null;
      logger.error("Error fetching products:", error);

      // Return cached products as fallback if available
      if (this.products.length > 0) {
        logger.info("Returning cached products as fallback");
        return this.products;
      }

      throw error;
    }
  }

  private async fetchFreshData(): Promise<Product[]> {
    const response = await fetch(this.XML_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const xmlText = await response.text();
    const parser = new XmlParser();
    return parser.parseXml(xmlText);
  }

  private hasValidCache(): boolean {
    return (
      this.products.length > 0 &&
      Date.now() - this.lastFetch < this.CACHE_DURATION
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
