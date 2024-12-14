import { Product, TechnicalDetail } from "../../types/product.js";
import { turkishToAscii } from "../../shared/utils/turkishUtils.js";
import { DOMParser } from "@xmldom/xmldom";

export class XmlParser {
  parseXml(xmlText: string): Product[] {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");

      const products = xmlDoc.getElementsByTagName("Urun");
      return Array.from(products).map((urun) =>
        this.parseProduct(urun as Element)
      );
    } catch (error) {
      console.error("XML parsing error:", error);
      throw new Error("XML parsing failed");
    }
  }

  private parseProduct(urun: Element): Product {
    const name = this.parseNode(urun, "UrunAdi");
    const brand = this.parseNode(urun, "Marka");

    return {
      id: this.parseNode(urun, "UrunKartiID"),
      name,
      description: this.parseNode(urun, "Aciklama"),
      brand,
      category: this.parseNode(urun, "Kategori"),
      categoryTree: this.parseCategoryTree(urun),
      url: this.parseNode(urun, "UrunUrl"),
      images: this.parseImages(urun),
      stockCode: this.parseNode(urun, "StokKodu"),
      technicalDetails: this.parseTechnicalDetails(urun),
      slug: this.generateSlug(brand, name),
    };
  }

  private parseNode(node: Element, tagName: string): string {
    return node.getElementsByTagName(tagName)[0]?.textContent || "";
  }

  private parseCategoryTree(node: Element): string[] {
    return this.parseNode(node, "KategoriTree").split("/").filter(Boolean);
  }

  private parseImages(node: Element): string[] {
    return Array.from(node.getElementsByTagName("Resim")).map(
      (img) => img.textContent || ""
    );
  }

  private parseTechnicalDetails(node: Element): TechnicalDetail[] {
    const details = node.getElementsByTagName("TeknikDetay");
    return Array.from(details).map((detail) => ({
      propertyId: this.parseNode(detail as Element, "OzellikID"),
      propertyName: this.parseNode(detail as Element, "OzellikTanim"),
      valueId: this.parseNode(detail as Element, "DegerID"),
      valueName: this.parseNode(detail as Element, "DegerTanim"),
    }));
  }

  private generateSlug(brand: string, name: string): string {
    return `${turkishToAscii(brand.toLowerCase())}-${turkishToAscii(
      name.toLowerCase()
    )}`.replace(/\s+/g, "-");
  }
}
