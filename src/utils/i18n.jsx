import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../Translations/English.json";
import French from "../Translations/French.json";
import i18next from "i18next";

const resources = {
  en: {
    translation: English,
  },
  fr: {
    translation: French,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default
});

export default i18n;
