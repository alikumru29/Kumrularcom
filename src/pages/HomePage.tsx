import SEOHead from "../components/SEOHead";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import WhyUs from "../components/WhyUs";
import Brands from "../components/Brands";
import FeaturedProducts from "../components/FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Ana Sayfa"
        description="1985'ten beri İstanbul'da premium banyo ürünleri, seramik ve yapı malzemeleri. VitrA, Artema, ECA, Kale ve daha birçok markanın yetkili satıcısı."
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
