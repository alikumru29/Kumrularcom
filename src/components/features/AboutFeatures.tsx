import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Award, Users, Clock, Truck, Heart, Star } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutFeatures() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Clock className="w-12 h-12 text-primary-500" />,
      translationKey: "experience",
    },
    {
      icon: <Award className="w-12 h-12 text-primary-500" />,
      translationKey: "brands",
    },
    {
      icon: <Users className="w-12 h-12 text-primary-500" />,
      translationKey: "expertise",
    },
    {
      icon: <Star className="w-12 h-12 text-primary-500" />,
      translationKey: "support",
    },
    {
      icon: <Truck className="w-12 h-12 text-primary-500" />,
      translationKey: "delivery",
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-500" />,
      translationKey: "satisfaction",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.translationKey}
          icon={feature.icon}
          title={t(`components:aboutFeatures.${feature.translationKey}.title`)}
          description={t(
            `components:aboutFeatures.${feature.translationKey}.description`
          )}
          index={index}
        />
      ))}
    </div>
  );
}
