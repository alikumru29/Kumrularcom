import { Product, TechnicalDetail } from "../types/product.js";
import { DOMParser } from "@xmldom/xmldom";
import { turkishToAscii } from "../utils/turkishUtils.js";

export class XmlParser {
  private static parseNode(node: Element, tagName: string): string {
    const element = node.getElementsByTagName(tagName)[0];
    return element ? element.textContent || "" : "";
  }

  private static parseTechnicalDetails(node: Element): TechnicalDetail[] {
    const details = node.getElementsByTagName("TeknikDetay");
    return Array.from(details).map((detail) => ({
      propertyId: this.parseNode(detail as Element, "OzellikID"),
      propertyName: this.parseNode(detail as Element, "OzellikTanim"),
      valueId: this.parseNode(detail as Element, "DegerID"),
      valueName: this.parseNode(detail as Element, "DegerTanim"),
    }));
  }

  static parseXml(xmlText: string): Product[] {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");

      const products = xmlDoc.getElementsByTagName("Urun");
      return Array.from(products).map((urun) => {
        const name = this.parseNode(urun as Element, "UrunAdi");
        const brand = this.parseNode(urun as Element, "Marka");

        return {
          id: this.parseNode(urun as Element, "UrunKartiID"),
          name,
          description: this.parseNode(urun as Element, "Aciklama"),
          brand,
          category: this.parseNode(urun as Element, "Kategori"),
          categoryTree: this.parseNode(urun as Element, "KategoriTree")
            .split("/")
            .filter(Boolean),
          url: this.parseNode(urun as Element, "UrunUrl"),
          images: Array.from(urun.getElementsByTagName("Resim")).map(
            (img) => img.textContent || ""
          ),
          stockCode: this.parseNode(urun as Element, "StokKodu"),
          technicalDetails: this.parseTechnicalDetails(urun as Element),
          slug: `${turkishToAscii(brand.toLowerCase())}-${turkishToAscii(
            name.toLowerCase()
          )}`.replace(/\s+/g, "-"),
        };
      });
    } catch (error) {
      console.error("XML parsing error:", error);
      throw new Error("XML parsing failed");
    }
  }
}
