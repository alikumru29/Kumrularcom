import SEOHead from "../components/SEOHead";
import ResponsiveContainer from "../components/ResponsiveContainer";
import BrandCard from "../components/BrandCard";
import ContactCTA from "../components/ContactCTA";
import PageHeader from "../components/PageHeader";
import { brands } from "../data/brands";
import { motion } from "framer-motion";

export default function BrandsPage() {
  return (
    <>
      <SEOHead
        title="Markalarımız"
        description="VitrA, Artema, ECA, Kale, Serel ve daha birçok premium markanın yetkili satıcısı. Kaliteli ve güvenilir banyo ürünleri için doğru adres."
        canonical="/markalar"
      />

      <PageHeader
        title="Çalıştığımız Markalar"
        description="Türkiye ve dünyanın önde gelen markalarıyla işbirliği yaparak size en kaliteli ürünleri sunuyoruz."
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
      />

      {/* Brands Grid */}
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

      {/* SEO Content */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <ResponsiveContainer>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
              Premium Marka Ortaklıklarımız
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p>
                  Kumrular Seramik olarak, sektörün lider markalarıyla
                  kurduğumuz güçlü işbirlikleri sayesinde, müşterilerimize en
                  kaliteli ve yenilikçi ürünleri sunuyoruz.
                </p>
              </div>
              <div>
                <p>
                  Showroom'umuzda bu premium markaların en yeni koleksiyonlarını
                  ve trend ürünlerini yakından inceleyebilir, uzman ekibimizden
                  detaylı bilgi alabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      <ContactCTA />
    </>
  );
}
