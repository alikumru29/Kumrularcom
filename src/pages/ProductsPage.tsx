import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ProductFilters from "../components/ProductFilters";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";
import PageHeader from "../components/PageHeader";
import { useProducts } from "../hooks/useProducts";

export default function ProductsPage() {
  const { t } = useTranslation();
  const {
    products,
    loading,
    error,
    filters,
    setFilters,
    currentPage,
    setCurrentPage,
    paginatedProducts,
    totalPages,
  } = useProducts();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <>
      <SEOHead
        title={t("seo.products.title")}
        description={t("seo.products.description")}
        canonical="/urunler"
      />

      <PageHeader
        title={t("pages.products.header.title")}
        description={t("pages.products.header.description")}
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101"
      />

      <section className="py-16">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProductFilters
                products={products}
                selectedFilters={filters}
                onFilterChange={setFilters}
              />
            </div>

            <div className="lg:col-span-3">
              {paginatedProducts.length === 0 ? (
                <p className="text-center text-gray-500">
                  {t("pages.products.notFound")}
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}

              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </>
  );
}
