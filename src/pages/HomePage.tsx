import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import WhyUs from "../components/WhyUs";
import Brands from "../components/Brands";
import FeaturedProducts from "../components/FeaturedProducts";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        canonical="/"
      />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <WhyUs />
      <Brands />
    </>
  );
}
