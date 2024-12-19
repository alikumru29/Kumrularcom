import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BrandCard from "./BrandCard";
import { brands } from "../data/brands";

export default function Brands() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.offsetWidth * 0.4;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="py-24 relative bg-gradient-to-br from-slate-50 to-slate-100"
      id="markalar"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">
            {t("pages:brands.header.title")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("pages:brands.header.description")}
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-slate-800" />
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 pb-4"
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="snap-start flex-none w-[calc(40%-1rem)] min-w-[300px]"
              >
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-slate-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-slate-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
