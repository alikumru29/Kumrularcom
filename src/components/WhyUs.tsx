import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Shield, Award, ThumbsUp, Plane } from "lucide-react";
import ResponsiveContainer from "./ResponsiveContainer";

export default function WhyUs() {
  const { t } = useTranslation();

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
            {t("components.whyUs.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-primary-500" />}
            title={t("components.whyUs.features.experience.title")}
            description={t("components.whyUs.features.experience.description")}
            delay={0}
          />

          <FeatureCard
            icon={<Award className="w-12 h-12 text-primary-500" />}
            title={t("components.whyUs.features.brands.title")}
            description={t("components.whyUs.features.brands.description")}
            delay={0.1}
          />

          <FeatureCard
            icon={<ThumbsUp className="w-12 h-12 text-primary-500" />}
            title={t("components.whyUs.features.service.title")}
            description={t("components.whyUs.features.service.description")}
            delay={0.2}
          />
        </div>

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
                    {t("components.whyUs.shipping.title")}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  {t("components.whyUs.shipping.description")}
                </p>
                <ul className="text-slate-600 space-y-2">
                  {t<string[]>("components.whyUs.shipping.featuresList", {
                    returnObjects: true,
                  }).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </ResponsiveContainer>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-2xl font-bold mt-4 mb-2 text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}
