import { Product, TechnicalDetail } from '../types/product';

export class XmlParser {
  private static parseNode(node: Element, tagName: string): string {
    const element = node.getElementsByTagName(tagName)[0];
    return element?.textContent || '';
  }

  private static parseTechnicalDetails(node: Element): TechnicalDetail[] {
    const details = node.getElementsByTagName('TeknikDetay');
    return Array.from(details).map(detail => ({
      propertyId: this.parseNode(detail as Element, 'OzellikID'),
      propertyName: this.parseNode(detail as Element, 'OzellikTanim'),
      valueId: this.parseNode(detail as Element, 'DegerID'),
      valueName: this.parseNode(detail as Element, 'DegerTanim')
    }));
  }

  static parseXml(xmlText: string): Product[] {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      
      // Check for parsing errors
      const parseError = xmlDoc.getElementsByTagName('parsererror')[0];
      if (parseError) {
        throw new Error('XML parsing error: ' + parseError.textContent);
      }

      const products = xmlDoc.getElementsByTagName('Urun');
      return Array.from(products).map(urun => ({
        id: this.parseNode(urun as Element, 'UrunKartiID'),
        name: this.parseNode(urun as Element, 'UrunAdi'),
        description: this.parseNode(urun as Element, 'Aciklama'),
        brand: this.parseNode(urun as Element, 'Marka'),
        category: this.parseNode(urun as Element, 'Kategori'),
        categoryTree: this.parseNode(urun as Element, 'KategoriTree')
          .split('/')
          .filter(Boolean),
        url: this.parseNode(urun as Element, 'UrunUrl'),
        images: Array.from((urun as Element).getElementsByTagName('Resim'))
          .map(img => img.textContent || ''),
        stockCode: this.parseNode(urun as Element, 'StokKodu'),
        technicalDetails: this.parseTechnicalDetails(urun as Element)
      }));
    } catch (error) {
      console.error('XML parsing error:', error);
      throw new Error('XML parsing failed');
    }
  }
}