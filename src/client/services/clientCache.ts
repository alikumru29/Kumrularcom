export class ClientCacheService {
  private static instance: ClientCacheService;
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  private constructor() {}

  static getInstance(): ClientCacheService {
    if (!ClientCacheService.instance) {
      ClientCacheService.instance = new ClientCacheService();
    }
    return ClientCacheService.instance;
  }

  setItem<T>(key: string, data: T): void {
    try {
      localStorage.setItem(
        key,
        JSON.stringify({
          timestamp: Date.now(),
          data,
        })
      );
    } catch (error) {
      console.error("Cache write error:", error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const cache = localStorage.getItem(key);
      if (!cache) return null;

      const { timestamp, data } = JSON.parse(cache);
      if (Date.now() - timestamp < this.CACHE_DURATION) {
        return data as T;
      }

      localStorage.removeItem(key);
      return null;
    } catch (error) {
      console.error("Cache read error:", error);
      return null;
    }
  }

  clearCache(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Cache clear error:", error);
    }
  }
}
