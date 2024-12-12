import { useCallback } from 'react';
import { Product } from '../types/product';
import { ProductFilters } from '../types/filters';

export function useProductFilters() {
  const filterProducts = useCallback((products: Product[], filters: ProductFilters) => {
    return products.filter(product => {
      // Brand filter
      if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
        return false;
      }

      // Category filter
      if (filters.category.length > 0 && 
          !product.categoryTree.some(cat => filters.category.includes(cat))) {
        return false;
      }

      // Technical details filter
      for (const [property, values] of Object.entries(filters.technicalDetails)) {
        if (values.length > 0) {
          const productValue = product.technicalDetails.find(
            td => td.propertyName === property
          )?.valueName;
          if (!productValue || !values.includes(productValue)) {
            return false;
          }
        }
      }

      return true;
    });
  }, []);

  return { filterProducts };
}