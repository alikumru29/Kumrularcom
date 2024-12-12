import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import BrandsPage from "./pages/BrandsPage";
import BrandPage from "./pages/BrandPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/urunler" element={<ProductsPage />} />
              <Route path="/urunler/:slug" element={<ProductDetailPage />} />
              <Route path="/kategoriler" element={<CategoriesPage />} />
              <Route
                path="/kategoriler/:categoryId"
                element={<CategoryPage />}
              />
              <Route path="/markalar" element={<BrandsPage />} />
              <Route path="/markalar/:brandId" element={<BrandPage />} />
              <Route path="/neden-biz" element={<AboutPage />} />
              <Route path="/iletisim" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
