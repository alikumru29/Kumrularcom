import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import common from "./tr/common.json";
import pages from "./tr/pages.json";
import components from "./tr/components.json";
import seo from "./tr/seo.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        common,
        pages,
        components,
        seo,
      },
    },
    fallbackLng: "tr",
    defaultNS: "common",
    fallbackNS: ["common", "pages", "components", "seo"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
