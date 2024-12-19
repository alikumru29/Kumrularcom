import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ResponsiveContainer from "./ResponsiveContainer";
import LoadingSpinner from "./LoadingSpinner";

export default function FeaturedProducts() {
  const { t } = useTranslation();
  const { products, loading, error } = useProducts();
  const carouselRef = useRef<HTMLDivElement>(null);

  if (loading) return <LoadingSpinner />;
  if (error) return null;

  // Get 10 random products
  const randomProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.offsetWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-white">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-6">
            {t("components.featuredProducts.title")}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t("components.featuredProducts.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-slate-800" />
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 pb-4"
          >
            {randomProducts.map((product) => (
              <div
                key={product.id}
                className="snap-start flex-none w-[calc(20%-1rem)] min-w-[280px]"
              >
                <Link to={`/urunler/${product.slug}`} className="block group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <div className="relative aspect-square">
                      {product.images && product.images[0] ? (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src =
                              "https://via.placeholder.com/400x400?text=Görsel+Yok";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400">
                            {t("common.notFound")}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <p className="text-sm text-primary-600 mb-2">
                        {product.brand}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {product.category}
                      </p>
                      <button className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors">
                        {t("components.featuredProducts.explore")}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-slate-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-slate-800" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/urunler"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
          >
            {t("components.featuredProducts.viewAll")}
          </Link>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
