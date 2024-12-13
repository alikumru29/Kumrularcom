import { Product } from "../../types/product.js";
import { XmlParser } from "../utils/xmlParser.js";
import fetch from "node-fetch";

export class XmlService {
  private static instance: XmlService;
  private readonly XML_URL =
    "https://www.yapihome.net/TicimaxXml/A715C83647764094AC7D54E5A95BCB01";
  private readonly xmlParser: XmlParser;

  private constructor() {
    this.xmlParser = new XmlParser();
  }

  static getInstance(): XmlService {
    if (!XmlService.instance) {
      XmlService.instance = new XmlService();
    }
    return XmlService.instance;
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      console.log("Fetching XML from:", this.XML_URL);
      const response = await fetch(this.XML_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const xmlText = await response.text();
      console.log("XML fetched successfully, parsing...");

      const products = this.xmlParser.parseXml(xmlText);
      console.log(`Parsed ${products.length} products successfully`);

      return products;
    } catch (error) {
      console.error("Error in XmlService.fetchProducts:", error);
      throw new Error(
        `XML verisi alınamadı: ${
          error instanceof Error ? error.message : "Bilinmeyen hata"
        }`
      );
    }
  }
}
