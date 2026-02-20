import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        
        {/* Logo en titel */}
        <div className="header-logo">
          <img src="/logo192.png" alt={t("logoTitle")} />
          <h1>{t("logoTitle")}</h1>
        </div>

        {/* Navigatie */}
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {t("home")}
          </NavLink>
          <NavLink to="/medicines" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {t("medicines")}
          </NavLink>
          <NavLink to="/appointment" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {t("appointment")}
          </NavLink>
        </nav>

        {/* Language Switcher */}
        <LanguageSwitcher />

      </div>
    </header>
  );
};

export default Header;
