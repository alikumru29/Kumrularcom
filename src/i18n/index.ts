import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import tr from "./tr/common.json";
import en from "./en/common.json";

const resources = {
  tr: {
    common: tr,
  },
  en: {
    common: en,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "tr",
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
