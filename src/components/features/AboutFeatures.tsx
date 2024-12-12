import { motion } from "framer-motion";
import { Award, Users, Clock, Truck, Heart, Star } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-12 h-12 text-primary-500" />,
    title: "38 Yıllık Deneyim",
    description:
      "1985'ten beri İstanbul'da banyo ve seramik sektörünün öncü firmalarından biri olarak hizmet veriyoruz.",
  },
  {
    icon: <Award className="w-12 h-12 text-primary-500" />,
    title: "Premium Markalar",
    description:
      "VitrA, Artema, ECA, Kale, Serel gibi sektörün lider markalarının yetkili satıcısıyız.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary-500" />,
    title: "Uzman Kadro",
    description:
      "Deneyimli ekibimizle projelendirmeden uygulamaya kadar tüm süreçlerde yanınızdayız.",
  },
  {
    icon: <Star className="w-12 h-12 text-primary-500" />,
    title: "Teknik Destek",
    description:
      "Satış sonrası teknik destek ve servis hizmetlerimizle sorunlarınıza hızlı çözümler sunuyoruz.",
  },
  {
    icon: <Truck className="w-12 h-12 text-primary-500" />,
    title: "Hızlı Teslimat",
    description:
      "Geniş stok ağımız sayesinde siparişlerinizi en kısa sürede teslim ediyoruz.",
  },
  {
    icon: <Heart className="w-12 h-12 text-primary-500" />,
    title: "Müşteri Memnuniyeti",
    description:
      "Müşteri memnuniyetini her şeyin üstünde tutarak kaliteli hizmet sunuyoruz.",
  },
];

export default function AboutFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
            <p className="text-slate-600">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
