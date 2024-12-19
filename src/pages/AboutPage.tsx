import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";
import ResponsiveContainer from "../components/ResponsiveContainer";
import PageHeader from "../components/PageHeader";
import ContactCTA from "../components/ContactCTA";
import AboutFeatures from "../components/features/AboutFeatures";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t("seo:about.title")}
        description={t("seo:about.description")}
        canonical="/neden-biz"
      />

      <PageHeader
        title={t("pages:about.header.title")}
        description={t("pages:about.header.description")}
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101"
      />

      <section className="py-16">
        <ResponsiveContainer>
          <AboutFeatures />
        </ResponsiveContainer>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <ResponsiveContainer>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
              {t("pages:about.quality.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {t("pages:about.quality.brands.title")}
                </h3>
                <p>{t("pages:about.quality.brands.description1")}</p>
                <p>{t("pages:about.quality.brands.description2")}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {t("pages:about.quality.service.title")}
                </h3>
                <p>{t("pages:about.quality.service.description1")}</p>
                <p>{t("pages:about.quality.service.description2")}</p>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      <ContactCTA />
    </>
  );
}
