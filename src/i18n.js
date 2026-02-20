import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      nl: {
        translation: {
          logoTitle: "Apotheek Proosterbos",
          home: "Home",
          welcome: "Welkom bij Apotheek Proosterbos",
          homeText: "Uw betrouwbare apotheek in Roosterbos.",
          medicines: "Medicijnen",
          appointment: "Maak een afspraak",
          stock: "Voorraad",
          send: "Verstuur",
          name: "Naam",
          date: "Datum",
          placeholderDate: "dd/mm/jjjj",
          message: "Bericht",
          submit: "Verstuur",
          appointmentSuccess: "Afspraak succesvol geregistreerd"
        }
      },
      en: {
        translation: {
          logoTitle: "Pharmacy Proosterbos",
          home: "Home",
          welcome: "Welcome to Pharmacy Proosterbos",
          homeText: "Your trusted pharmacy in Roosterbos.",
          medicines: "Medicines",
          appointment: "Make an appointment",
          stock: "Stock",
          send: "Send",
          name: "Name",
          date: "Date",
          placeholderDate: "dd/mm/yyyy",
          message: "Message",
          submit: "Submit",
          appointmentSuccess: "Appointment successfully registered"
        }
      }
    },
    lng: "nl", // standaard taal
    fallbackLng: "nl",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
