import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import ResponsiveContainer from "./ResponsiveContainer";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300">
      <ResponsiveContainer>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Kurumsal */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Kumrular Seramik
            </h3>
            <p className="text-slate-400 mb-4">
              1985'ten beri İstanbul'da premium banyo ürünleri ve seramik
              çözümleri sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kategoriler */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Kategoriler
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/kategoriler/seramik"
                  className="hover:text-white transition-colors"
                >
                  Banyo Seramikleri
                </Link>
              </li>
              <li>
                <Link
                  to="/kategoriler/bathing-areas"
                  className="hover:text-white transition-colors"
                >
                  Yıkanma Alanları
                </Link>
              </li>
              <li>
                <Link
                  to="/kategoriler/construction-chemicals"
                  className="hover:text-white transition-colors"
                >
                  Yapı Kimyasalları
                </Link>
              </li>
              <li>
                <Link
                  to="/kategoriler/accessories"
                  className="hover:text-white transition-colors"
                >
                  Banyo Aksesuarları
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary-500" />
                <span>
                  Turgutreis Mah. Demokrasi Cad. No:219
                  <br />
                  Sultanbeyli, İstanbul
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-500" />
                <a
                  href="tel:+902163984764"
                  className="hover:text-white transition-colors"
                >
                  +90 (216) 398 47 64
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-500" />
                <a
                  href="mailto:info@kumrular.com"
                  className="hover:text-white transition-colors"
                >
                  info@kumrular.com
                </a>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Çalışma Saatleri
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Pazartesi - Cuma:</span>
                <span>09:00 - 18:30</span>
              </li>
              <li className="flex justify-between">
                <span>Cumartesi:</span>
                <span>09:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Pazar:</span>
                <span>Kapalı</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-slate-700 text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} Kumrular Seramik. Tüm hakları saklıdır.
          </p>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
