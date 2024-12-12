import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/urunler/${product.slug}`} className="group block h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
        {/* Image Container - Fixed aspect ratio */}
        <div className="relative pt-[100%]">
          {product.images && product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://via.placeholder.com/400x400?text=Görsel+Yok";
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <span className="text-gray-400">Görsel Yok</span>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Brand */}
          <p className="text-sm text-primary-600 mb-2">{product.brand}</p>

          {/* Product Name - Fixed height with ellipsis */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 min-h-[3rem] line-clamp-2">
            {product.name}
          </h3>

          {/* Category */}
          <div className="text-sm text-gray-600 mb-4 flex-grow">
            {product.category}
          </div>

          {/* Button */}
          <button className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors mt-auto">
            İncele
          </button>
        </div>
      </div>
    </Link>
  );
}
