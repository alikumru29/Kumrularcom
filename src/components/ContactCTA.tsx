import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import ResponsiveContainer from './ResponsiveContainer';

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Daha Fazla Bilgi Almak İster misiniz?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Uzman ekibimiz size en uygun çözümü sunmak için hazır. Hemen iletişime geçin!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+902163984764"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-opacity-90 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hemen Arayın
              </a>
              <a
                href="mailto:info@kumrular.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                E-posta Gönderin
              </a>
            </div>
          </div>
        </motion.div>
      </ResponsiveContainer>
    </section>
  );
}