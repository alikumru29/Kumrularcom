import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import SEOHead from "../components/SEOHead";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ContactCTA from "../components/ContactCTA";
import PageHeader from "../components/PageHeader";

export default function CategoriesPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t("seo:categories.title")}
        description={t("seo:categories.description")}
        canonical="/kategoriler"
      />

      <PageHeader
        title={t("pages:categories.header.title")}
        description={t("pages:categories.header.description")}
        image={categories[0].banner}
      />

      <section className="py-16">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/kategoriler/${category.id}`}
                  className="block group h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={category.banner}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <button className="px-6 py-2 bg-white/10 text-white rounded-full group-hover:bg-white group-hover:text-primary-600 transition-all duration-300">
                            {t("common.buttons.explore")}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-slate-800 mb-3">
                        {category.title}
                      </h2>
                      <p className="text-slate-600 mb-4">
                        {category.description}
                      </p>
                      <div className="space-y-2">
                        {category.subcategories.slice(0, 2).map((sub) => (
                          <div
                            key={sub.title}
                            className="text-sm text-slate-500"
                          >
                            • {sub.title}
                          </div>
                        ))}
                        {category.subcategories.length > 2 && (
                          <div className="text-sm text-primary-600">
                            +{category.subcategories.length - 2} daha fazla
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <ResponsiveContainer>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
              {t("pages:categories.seo:title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p>{t("pages:categories.seo:description1")}</p>
                <p>{t("pages:categories.seo:description2")}</p>
              </div>
              <div>
                <p>{t("pages:categories.seo:description3")}</p>
                <p>{t("pages:categories.seo:description4")}</p>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      <ContactCTA />
    </>
  );
}
