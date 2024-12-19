import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { brands } from "../data/brands";
import { turkishToAscii } from "../shared/utils/turkishUtils";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ContactCTA from "../components/ContactCTA";
import SEOHead from "../components/SEOHead";
import ContactButton from "../components/common/ContactButton";

export default function BrandPage() {
  const { t } = useTranslation();
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brands.find(
    (b) => turkishToAscii(b.id.toLowerCase()) === brandId
  );

  if (!brand) {
    return (
      <>
        <SEOHead
          title={t("common.notFound")}
          description={t("pages.brands.notFound")}
          canonical={`/markalar/${brandId}`}
        />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-slate-600">{t("pages.brands.notFound")}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={brand.name}
        description={brand.description}
        canonical={`/markalar/${brandId}`}
        image={brand.heroImage}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={brand.heroImage}
            alt={brand.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <ResponsiveContainer>
              <div className="text-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-24 object-contain mx-auto mb-8"
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-white/90 max-w-2xl mx-auto"
                >
                  {brand.description}
                </motion.p>
              </div>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100">
          <ResponsiveContainer>
            <div className="py-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Product Categories */}
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-2xl font-bold text-gradient mb-6">
                      {t("pages:brands.detail.products.title")}
                    </h2>
                    {brand.categories.length > 0 ? (
                      <ul className="space-y-4">
                        {brand.categories.map((category) => (
                          <li
                            key={category}
                            className="flex items-center text-slate-600"
                          >
                            <Check className="w-5 h-5 text-primary-500 mr-3" />
                            {category}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-500">
                        {t("pages.brands.detail.products.empty")}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-2xl font-bold text-gradient mb-6">
                      {t("pages:brands.detail.features.title")}
                    </h2>
                    {brand.features.length > 0 ? (
                      <ul className="space-y-4">
                        {brand.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-slate-600"
                          >
                            <Check className="w-5 h-5 text-primary-500 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-500">
                        {t("pages.brands.detail.features.empty")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Website Link */}
                <div className="text-center">
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    {t("common:buttons.officialWebsite")}
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </ResponsiveContainer>

          <ContactCTA />
        </div>
      </div>
    </>
  );
}
