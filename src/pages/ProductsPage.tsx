import SEOHead from "../components/SEOHead";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ProductFilters from "../components/ProductFilters";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";
import PageHeader from "../components/PageHeader";
import { useProducts } from "../hooks/useProducts";

export default function ProductsPage() {
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
        title="Ürünlerimiz"
        description="Banyo ve seramik ürünleri, armatürler, vitrifiye, banyo mobilyaları ve yapı kimyasalları. Premium markalardan geniş ürün yelpazesi."
        canonical="/urunler"
      />

      <PageHeader
        title="Ürünlerimiz"
        description="Premium markalardan seçilmiş geniş ürün yelpazemizi keşfedin. Kalite ve estetiği bir arada sunuyoruz."
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101"
      />

      {/* Products Section */}
      <section className="py-16">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <ProductFilters
                products={products}
                selectedFilters={filters}
                onFilterChange={setFilters}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
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
