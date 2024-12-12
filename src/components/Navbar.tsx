import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "../assets/img/logo-light.png";
import logoDark from "../assets/img/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to determine if current path should use light navbar
  const shouldUseLightNavbar = () => {
    const lightPaths = [
      "/",
      "/urunler",
      "/kategoriler",
      "/markalar",
      "/neden-biz",
    ];
    const isLightBasePath = lightPaths.some(
      (path) => location.pathname === path
    );
    const isCategoryPage = location.pathname.startsWith("/kategoriler/");
    const isBrandDetailPage =
      location.pathname.startsWith("/markalar/") &&
      location.pathname !== "/markalar";
    return isLightBasePath || isCategoryPage || isBrandDetailPage;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle body scroll when menu is opened/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Ana Sayfa", path: "/" },
    { label: "Ürünler", path: "/urunler" },
    { label: "Koleksiyonlar", path: "/kategoriler" },
    { label: "Markalar", path: "/markalar" },
    { label: "Neden Biz?", path: "/neden-biz" },
    { label: "İletişim", path: "/iletisim" },
  ];

  const getNavbarStyle = () => {
    if (isScrolled) {
      return "bg-white/95 backdrop-blur-sm shadow-lg text-slate-800";
    }
    return shouldUseLightNavbar() ? "text-white" : "text-slate-800";
  };

  const getLinkStyle = (isActive: boolean) => {
    const baseStyle =
      "font-semibold transition-colors duration-300 hover:text-primary-600";
    if (isScrolled) {
      return `${baseStyle} ${isActive ? "text-primary-600" : "text-slate-800"}`;
    }
    return `${baseStyle} ${
      isActive
        ? "text-primary-500"
        : shouldUseLightNavbar()
        ? "text-white"
        : "text-slate-800"
    }`;
  };

  const getLogo = () => {
    if (isScrolled) {
      return logoDark;
    }
    return shouldUseLightNavbar() ? logoLight : logoDark;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${getNavbarStyle()}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={getLogo()}
                alt="Kumrular Seramik"
                className="h-8 md:h-10"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={getLinkStyle(location.pathname === item.path)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 z-50 relative"
              aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              {isMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 min-h-screen bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-primary-900/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 pt-24 h-full overflow-auto">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="text-xl text-white/90 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-6">
                  İletişim
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+902163984764"
                    className="flex items-center text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    +90 216 398 47 64
                  </a>
                  <a
                    href="mailto:info@kumrular.com"
                    className="flex items-center text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    info@kumrular.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
