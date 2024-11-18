import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";
import ptbr from "./locales/ptbr.json";

// TODO check if the language detector is actually working
i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en }, // English translations (empty for now)
      es: { translation: es }, // Spanish translations (empty for now)
      ptbr: { translation: ptbr }, // Portuguese translations (empty for now)
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
