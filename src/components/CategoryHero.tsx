import React from "react";
import { motion } from "framer-motion";
import { Category } from "../types/category";

interface CategoryHeroProps {
  category: Category;
}

export default function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <div className="relative h-[50vh] overflow-hidden">
      <img
        src={category.banner}
        alt={category.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {category.title}
            </h1>
            <p className="text-xl text-slate-200">{category.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
