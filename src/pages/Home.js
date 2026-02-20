import React from "react";
import { useTranslation } from "react-i18next";
import MedicineCard from "../components/MedicineCard";

const Home = () => {
  const { t } = useTranslation();

  const medicines = [
    { name: "Paracetamol", stock: 20 },
    { name: "Ibuprofen", stock: 15 },
    { name: "Amoxicilline", stock: 10 }
  ];

  return (
    <main>
      <h2>{t("welcome")}</h2>
      <p>{t("homeText")}</p>

      <section>
        <h3>{t("medicines")}</h3>
        <div className="medicine-list">
          {medicines.map((med, index) => (
            <MedicineCard key={index} name={med.name} stock={med.stock} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
