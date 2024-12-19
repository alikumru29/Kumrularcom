import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Brand } from "../types/brand";
import { turkishToAscii } from "../shared/utils/turkishUtils";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  const { t } = useTranslation();
  const brandSlug = turkishToAscii(brand.id.toLowerCase());

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={brand.heroImage}
          alt={`${brand.name} banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-8 object-contain mb-2"
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">
          {brand.name}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{brand.description}</p>

        <div className="space-y-2 mb-4">
          {brand.categories.slice(0, 3).map((category, index) => (
            <div key={index} className="text-sm text-slate-500">
              • {category}
            </div>
          ))}
          {brand.categories.length > 3 && (
            <div className="text-sm text-primary-600">
              {t("common:moreCategories", {
                count: brand.categories.length - 3,
              })}
            </div>
          )}
        </div>

        <Link
          to={`/markalar/${brandSlug}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          {t("common:buttons.details")} <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
