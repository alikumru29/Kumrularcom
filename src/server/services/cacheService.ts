import fs from "fs";
import path from "path";
import { paths } from "../config/paths.js";

export class CacheService {
  private static instance: CacheService;
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  private constructor() {
    this.ensureCacheDirectory();
  }

  static getInstance(): CacheService {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService();
    }
    return CacheService.instance;
  }

  private ensureCacheDirectory(): void {
    if (!fs.existsSync(paths.server.cache)) {
      fs.mkdirSync(paths.server.cache, { recursive: true });
    }
  }

  setItem<T>(key: string, data: T): void {
    try {
      const filePath = path.join(paths.server.cache, `${key}.json`);
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
      console.log(`Cache written successfully: ${key}`);
    } catch (error) {
      console.error("Cache write error:", error);
      throw error;
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const filePath = path.join(paths.server.cache, `${key}.json`);
      if (!fs.existsSync(filePath)) {
        console.log(`Cache miss: ${key}`);
        return null;
      }

      const cache = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      if (Date.now() - cache.timestamp < this.CACHE_DURATION) {
        console.log(`Cache hit: ${key}`);
        return cache.data as T;
      }

      console.log(`Cache expired: ${key}`);
      fs.unlinkSync(filePath);
      return null;
    } catch (error) {
      console.error("Cache read error:", error);
      return null;
    }
  }

  clearCache(): void {
    try {
      const files = fs.readdirSync(paths.server.cache);
      for (const file of files) {
        fs.unlinkSync(path.join(paths.server.cache, file));
      }
      console.log("Cache cleared successfully");
    } catch (error) {
      console.error("Cache clear error:", error);
      throw error;
    }
  }
}
