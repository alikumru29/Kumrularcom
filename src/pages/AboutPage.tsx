import React from "react";
import SEOHead from "../components/SEOHead";
import ResponsiveContainer from "../components/ResponsiveContainer";
import PageHeader from "../components/PageHeader";
import ContactCTA from "../components/ContactCTA";
import AboutFeatures from "../components/features/AboutFeatures";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="Neden Biz?"
        description="1985'ten beri İstanbul Sultanbeyli'de hizmet veren Kumrular Seramik, premium banyo ürünleri ve seramik çözümleri sunan güvenilir markanız."
        canonical="/neden-biz"
      />

      <PageHeader
        title="Neden Kumrular Seramik?"
        description="38 yıllık tecrübemiz ve güvenilir hizmet anlayışımızla yanınızdayız"
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101"
      />

      {/* Features Grid */}
      <section className="py-16">
        <ResponsiveContainer>
          <AboutFeatures />
        </ResponsiveContainer>
      </section>

      {/* Detailed Content */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <ResponsiveContainer>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
              Kalite ve Güvenin Adresi
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Premium Marka İşbirlikleri
                </h3>
                <p>
                  1985 yılından bu yana VitrA, Artema, ECA, Kale, Serel gibi
                  Türkiye'nin ve dünyanın önde gelen markalarının yetkili
                  satıcısı olarak hizmet veriyoruz. Bu güçlü işbirliklerimiz
                  sayesinde, müşterilerimize en kaliteli ve yenilikçi ürünleri
                  sunabiliyoruz.
                </p>
                <p>
                  Her markadan geniş ürün yelpazemizle, farklı bütçe ve zevklere
                  hitap eden çözümler üretiyoruz. Premium markalarla çalışmanın
                  getirdiği deneyim ve güvenle, projelerinize değer katıyoruz.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Profesyonel Hizmet Anlayışı
                </h3>
                <p>
                  Uzman kadromuzla projelendirme aşamasından ürün seçimine,
                  satış sonrası hizmetlere kadar tüm süreçlerde yanınızdayız.
                  Showroom'umuzda en son banyo trendlerini ve yenilikçi
                  tasarımları yakından inceleyebilir, teknik ekibimizden detaylı
                  bilgi alabilirsiniz.
                </p>
                <p>
                  Müşteri memnuniyetini her şeyin üstünde tutan hizmet
                  anlayışımızla, İstanbul'un en güvenilir banyo ve seramik
                  mağazalarından biri olmaktan gurur duyuyoruz.
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
