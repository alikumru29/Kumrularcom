import { ApiResponse } from "../../types/api";
import { Product } from "../../types/product";
import { ClientCacheService } from "./clientCache";

export class ApiService {
  private static instance: ApiService;
  private readonly API_BASE = "/api";
  private token: string | null = null;
  private readonly cacheService: ClientCacheService;

  private constructor() {
    this.cacheService = ClientCacheService.getInstance();
  }

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private async getToken(): Promise<string> {
    // Cache'den token'ı al
    const cachedToken = this.cacheService.getItem<string>("api_token");
    if (cachedToken) {
      return cachedToken;
    }

    // İlk istek için token al
    try {
      const response = await fetch(`${this.API_BASE}/products`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const token = response.headers.get("X-Auth-Token");
      if (!token) {
        throw new Error("No token received from API");
      }

      // Token'ı cache'e kaydet
      this.cacheService.setItem("api_token", token);
      return token;
    } catch (error) {
      console.error("Error getting token:", error);
      throw new Error("Failed to get API token");
    }
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      // Token yoksa veya geçersizse yeni token al
      if (!this.token) {
        this.token = await this.getToken();
      }

      const response = await fetch(`${this.API_BASE}/products`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });

      // Token geçersiz olduysa yeni token al ve tekrar dene
      if (response.status === 401) {
        this.token = await this.getToken();
        return this.fetchProducts();
      }

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
