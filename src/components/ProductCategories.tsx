import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ResponsiveContainer from "./ResponsiveContainer";
import { categories } from "../data/categories";

export default function ProductCategories() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.offsetWidth * 0.4; // Show 4 items on larger screens
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <ResponsiveContainer>
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
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-start flex-none w-[calc(25%-1rem)] min-w-[300px]"
              >
                <Link
                  to={`/kategoriler/${category.id}`}
                  className="block group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={category.banner}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-200 mb-4">
                          {category.description}
                        </p>
                        <button className="px-6 py-2 bg-white/10 text-white rounded-full group-hover:bg-white group-hover:text-primary-600 transition-all duration-300">
                          HEMEN KEŞFET
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-slate-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-slate-800" />
          </button>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
