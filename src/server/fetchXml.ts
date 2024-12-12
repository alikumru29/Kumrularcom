import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const XML_URL =
  "https://www.yapihome.net/TicimaxXml/A715C83647764094AC7D54E5A95BCB01";
const XML_CACHE_PATH = path.join(process.cwd(), "cache", "products.xml");

export async function fetchAndCacheXml(): Promise<string> {
  try {
    const cacheDir = path.dirname(XML_CACHE_PATH);
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    const response = await fetch(XML_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const xmlText = await response.text();
    fs.writeFileSync(XML_CACHE_PATH, xmlText);

    return xmlText;
  } catch (error) {
    console.error("Error fetching XML:", error);
    throw error;
  }
}
