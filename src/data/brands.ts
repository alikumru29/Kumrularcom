import { Brand } from "../types/brand";
import vitraLogo from "../assets/img/vitra.png";
import artemaLogo from "../assets/img/artema.png";
import ecaLogo from "../assets/img/eca.png";
import kaleLogo from "../assets/img/kale.png";
import serelLogo from "../assets/img/serel.png";
import pureConceptLogo from "../assets/img/pure-concept.png";
import yurtbayLogo from "../assets/img/yurtbay.svg";
import ankaLogo from "../assets/img/anka.png";
import showerLogo from "../assets/img/shower.png";

import vitraHero from "../assets/banner/vitra.jpg";
import artemaHero from "../assets/banner/artema.jpg";
import ecaHero from "../assets/banner/eca.jpg";
import kaleHero from "../assets/banner/kale.jpg";
import serelHero from "../assets/banner/serel.jpg";
import pureConceptHero from "../assets/banner/pure-concept.jpg";
import yurtbayHero from "../assets/banner/yurtbay.jpg";
import ankaHero from "../assets/banner/anka.jpg";
import showerHero from "../assets/banner/shower.jpg";

export const brands: Brand[] = [
  {
    id: "vitra",
    name: "VitrA",
    logo: vitraLogo,
    heroImage: vitraHero,
    description:
      "VitrA, 1942 yilinda kurulmus, banyo kulturunu sekillendiren, yenilikci tasarimlari ve ustun teknolojisiyle one cikan global bir markadir.",
    categories: [
      "Lavabolar",
      "Klozetler",
      "Banyo Mobilyalari",
      "Armaturler",
      "Dus Sistemleri",
    ],
    features: [
      "Tasarim odullu koleksiyonlar",
      "Su tasarruflu teknolojiler",
      "Hijyen+ teknolojisi",
      "Akilli klozet sistemleri",
    ],
    website: "https://www.vitra.com.tr",
  },
  {
    id: "artema",
    name: "Artema",
    logo: artemaLogo,
    heroImage: artemaHero,
    description:
      "Artema, 1950 yilindan bu yana armatur ve banyo aksesuarlari uretiminde Turkiye'nin lider markasidir.",
    categories: ["Armaturler", "Dus Sistemleri", "Banyo Aksesuarlari"],
    features: [
      "Su ve enerji tasarrufu",
      "Akilli armatur teknolojileri",
      "Uzun omurlu kartus sistemleri",
      "Cevre dostu uretim",
    ],
    website: "https://www.artema.com.tr",
  },
  {
    id: "eca",
    name: "E.C.A",
    logo: ecaLogo,
    heroImage: ecaHero,
    description:
      "E.C.A, yarim asri askin suredir Turkiye'nin onde gelen armatur ve tesisat ekipmanlari ureticisidir.",
    categories: ["Armaturler", "Dus Sistemleri", "Tesisat Ekipmanlari"],
    features: [
      "Cevre dostu urunler",
      "Enerji tasarruflu cozumler",
      "Gelismis kartus teknolojisi",
      "Uzun omurlu performans",
    ],
    website: "https://www.eca.com.tr",
  },
  {
    id: "kale",
    name: "Kale",
    logo: kaleLogo,
    heroImage: kaleHero,
    description:
      "Kale, Turkiye'nin ilk seramik markalarindan biri olarak, yenilikci tasarimlari ve kaliteli urunleriyle banyo ve yasam alanlarina deger katar.",
    categories: ["Seramik", "Vitrifiye", "Banyo Mobilyalari"],
    features: [
      "Nano teknoloji yuzeyler",
      "Antibakteriyel urunler",
      "Cevreye duyarli uretim",
      "Ozel tasarim koleksiyonlar",
    ],
    website: "https://www.kale.com.tr",
  },
  {
    id: "serel",
    name: "Serel",
    logo: serelLogo,
    heroImage: serelHero,
    description:
      "Serel, modern banyo tasariminda yenilikci cozumler sunan, kaliteli ve estetik urunleriyle one cikan bir Turk markasi.",
    categories: ["Vitrifiye", "Lavabolar", "Klozetler", "Banyo Mobilyalari"],
    features: [
      "Yuksek kalite standartlari",
      "Modern tasarim anlayisi",
      "Cevre dostu uretim",
      "Genis urun yelpazesi",
    ],
    website: "https://www.serel.com.tr",
  },
  {
    id: "pure-concept",
    name: "Pure Concept",
    logo: pureConceptLogo,
    heroImage: pureConceptHero,
    description:
      "Pure Concept, luks banyo tasariminda minimalist ve modern cizgileri bir araya getiren premium bir markadir.",
    categories: [
      "Luks Banyo Mobilyalari",
      "Ozel Tasarim Lavabolar",
      "Premium Dus Sistemleri",
    ],
    features: [
      "El yapimi urunler",
      "Ozel tasarim koleksiyonlar",
      "Premium malzeme kalitesi",
      "Kisisellestirilmis cozumler",
    ],
    website: "https://www.pureconcept.com.tr",
  },
  {
    id: "yurtbay",
    name: "Yurtbay Seramik",
    logo: yurtbayLogo,
    heroImage: yurtbayHero,
    description:
      "Yurtbay Seramik, yenilikci teknolojiler ve modern tasarim anlayisiyla urettigi seramik koleksiyonlariyla yasam alanlarini guzellestirir.",
    categories: ["Seramik", "Porselen", "Mozaik", "Dis Mekan Seramikleri"],
    features: [
      "Ileri teknoloji uretim",
      "Genis renk ve desen secenekleri",
      "Dayanikli yuzeyler",
      "Kolay temizlenebilir urunler",
    ],
    website: "https://www.yurtbay.com.tr",
  },
  {
    id: "anka",
    name: "Anka Seramik",
    logo: ankaLogo,
    heroImage: ankaHero,
    description:
      "Anka Seramik, yerli uretim gucu ve modern tasarim anlayisiyla Turk seramik sektorunun yukselen markalarindan biridir.",
    categories: ["Seramik", "Porselen", "Dekoratif Urunler"],
    features: [
      "Yerli uretim",
      "Ekonomik cozumler",
      "Kaliteli hammadde",
      "Cevreye duyarli uretim",
    ],
    website: "https://www.ankaseramik.com.tr",
  },
  {
    id: "shower",
    name: "Shower",
    logo: showerLogo,
    heroImage: showerHero,
    description:
      "Shower, dus sistemleri ve banyo aksesuarlari alaninda uzmanlasmis, yenilikci ve kullanici dostu urunler sunan bir markadir.",
    categories: ["Dus Sistemleri", "Dus Kabin", "Banyo Aksesuarlari"],
    features: [
      "Modern tasarimlar",
      "Pratik kullanim",
      "Dayanikli malzemeler",
      "Uygun fiyat politikasi",
    ],
    website: "https://www.shower.com.tr",
  },
];
