import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ResponsiveContainer from "../components/ResponsiveContainer";
import SEOHead from "../components/SEOHead";

export default function ContactPage() {
  const { t } = useTranslation(["pages", "common"]);

  return (
    <>
      <SEOHead
        title={t("seo:contact.title")}
        description={t("seo:contact.description")}
        canonical="/iletisim"
      />
      <div className="pt-24">
        <section className="relative h-[40vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea"
            alt={t("pages:contact.header.title")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/50" />
          <div className="absolute inset-0 flex items-center">
            <ResponsiveContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl text-white"
              >
                <h1 className="text-5xl font-bold mb-6">
                  {t("pages:contact.header.title")}
                </h1>
                <p className="text-xl text-slate-200">
                  {t("pages:contact.header.subtitle")}
                </p>
              </motion.div>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
          <ResponsiveContainer>
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <ContactInfoCard
                  icon={<MapPin className="w-6 h-6 text-primary-500 mt-1" />}
                  title={t("pages:contact.info.address.title")}
                  content={t("pages:contact.info.address.value")}
                />

                <ContactInfoCard
                  icon={<Phone className="w-6 h-6 text-primary-500 mt-1" />}
                  title={t("pages:contact.info.phone.title")}
                  content={
                    <a
                      href="tel:+902163984764"
                      className="hover:text-primary-600 transition-colors"
                    >
                      {t("pages:contact.info.phone.value")}
                    </a>
                  }
                />

                <ContactInfoCard
                  icon={<Mail className="w-6 h-6 text-primary-500 mt-1" />}
                  title={t("pages:contact.info.email.title")}
                  content={
                    <a
                      href="mailto:info@kumrular.com"
                      className="hover:text-primary-600 transition-colors"
                    >
                      {t("pages:contact.info.email.value")}
                    </a>
                  }
                />

                <ContactInfoCard
                  icon={<Clock className="w-6 h-6 text-primary-500 mt-1" />}
                  title={t("pages:contact.info.hours.title")}
                  content={
                    <div className="space-y-2">
                      <p>{t("pages:contact.info.hours.weekdays")}</p>
                      <p>{t("pages:contact.info.hours.saturday")}</p>
                      <p>{t("pages:contact.info.hours.sunday")}</p>
                    </div>
                  }
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="h-full min-h-[500px] bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.4761111557247!2d29.267891776537713!3d40.96419597134391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad08966ce0ea3%3A0x8ab373a5b5ff5e33!2sTurgutreis%2C%20Demokrasi%20Cd.%20No%3A219%2C%2034930%20Sultanbeyli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1710835847447!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

function ContactInfoCard({ icon, title, content }: ContactInfoCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-start space-x-4">
        {icon}
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="text-slate-600 whitespace-pre-line">{content}</div>
        </div>
      </div>
    </div>
  );
}
