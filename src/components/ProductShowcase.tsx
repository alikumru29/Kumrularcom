import { motion } from "framer-motion";
import ResponsiveContainer from "./ResponsiveContainer";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Zen Collection Lavabo",
    category: "Lavabolar",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101",
    price: "₺12,999",
  },
  {
    id: 2,
    name: "Royal Black Batarya",
    category: "Bataryalar",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1",
    price: "₺8,499",
  },
  {
    id: 3,
    name: "Modern Line Duşakabin",
    category: "Duş Sistemleri",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    price: "₺15,999",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            En son teknoloji ve tasarım trendleriyle üretilen premium banyo
            ürünlerimiz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary-400 text-sm mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xl font-semibold text-primary-400">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300">
            Tüm Ürünleri Görüntüle
          </button>
        </motion.div>
      </ResponsiveContainer>
    </section>
  );
}
