import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useProducts } from "../hooks/useProducts";
import { ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react";
import ResponsiveContainer from "../components/ResponsiveContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import ImageSlider from "../components/ImageSlider";
import SEOHead from "../components/SEOHead";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { products, loading, error } = useProducts();
  const product = products.find((p) => p.slug === slug);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!product) return <div>Ürün bulunamadı.</div>;

  // Strip HTML tags from description for meta description
  const plainDescription = product.description
    .replace(/<[^>]*>/g, "")
    .slice(0, 160);

  return (
    <>
      <SEOHead
        title={product.name}
        description={plainDescription}
        canonical={`/urunler/${slug}`}
        type="product"
        image={product.images[0]}
      />
      <div className="pt-24 min-h-screen bg-gray-50">
        <ResponsiveContainer>
          <div className="py-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <a href="/" className="text-gray-500 hover:text-primary-600">
                    Ana Sayfa
                  </a>
                </li>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <li>
                  <a
                    href="/urunler"
                    className="text-gray-500 hover:text-primary-600"
                  >
                    Ürünler
                  </a>
                </li>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <li className="text-primary-600">{product.name}</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Slider */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <ImageSlider images={product.images} name={product.name} />
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  <p className="text-lg text-primary-600">{product.brand}</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Ürün Detayları</h2>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>

                {product.technicalDetails.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Teknik Özellikler
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.technicalDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            {detail.propertyName}
                          </span>
                          <span className="font-medium">
                            {detail.valueName}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
                  <h2 className="text-xl font-semibold mb-4">
                    Detaylı Bilgi ve Fiyat İçin
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+902163984764"
                      className="flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-full hover:bg-opacity-90 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Hemen Arayın
                    </a>
                    <a
                      href="mailto:info@kumrular.com"
                      className="flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      E-posta Gönderin
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
}
