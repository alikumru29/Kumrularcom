import { TechnicalDetail } from "../types/product";

export function parseTechnicalDetails(element: Element): TechnicalDetail[] {
  const details = element.getElementsByTagName("TeknikDetay");
  return Array.from(details).map((detail) => ({
    propertyId: detail.getElementsByTagName("OzellikID")[0]?.textContent || "",
    propertyName:
      detail.getElementsByTagName("OzellikTanim")[0]?.textContent || "",
    valueId: detail.getElementsByTagName("DegerID")[0]?.textContent || "",
    valueName: detail.getElementsByTagName("DegerTanim")[0]?.textContent || "",
  }));
}
