import { Product } from "../../types/product";
import { CacheService } from "./cacheService";
import { XmlService } from "./xmlService";
import { ProductUtils } from "../utils/productUtils";

export class ProductService {
  private static instance: ProductService;
  private readonly cacheService: CacheService;
  private readonly xmlService: XmlService;
  private products: Product[] = [];

  private constructor() {
    this.cacheService = CacheService.getInstance();
    this.xmlService = XmlService.getInstance();
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
      const shuffledProducts = ProductUtils.shuffleProducts(products);

      // Update cache
      this.cacheService.setItem("products", shuffledProducts);
      this.products = shuffledProducts;

      return shuffledProducts;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Ürünler yüklenirken bir hata oluştu.");
    }
  }

  getProducts(): Product[] {
    return this.products;
  }
}
