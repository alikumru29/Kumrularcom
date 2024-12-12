import React from 'react';

interface ProductCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export default function ProductCategory({ title, description, icon, image }: ProductCategoryProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
        <div className="text-white">
          <div className="flex items-center space-x-2 mb-2">
            {icon}
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}