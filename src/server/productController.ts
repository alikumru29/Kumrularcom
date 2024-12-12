import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { turkishToAscii } from "../utils/turkishUtils.js";

const CACHE_FILE = path.join(process.cwd(), "cache", "parsed_products.json");
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function getProducts(req: Request, res: Response) {
  try {
    if (!fs.existsSync(CACHE_FILE)) {
      return res
        .status(404)
        .json({
          error: "Products not found. Please wait while we fetch the data.",
        });
    }

    const cacheData = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));

    if (Date.now() - cacheData.timestamp > CACHE_DURATION) {
      return res
        .status(404)
        .json({
          error: "Cache expired. Please wait while we update the data.",
        });
    }

    // Transform product data to include SEO-friendly URLs
    const products = cacheData.products.map((product) => ({
      ...product,
      slug: `${turkishToAscii(product.brand.toLowerCase())}-${turkishToAscii(
        product.name.toLowerCase()
      )}`,
      // Keep original image URLs
      images: product.images,
    }));

    res.json(products);
  } catch (error) {
    console.error("Error reading products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function proxyImage(req: Request, res: Response) {
  try {
    const { url } = req.query;
    if (!url || typeof url !== "string") {
      return res.status(400).json({ error: "Image URL is required" });
    }

    const response = await fetch(url);
    if (!response.ok) {
      return res.status(404).json({ error: "Image not found" });
    }

    // Forward content type and cache headers
    const contentType = response.headers.get("content-type");
    if (contentType) {
      res.setHeader("Content-Type", contentType);
    }
    res.setHeader("Cache-Control", "public, max-age=86400");

    // Stream the image data
    response.body?.pipe(res);
  } catch (error) {
    console.error("Error proxying image:", error);
    res.status(500).json({ error: "Failed to proxy image" });
  }
}
