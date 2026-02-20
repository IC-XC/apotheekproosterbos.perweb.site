import React from "react";
import { useTranslation } from "react-i18next";

const MedicineCard = ({ name = "", stock = 0 }) => {
  const { t } = useTranslation();

  return (
    <div className="medicine-card">
      <h3>{name}</h3>
      <p>{t("stock")}: {stock}</p>
    </div>
  );
};

export default MedicineCard;
