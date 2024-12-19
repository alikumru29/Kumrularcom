import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300">
      <ResponsiveContainer>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Kumrular Seramik
            </h3>
            <p className="text-slate-400 mb-4">
              {t("components.footer.company.description")}
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

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t("components.footer.categories.title")}
            </h3>
            <ul className="space-y-3">
              {Object.entries(
                t("components.footer.categories.items", { returnObjects: true })
              ).map(([key, value]) => (
                <li key={key}>
                  <Link
                    to={`/categories/${key}`}
                    className="hover:text-white transition-colors"
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t("components.contact.title")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary-500" />
                <span>{t("components.contact.address.value")}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-500" />
                <a
                  href="tel:+902163984764"
                  className="hover:text-white transition-colors"
                >
                  {t("components.contact.phone.value")}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-500" />
                <a
                  href="mailto:info@kumrular.com"
                  className="hover:text-white transition-colors"
                >
                  {t("components.contact.email.value")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t("components.footer.workingHours.title")}
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                {t("components.footer.workingHours.weekdays")}
              </li>
              <li className="flex justify-between">
                {t("components.footer.workingHours.saturday")}
              </li>
              <li className="flex justify-between">
                {t("components.footer.workingHours.sunday")}
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-slate-700 text-center text-slate-400">
          <p>
            {t("components.footer.copyright", {
              year: new Date().getFullYear(),
            })}
          </p>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
