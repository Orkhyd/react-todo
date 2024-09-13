import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import "moment/dist/locale/fr";

export const LanguageContext = createContext(undefined);
export const LanguageContextProvider = ({ children }) => {
  const languages = {
    en: { nativeName: "English" },
    fr: { nativeName: "Français" },
  };

  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
    moment.locale(window.localStorage.getItem(language));

    window.localStorage.setItem("language", language);
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
