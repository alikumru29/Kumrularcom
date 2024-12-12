import React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

export default function PageHeader({
  title,
  description,
  image,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`relative min-h-[60vh] flex items-center ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}
