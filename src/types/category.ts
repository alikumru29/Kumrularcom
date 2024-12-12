export interface Subcategory {
  title: string;
  items: string[];
  features: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  banner: string;
  subcategories: Subcategory[];
  seoContent: string;
}
