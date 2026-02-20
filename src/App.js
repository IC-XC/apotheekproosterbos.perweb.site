// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import Appointment from "./pages/Appointment";

import "./index.css";
import "./i18n";

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>

      <Footer>
        &copy; {new Date().getFullYear()} {t("logoTitle")}
      </Footer>
    </Router>
  );
};

export default App;
