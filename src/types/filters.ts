export interface ProductFilters {
  brand: string[];
  category: string[];
  technicalDetails: {
    [key: string]: string[];
  };
}