import { Product } from "../types/product.js";
import { XmlParser } from "./xmlParser.js";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const XML_URL =
  "https://www.yapihome.net/TicimaxXml/A715C83647764094AC7D54E5A95BCB01";
const CACHE_DIR = path.join(process.cwd(), "cache");
const CACHE_FILE = path.join(CACHE_DIR, "parsed_products.json");

export class ProductService {
  private static instance: ProductService;
  private products: Product[] = [];
  private lastFetch: number = 0;

  private constructor() {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true });
    }
  }

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  private shuffleProducts(products: Product[]): Product[] {
    for (let i = products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [products[i], products[j]] = [products[j], products[i]];
    }
    return products;
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      console.log("Fetching products from XML...");
      const response = await fetch(XML_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const xmlText = await response.text();
      const parsedProducts = XmlParser.parseXml(xmlText);

      // Shuffle products before caching
      const shuffledProducts = this.shuffleProducts(parsedProducts);

      // Update cache
      const cacheData = {
        timestamp: Date.now(),
        products: shuffledProducts,
      };

      fs.writeFileSync(CACHE_FILE, JSON.stringify(cacheData, null, 2));

      this.products = shuffledProducts;
      this.lastFetch = cacheData.timestamp;

      console.log(`Cached ${this.products.length} products successfully`);
      return this.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async getProducts(): Promise<Product[]> {
    try {
      if (fs.existsSync(CACHE_FILE)) {
        const cacheData = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
        const cacheAge = Date.now() - cacheData.timestamp;

        if (cacheAge < 24 * 60 * 60 * 1000) {
          console.log("Using cached products");
          this.products = cacheData.products;
          this.lastFetch = cacheData.timestamp;
          return this.products;
        }
      }

      return await this.fetchProducts();
    } catch (error) {
      console.error("Error getting products:", error);
      throw error;
    }
  }
}
