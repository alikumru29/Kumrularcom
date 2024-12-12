import { Product } from "../types/product";

const API_URL = "http://localhost:3001/api";

export class ApiService {
  private static instance: ApiService;

  private constructor() {}

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Ürünler yüklenirken bir hata oluştu.");
    }
  }
}
