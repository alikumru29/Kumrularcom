import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";
import ResponsiveContainer from "./ResponsiveContainer";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      className="py-24 bg-gradient-to-br from-slate-50 to-slate-100"
      id="iletisim"
    >
      <ResponsiveContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            {t("components.contact.title")}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("components.contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary-500" />
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                {t("components.contact.address.title")}
              </h3>
              <p className="text-slate-600 whitespace-pre-line">
                {t("components.contact.address.value")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="w-8 h-8 mx-auto mb-4 text-primary-500" />
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                {t("components.contact.phone.title")}
              </h3>
              <p className="text-slate-600">
                <a
                  href="tel:+902163984764"
                  className="hover:text-primary-600 transition-colors"
                >
                  {t("components.contact.phone.value")}
                </a>
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary-500" />
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                {t("components.contact.email.title")}
              </h3>
              <p className="text-slate-600">
                <a
                  href="mailto:info@kumrular.com"
                  className="hover:text-primary-600 transition-colors"
                >
                  {t("components.contact.email.value")}
                </a>
              </p>
            </div>
          </div>

          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.4761111557247!2d29.267891776537713!3d40.96419597134391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad08966ce0ea3%3A0x8ab373a5b5ff5e33!2sTurgutreis%2C%20Demokrasi%20Cd.%20No%3A219%2C%2034930%20Sultanbeyli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1710835847447!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
