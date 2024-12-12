import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ResponsiveContainer from "./ResponsiveContainer";

const slides = [
  {
    image: "/src/assets/banner/homebanner.jpg",
    title: "Modern Banyo Tasarımları",
    subtitle:
      "Premium malzemeler ve yenilikçi tasarımlarla banyonuzu sanatsal bir yaşam alanına dönüştürün",
  },
  {
    image: "/src/assets/banner/homebanner-2.jpg",
    title: "Lüks Vitrifiye Ürünleri",
    subtitle: "En seçkin markaların en yeni koleksiyonları Kumrular Seramik'te",
  },
  {
    image: "/src/assets/banner/homebanner-3.jpg",
    title: "Profesyonel Çözümler",
    subtitle: "38 yıllık tecrübemizle hayalinizdeki banyoyu tasarlıyoruz",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handlePrevSlide = () => {
    if (!isAnimating) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const handleNextSlide = () => {
    if (!isAnimating) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 30, ease: "linear" }}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center">
        <ResponsiveContainer>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12">
                    {slides[currentSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  to="/kategoriler"
                  className="bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors text-center"
                >
                  Koleksiyonları Keşfedin
                </Link>
                <a
                  href="tel:+902163984764"
                  className="bg-white/10 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors text-center"
                >
                  Randevu Alın
                </a>
              </div>
            </motion.div>
          </div>
        </ResponsiveContainer>
      </div>

      {/* Navigation Controls */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
