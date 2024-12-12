import React from 'react';
import { Shield, Award, ThumbsUp } from 'lucide-react';

export default function SeoContent() {
  return (
    <div className="bg-neutral-900 py-24">
      <div className="container mx-auto px-4">
        {/* Ürün Kategorileri SEO Bloğu */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-gradient text-center">Banyo Ürünleri Kategorilerimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">{category.title}</h3>
                <p className="text-neutral-300 mb-4">{category.description}</p>
                <ul className="space-y-2 text-neutral-400">
                  {category.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Neden Biz? Bloğu */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-gradient text-center">Neden Kumrular Seramik?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-2xl font-bold mb-4">30 Yıllık Deneyim</h3>
              <p className="text-neutral-300">1993'ten beri Ankara'nın en güvenilir banyo ve seramik mağazasıyız.</p>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-2xl font-bold mb-4">Premium Markalar</h3>
              <p className="text-neutral-300">Türkiye ve Avrupa'nın önde gelen markalarının yetkili satıcısıyız.</p>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center">
              <ThumbsUp className="w-12 h-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-2xl font-bold mb-4">Profesyonel Hizmet</h3>
              <p className="text-neutral-300">Uzman ekibimizle projelendirme ve uygulama desteği sağlıyoruz.</p>
            </div>
          </div>
        </div>

        {/* SEO İçerik Bloğu */}
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-gradient">Ankara'nın En Kapsamlı Banyo Mağazası</h2>
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">
              Kumrular Seramik, 30 yılı aşkın süredir Ankara'da premium banyo ürünleri ve seramik çözümleri sunmaktadır. 
              VitrA, Creavit, Eca, Artema, Serel, Kale, İdeal Standard ve Grohe gibi sektörün önde gelen markalarının 
              yetkili satıcısı olarak hizmet vermekteyiz.
            </p>
            <p className="mb-4">
              Geniş ürün yelpazemizde lavabolar, klozetler, duş sistemleri, armatürler, banyo mobilyaları ve aksesuarları 
              bulunmaktadır. Her bütçeye uygun seçenekler sunarken, kaliteden ödün vermeden müşterilerimizin beklentilerini 
              karşılamayı hedefliyoruz.
            </p>
            <p>
              Profesyonel ekibimiz, projelendirme aşamasından ürün seçimine, satış sonrası hizmetlere kadar tüm süreçlerde 
              yanınızda yer almaktadır. Showroom'umuzda en son banyo trendlerini ve yenilikçi tasarımları yakından 
              inceleyebilir, uzman kadromuzdan detaylı bilgi alabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    title: "Lavabolar ve Klozetler",
    description: "Modern tasarımlı, su tasarruflu ve akıllı özelliklere sahip lavabo ve klozet seçenekleri",
    items: [
      "Asma Klozetler",
      "Yerden Klozetler",
      "Tek Parça Lavabolar",
      "Mobilyalı Lavabo Setleri",
      "Çanak Lavabolar"
    ]
  },
  {
    title: "Duş Sistemleri",
    description: "Konforlu ve şık duş deneyimi için eksiksiz duş sistemi çözümleri",
    items: [
      "Tepe Duşları",
      "El Duşları",
      "Duş Kolonları",
      "Gömme Duş Setleri",
      "Duş Tekneleri"
    ]
  },
  {
    title: "Armatürler",
    description: "Su tasarrufu sağlayan modern ve klasik armatür seçenekleri",
    items: [
      "Lavabo Bataryaları",
      "Duş Bataryaları",
      "Ankastre Bataryalar",
      "Fotoselli Bataryalar",
      "Termostatik Bataryalar"
    ]
  }
];