import { fetchAndCacheXml } from "./fetchXml.js";
import { XmlParser } from "./xmlParser.js";
import fs from "fs";
import path from "path";

const CACHE_DIR = path.join(process.cwd(), "cache");
const PRODUCTS_CACHE_PATH = path.join(CACHE_DIR, "parsed_products.json");

function shuffleProducts(products: any[]): any[] {
  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }
  return products;
}

export async function updateProducts(): Promise<void> {
  try {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true });
    }

    console.log("Fetching XML data...");
    const xmlText = await fetchAndCacheXml();

    console.log("Parsing XML data...");
    const products = XmlParser.parseXml(xmlText);

    // Shuffle products before caching
    const shuffledProducts = shuffleProducts(products);

    const cacheData = {
      timestamp: Date.now(),
      products: shuffledProducts,
    };

    fs.writeFileSync(PRODUCTS_CACHE_PATH, JSON.stringify(cacheData, null, 2));
    console.log(`Cached ${shuffledProducts.length} products successfully`);
  } catch (error) {
    console.error("Error updating products:", error);
    throw error;
  }
}
