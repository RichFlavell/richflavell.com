import i18n from "i18next"
import XHR from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .use(XHR)
  .init({
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    load: "languageOnly",
    returnObjects: true,
    detection: {
      order: ["path"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      useSuspense: false,
    },
    ns: ["Home", "Header", "Posts", "Sidebar", "GlobalFooter"],
  })

export default i18n
