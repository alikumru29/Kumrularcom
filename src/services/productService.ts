import { Product } from "../types/product";

const API_URL = "http://localhost:3000/api";

export class ProductService {
  private static instance: ProductService;
  private products: Product[] = [];
  private lastFetch: number = 0;

  private constructor() {}

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      // Check memory cache first
      if (
        this.products.length > 0 &&
        Date.now() - this.lastFetch < 24 * 60 * 60 * 1000
      ) {
        return this.products;
      }

      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const products = await response.json();
      this.products = products;
      this.lastFetch = Date.now();

      return this.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Ürünler yüklenirken bir hata oluştu.");
    }
  }

  getProducts(): Product[] {
    return this.products;
  }
}
