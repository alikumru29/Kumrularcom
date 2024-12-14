import { ApiResponse } from "../types/api.js";
import { Product } from "../types/product";

export class ApiService {
  private static instance: ApiService;
  private readonly API_BASE = "/api";

  private constructor() {}

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${this.API_BASE}/products`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse<Product[]> = await response.json();

      if (!data.success || !data.data) {
        throw new Error(data.error || "Invalid response from server");
      }

      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Ürünler yüklenirken bir hata oluştu");
    }
  }
}
