import { Product, TechnicalDetail } from "../types/product";

const XML_URL =
  "https://www.yapihome.net/TicimaxXml/A715C83647764094AC7D54E5A95BCB01/";
const CACHE_KEY = "products_cache";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function fetchProducts(): Promise<Product[]> {
  // Check cache first
  const cache = localStorage.getItem(CACHE_KEY);
  if (cache) {
    const { timestamp, data } = JSON.parse(cache);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    }
  }

  try {
    const response = await fetch(XML_URL);
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");

    const products: Product[] = Array.from(
      xmlDoc.getElementsByTagName("Urun")
    ).map((urun) => {
      // Parse technical details
      const technicalDetails: TechnicalDetail[] = Array.from(
        urun.getElementsByTagName("TeknikDetay")
      ).map((detail) => ({
        propertyId:
          detail.getElementsByTagName("OzellikID")[0]?.textContent || "",
        propertyName:
          detail.getElementsByTagName("OzellikTanim")[0]?.textContent || "",
        valueId: detail.getElementsByTagName("DegerID")[0]?.textContent || "",
        valueName:
          detail.getElementsByTagName("DegerTanim")[0]?.textContent || "",
      }));

      // Parse category tree
      const categoryTree =
        urun.getElementsByTagName("KategoriTree")[0]?.textContent?.split("/") ||
        [];

      return {
        id: urun.getElementsByTagName("UrunKartiID")[0]?.textContent || "",
        name: urun.getElementsByTagName("UrunAdi")[0]?.textContent || "",
        description:
          urun.getElementsByTagName("Aciklama")[0]?.textContent || "",
        brand: urun.getElementsByTagName("Marka")[0]?.textContent || "",
        category: urun.getElementsByTagName("Kategori")[0]?.textContent || "",
        categoryTree,
        url: urun.getElementsByTagName("UrunUrl")[0]?.textContent || "",
        images: Array.from(urun.getElementsByTagName("Resim")).map(
          (img) => img.textContent || ""
        ),
        stockCode: urun.getElementsByTagName("StokKodu")[0]?.textContent || "",
        technicalDetails,
      };
    });

    // Update cache
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        data: products,
      })
    );

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
