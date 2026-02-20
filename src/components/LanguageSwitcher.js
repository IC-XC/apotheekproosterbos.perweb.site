import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="lang-switch">
      <span
        onClick={() => changeLanguage("nl")}
        className={currentLang === "nl" ? "active" : ""}
      >
        <img src="/flags/nl.png" alt="NL" />
        NL
      </span>

      <span
        onClick={() => changeLanguage("en")}
        className={currentLang === "en" ? "active" : ""}
      >
        <img src="/flags/en.png" alt="EN" />
        EN
      </span>
    </div>
  );
};

export default LanguageSwitcher;
