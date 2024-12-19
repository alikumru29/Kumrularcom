import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Phone, Mail } from "lucide-react";
import { categories } from "../data/categories";
import ResponsiveContainer from "../components/ResponsiveContainer";
import CategoryHero from "../components/CategoryHero";
import SEOHead from "../components/SEOHead";

export default function CategoryPage() {
  const { t } = useTranslation();
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <>
        <SEOHead
          title={t("common.notFound")}
          description={t("pages.categories.notFound")}
          canonical={`/kategoriler/${categoryId}`}
        />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-slate-600">{t("common.notFound")}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={category.title}
        description={`${category.description} ${category.seoContent.slice(
          0,
          100
        )}...`}
        canonical={`/kategoriler/${categoryId}`}
      />
      <div className="min-h-screen">
        <CategoryHero category={category} />

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
          <ResponsiveContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {category.subcategories.map((subcategory, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h2 className="text-2xl font-bold text-gradient mb-4">
                      {subcategory.title}
                    </h2>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-700 mb-3">
                        {t("common.features.products")}
                      </h3>
                      <ul className="space-y-2">
                        {subcategory.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-slate-600"
                          >
                            <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-700 mb-3">
                        {t("common.features.title")}
                      </h3>
                      <ul className="space-y-2">
                        {subcategory.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-slate-600"
                          >
                            <Check className="w-4 h-4 text-primary-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                <h2 className="text-2xl font-bold text-gradient mb-4">
                  {t("common:buttons.details")}
                </h2>
                <div className="prose max-w-none text-slate-600">
                  <p>{category.seoContent}</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white"
              >
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    {t("pages.products.detail.contact.title")}
                  </h2>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="tel:+902163984764"
                      className="flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-full hover:bg-opacity-90 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      {t("common.buttons.call")}
                    </a>
                    <a
                      href="mailto:info@kumrular.com"
                      className="flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      {t("common.buttons.email")}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
