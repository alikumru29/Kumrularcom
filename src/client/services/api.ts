import { ApiResponse } from "../../types/api";
import { Product } from "../../types/product";

export class ApiService {
  private static instance: ApiService;
  private readonly API_URL = import.meta.env.PROD
    ? "https://api.kumrular.com/api/products"
    : "http://localhost:5173/api/products";

  private constructor() {}

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      console.log("Fetching products from:", this.API_URL);

      const response = await fetch(this.API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      if (!response.ok) {
        console.error(
          "API Response Error:",
          response.status,
          response.statusText
        );
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Geçici çözüm: API yanıtı success/data formatında değilse
      if (Array.isArray(data)) {
        return data;
      }

      if (!data.success || !data.data) {
        console.error("Invalid API Response:", data);
        throw new Error(data.error || "Invalid response from server");
      }

      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Ürünler yüklenirken bir hata oluştu");
    }
  }
}
