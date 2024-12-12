import { Request, Response } from "express";
import { Product } from "../types/product";
import { turkishToAscii } from "../utils/turkishUtils";
import fs from "fs";
import path from "path";

const CACHE_FILE = path.join(process.cwd(), "cache", "parsed_products.json");

export async function getProducts(_req: Request, res: Response) {
  try {
    if (!fs.existsSync(CACHE_FILE)) {
      return res.status(404).json({ error: "Products cache not found" });
    }

    const cacheData = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));

    const products = cacheData.products.map((product: Product) => ({
      ...product,
      slug: `${turkishToAscii(product.brand.toLowerCase())}-${turkishToAscii(
        product.name.toLowerCase()
      )}`.replace(/\s+/g, "-"),
    }));

    res.json(products);
  } catch (error) {
    console.error("Error reading products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
