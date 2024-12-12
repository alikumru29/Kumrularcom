import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, ThumbsUp, Plane } from "lucide-react";
import ResponsiveContainer from "./ResponsiveContainer";

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Neden Kumrular Seramik?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-primary-500" />
              <h3 className="text-2xl font-bold mt-4 mb-2 text-slate-800">
                38 Yıllık Deneyim
              </h3>
              <p className="text-slate-600">
                1985'ten beri İstanbul'da banyo ve seramik sektörünün öncü
                firmalarından biri olarak hizmet veriyoruz.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <Award className="w-12 h-12 text-primary-500" />
              <h3 className="text-2xl font-bold mt-4 mb-2 text-slate-800">
                Premium Markalar
              </h3>
              <p className="text-slate-600">
                Türkiye ve Avrupa'nın önde gelen markalarının yetkili
                satıcısıyız.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <ThumbsUp className="w-12 h-12 text-primary-500" />
              <h3 className="text-2xl font-bold mt-4 mb-2 text-slate-800">
                Profesyonel Hizmet
              </h3>
              <p className="text-slate-600">
                Uzman ekibimizle projelendirme ve uygulama desteği sağlıyoruz.
              </p>
            </div>
          </motion.div>
        </div>

        {/* International Shipping Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Plane className="w-8 h-8 text-primary-500" />
                  <h3 className="text-2xl font-bold text-slate-800">
                    Uluslararası Teslimat
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  FOB, CIF ve EXW teslim şartlarıyla dünya genelinde güvenli ve
                  hızlı teslimat hizmeti sunuyoruz. ISO 9001:2015 kalite
                  standartlarına uygun olarak gerçekleştirdiğimiz ihracat
                  operasyonlarımızla, ürünlerinizi dünyanın her yerine
                  ulaştırıyoruz.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    Uluslararası standartlara uygun paketleme
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    Gümrük ve dokümantasyon desteği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    Konteyner ve parsiyel yükleme seçenekleri
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </ResponsiveContainer>
    </section>
  );
}
