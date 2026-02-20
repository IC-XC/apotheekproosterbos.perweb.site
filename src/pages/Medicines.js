import React from "react";
import { useTranslation } from "react-i18next";
import MedicineCard from "../components/MedicineCard";

const Medicines = () => {
  const { t } = useTranslation();

  // Voorbeeldmedicijnenlijst
  const medicines = [
    { name: "Paracetamol", stock: 20 },
    { name: "Ibuprofen", stock: 15 },
    { name: "Amoxicilline", stock: 10 },
    // Je kunt hier extra medicijnen toevoegen
  ];

  return (
    <main>
      <h2>{t("medicines")}</h2>
      <div className="medicine-list">
        {medicines
          .filter(Boolean) // verwijdert undefined/null
          .map((med, index) => (
            <MedicineCard
              key={index}
              name={med.name || ""}
              stock={med.stock ?? 0}
            />
          ))}
      </div>
    </main>
  );
};

export default Medicines;
