import { useState, useEffect } from "react";
import { Product } from "../types/product";
import { ApiService } from "../client/services/api";
import { useProductFilters } from "./useProductFilters";

const ITEMS_PER_PAGE = 12;

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    technicalDetails: {},
  });

  const { filterProducts } = useProductFilters();
  const apiService = ApiService.getInstance();

  useEffect(() => {
    let mounted = true;

    const loadProducts = async () => {
      try {
        setLoading(true);
        console.log("Fetching products...");
        const data = await apiService.fetchProducts();

        if (mounted) {
          console.log("Products fetched:", data);
          setProducts(data);
          setError(null);
        }
      } catch (err) {
        console.error("Error in useProducts:", err);
        if (mounted) {
          setError(
            err instanceof Error
              ? err.message
              : "Ürünler yüklenirken bir hata oluştu"
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredProducts = filterProducts(products, filters);
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return {
    products,
    loading,
    error,
    filters,
    setFilters,
    currentPage,
    setCurrentPage,
    filteredProducts,
    paginatedProducts,
    totalPages,
  };
}
