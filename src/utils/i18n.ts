import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

// Language resources
import en from "../locales/en.json"
import jp from "../locales/jp.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
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
      useSuspense: false,
    },
    resources: {
      en,
      jp,
    },
  })

export default i18n
