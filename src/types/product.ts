export interface TechnicalDetail {
  propertyId: string;
  propertyName: string;
  valueId: string;
  valueName: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  categoryTree: string[];
  url: string;
  images: string[];
  stockCode: string;
  technicalDetails: TechnicalDetail[];
  slug: string; // SEO-friendly URL
}