import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import language namespaces
import commonTR from "./tr/common.json";
import homeTR from "./tr/home.json";
import productsTR from "./tr/products.json";
import brandsTR from "./tr/brands.json";
import categoriesTR from "./tr/categories.json";
import contactTR from "./tr/contact.json";
import aboutTR from "./tr/about.json";

// Resource bundles
const resources = {
  tr: {
    common: commonTR,
    home: homeTR,
    products: productsTR,
    brands: brandsTR,
    categories: categoriesTR,
    contact: contactTR,
    about: aboutTR,
  },
};

// i18next configuration
const i18nextConfig = {
  resources,
  lng: "tr", // Default language
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false, // React already safes from XSS
  },
  defaultNS: "common",
  ns: [
    "common",
    "home",
    "products",
    "brands",
    "categories",
    "contact",
    "about",
  ],
};

// Initialize i18next
i18next
  .use(initReactI18next)
  .init(i18nextConfig)
  .catch((error) => {
    console.error("Error initializing i18next:", error);
  });

export default i18next;

// Type definitions for translation keys
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof commonTR;
      home: typeof homeTR;
      products: typeof productsTR;
      brands: typeof brandsTR;
      categories: typeof categoriesTR;
      contact: typeof contactTR;
      about: typeof aboutTR;
    };
  }
}

// Utility function to get translation namespace
export const getNamespace = (path: string): string => {
  const namespaces = {
    "/": "home",
    "/products": "products",
    "/brands": "brands",
    "/categories": "categories",
    "/contact": "contact",
    "/about": "about",
  };
  return namespaces[path as keyof typeof namespaces] || "common";
};

// Hook to manage translations
export const useTranslation = () => {
  const { t } = i18next;
  return { t };
};
