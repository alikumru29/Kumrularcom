import fs from "fs";
import path from "path";

export class CacheService {
  private static instance: CacheService;
  private readonly CACHE_DIR: string;
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  private constructor() {
    this.CACHE_DIR = path.join(process.cwd(), "cache");
    this.ensureCacheDirectory();
  }

  static getInstance(): CacheService {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService();
    }
    return CacheService.instance;
  }

  private ensureCacheDirectory(): void {
    if (!fs.existsSync(this.CACHE_DIR)) {
      fs.mkdirSync(this.CACHE_DIR, { recursive: true });
    }
  }

  setItem<T>(key: string, data: T): void {
    try {
      const filePath = path.join(this.CACHE_DIR, `${key}.json`);
      fs.writeFileSync(
        filePath,
        JSON.stringify(
          {
            timestamp: Date.now(),
            data,
          },
          null,
          2
        )
      );
    } catch (error) {
      console.error("Cache write error:", error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const filePath = path.join(this.CACHE_DIR, `${key}.json`);
      if (!fs.existsSync(filePath)) return null;

      const cache = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      if (Date.now() - cache.timestamp < this.CACHE_DURATION) {
        return cache.data as T;
      }

      fs.unlinkSync(filePath);
      return null;
    } catch (error) {
      console.error("Cache read error:", error);
      return null;
    }
  }

  clearCache(): void {
    try {
      const files = fs.readdirSync(this.CACHE_DIR);
      for (const file of files) {
        fs.unlinkSync(path.join(this.CACHE_DIR, file));
      }
    } catch (error) {
      console.error("Cache clear error:", error);
    }
  }
}
