import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { nl } from "date-fns/locale";

registerLocale("nl", nl);

const Appointment = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    date: null,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date) return;

    const formattedDate = formData.date.toLocaleDateString(
      i18n.language === "nl" ? "nl-NL" : "en-US"
    );

    alert(
      `${t("appointmentSuccess")}:\n\n` +
      `${t("name")}: ${formData.name}\n` +
      `${t("date")}: ${formattedDate}\n` +
      `${t("message")}: ${formData.message}`
    );

    // reset formulier
    setFormData({
      name: "",
      date: null,
      message: ""
    });
  };

  return (
    <main>
      <h2>{t("appointment")}</h2>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <label>{t("name")}</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>{t("date")}</label>
        <div className="date-picker-wrapper">
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            locale={i18n.language === "nl" ? "nl" : "en-US"}
            placeholderText={t("selectDate")}
            required
            minDate={new Date()}
            showPopperArrow={false}
            className="date-input"
          />
        </div>

        <label>{t("message")}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />

        <button type="submit">
          {t("submit")}
        </button>
      </form>
    </main>
  );
};

export default Appointment;