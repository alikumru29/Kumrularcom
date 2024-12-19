import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";
import ResponsiveContainer from "../components/ResponsiveContainer";
import BrandCard from "../components/BrandCard";
import ContactCTA from "../components/ContactCTA";
import PageHeader from "../components/PageHeader";
import { brands } from "../data/brands";
import { motion } from "framer-motion";

export default function BrandsPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t("seo:brands.title")}
        description={t("seo:brands.description")}
        canonical="/markalar"
      />

      <PageHeader
        title={t("pages:brands.header.title")}
        description={t("pages:brands.header.description")}
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
      />

      <section className="py-16">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BrandCard brand={brand} />
              </motion.div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <ResponsiveContainer>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
              {t("pages:brands.partnerships.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p>{t("pages:brands.partnerships.description1")}</p>
              </div>
              <div>
                <p>{t("pages:brands.partnerships.description2")}</p>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      <ContactCTA />
    </>
  );
}
