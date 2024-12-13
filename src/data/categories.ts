import { Category } from "../types/category";

import seramikHero from "../assets/banner/seramik.jpg";
import vitfifiyeHero from "../assets/banner/vitrifiye.jpg";
import banyodolabiHero from "../assets/banner/banyo-mobilyasi.jpg";
import yikanmaalanlariHero from "../assets/banner/yikanma-alanlari.jpg";
import armaturHero from "../assets/banner/armatur.jpg";
import aksesuarHero from "../assets/banner/aksesuar.jpg";
import yapikimyasallariHero from "../assets/banner/yapi-kimyasallari.jpg";

export const categories: Category[] = [
  {
    id: "seramik",
    title: "Seramik",
    description: "Modern ve klasik tasarımlarla banyonuzu kişiselleştirin",
    banner: seramikHero,
    subcategories: [
      {
        title: "Duvar Seramikleri",
        items: [
          "Mat Seramikler",
          "Parlak Seramikler",
          "Dokulu Seramikler",
          "3D Seramikler",
          "Mozaik Seramikler",
          "Dekoratif Bordürler",
        ],
        features: [
          "Antibakteriyel Yüzey",
          "Kolay Temizlenebilir",
          "Leke Tutmaz",
          "Çizilmeye Dayanıklı",
        ],
      },
      {
        title: "Yer Seramikleri",
        items: [
          "Porselen Karolar",
          "Kaydırmaz Seramikler",
          "Büyük Ebatlı Karolar",
          "Ahşap Görünümlü Seramikler",
          "Mermer Görünümlü Seramikler",
        ],
        features: [
          "Yüksek Dayanıklılık",
          "Kaydırmaz Yüzey",
          "Dona Dayanıklı",
          "UV Dayanımlı",
        ],
      },
    ],
    seoContent: `Banyo seramikleri, mekanınızın hem estetik hem de fonksiyonel açıdan en önemli yapı taşlarından biridir.`,
  },
  {
    id: "vitrifiye",
    title: "Vitrifiye",
    description: "Kaliteli ve modern vitrifiye ürünleri",
    banner: vitfifiyeHero,
    subcategories: [
      {
        title: "Lavabolar",
        items: [
          "Asma Lavabolar",
          "Tezgah Üstü Lavabolar",
          "Ayaklı Lavabolar",
          "Çanak Lavabolar",
          "Mobilyalı Lavabolar",
        ],
        features: [
          "Kolay Temizlik",
          "Dayanıklı Yüzey",
          "Modern Tasarım",
          "Hijyenik Malzeme",
        ],
      },
      {
        title: "Klozetler",
        items: [
          "Asma Klozetler",
          "Yerden Klozetler",
          "Akıllı Klozetler",
          "Taharet Sistemleri",
          "Rezervuarlar",
        ],
        features: [
          "Rim-ex Teknoloji",
          "Su Tasarrufu",
          "Kolay Montaj",
          "Sessiz Kapak",
        ],
      },
    ],
    seoContent: `En son teknoloji ile üretilen vitrifiye ürünlerimiz, maksimum hijyen ve konfor sağlar.`,
  },
  {
    id: "banyo-mobilyalari",
    title: "Banyo Mobilyaları",
    description: "Fonksiyonel ve şık banyo mobilyaları",
    banner: banyodolabiHero,
    subcategories: [
      {
        title: "Dolap Sistemleri",
        items: [
          "Alt Dolaplar",
          "Üst Dolaplar",
          "Boy Dolaplar",
          "Çamaşır Sepetli Dolaplar",
          "Aynalı Dolaplar",
        ],
        features: [
          "Nem Dayanımlı",
          "Soft-Close Menteşe",
          "Modüler Tasarım",
          "Geniş Depolama",
        ],
      },
      {
        title: "Banyo Setleri",
        items: [
          "Lavabo Dolapları",
          "Ayna Üniteleri",
          "Çekmeceli Üniteler",
          "LED Aynalar",
          "Banyo Masaları",
        ],
        features: [
          "Modern Tasarım",
          "Kaliteli Malzeme",
          "Kolay Temizlik",
          "Uzun Ömürlü",
        ],
      },
    ],
    seoContent: `Modern banyo mobilyalarımız, estetik görünümün yanı sıra maksimum depolama alanı sunar.`,
  },
  {
    id: "yikanma-alanlari",
    title: "Yıkanma Alanları",
    description: "Konforlu ve lüks yıkanma alanları",
    banner: yikanmaalanlariHero,
    subcategories: [
      {
        title: "Duş Sistemleri",
        items: [
          "Duş Kabinleri",
          "Duş Tekneleri",
          "Sauna Sistemleri",
          "Buhar Odaları",
          "Jakuziler",
        ],
        features: [
          "Temperli Cam",
          "Su Sızdırmazlık",
          "Kolay Montaj",
          "Dayanıklı Profil",
        ],
      },
      {
        title: "Küvetler",
        items: [
          "Akrillik Küvetler",
          "Oval Küvetler",
          "Dikdörtgen Küvetler",
          "Köşe Küvetler",
          "Masajlı Küvetler",
        ],
        features: [
          "Ergonomik Tasarım",
          "Kaymaz Taban",
          "Ses İzolasyonu",
          "Kolay Temizlik",
        ],
      },
    ],
    seoContent: `Yıkanma alanları koleksiyonumuz, modern yaşamın konfor beklentilerini karşılar.`,
  },
  {
    id: "armatur",
    title: "Armatür",
    description: "Modern ve klasik armatür çeşitleri",
    banner: armaturHero,
    subcategories: [
      {
        title: "Lavabo Armatürleri",
        items: [
          "Standart Bataryalar",
          "Fotoselli Bataryalar",
          "Ankastre Bataryalar",
          "Çanak Lavabo Bataryaları",
          "Tasarruflu Bataryalar",
        ],
        features: [
          "Su Tasarrufu",
          "Kireç Tutmaz",
          "Kolay Temizlik",
          "Uzun Ömürlü",
        ],
      },
      {
        title: "Duş Armatürleri",
        items: [
          "Duş Bataryaları",
          "Tepe Duşları",
          "El Duşları",
          "Sürgülü Duş Setleri",
          "Termostatik Bataryalar",
        ],
        features: [
          "Sıcaklık Kontrolü",
          "Debi Ayarı",
          "Kireç Önleyici",
          "Kolay Montaj",
        ],
      },
    ],
    seoContent: `Armatür koleksiyonumuz, su tasarrufu ve kullanım kolaylığı sağlar.`,
  },
  {
    id: "aksesuarlar",
    title: "Banyo Aksesuarları",
    description: "Şık ve fonksiyonel banyo aksesuarları",
    banner: aksesuarHero,
    subcategories: [
      {
        title: "Temel Aksesuarlar",
        items: [
          "Havluluklar",
          "Sabunluklar",
          "Diş Fırçalıkları",
          "Tuvalet Kağıtlıkları",
          "Askılıklar",
        ],
        features: [
          "Paslanmaz Malzeme",
          "Modern Tasarım",
          "Kolay Montaj",
          "Dayanıklı Yapı",
        ],
      },
      {
        title: "Özel Aksesuarlar",
        items: [
          "Banyo Aynaları",
          "Çöp Kovaları",
          "Banyo Setleri",
          "Duş Rafları",
          "Makyaj Aynaları",
        ],
        features: [
          "LED Aydınlatma",
          "Buğu Yapmaz",
          "Şık Tasarım",
          "Uzun Ömürlü",
        ],
      },
    ],
    seoContent: `Banyo aksesuarları koleksiyonumuz, banyonuzun fonksiyonelliğini artırır.`,
  },
  {
    id: "construction-chemicals",
    title: "Yapı Kimyasalları",
    description: "Profesyonel yapı kimyasalları",
    banner: yapikimyasallariHero,
    subcategories: [
      {
        title: "Yapıştırıcılar",
        items: [
          "Seramik Yapıştırıcıları",
          "Granit Yapıştırıcıları",
          "Havuz Yapıştırıcıları",
          "Mermer Yapıştırıcıları",
          "Flex Yapıştırıcılar",
        ],
        features: [
          "Yüksek Yapışma",
          "Su Geçirmezlik",
          "Donma Direnci",
          "Kolay Uygulama",
        ],
      },
      {
        title: "Derz Dolguları",
        items: [
          "Silikon Bazlı Dolgular",
          "Epoksi Derzler",
          "Flex Derzler",
          "Anti Bakteriyel Derzler",
          "Havuz Derzleri",
        ],
        features: ["Leke Tutmaz", "Su İtici", "Çatlama Yapmaz", "UV Dayanımlı"],
      },
    ],
    seoContent: `Yapı kimyasalları serimiz, profesyonel uygulamalar için gerekli tüm malzemeleri içerir.`,
  },
];
