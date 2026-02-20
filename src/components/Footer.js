import React from "react";

const Footer = () => (
  <footer style={footerStyle}>
    <p>&copy; 2026 Apotheek Proosterbos | 📧 contact@apotheekproosterbos.perweb.site</p>
    <p>📍 Roosterbosstraat 12, 1234 AB Roosterbos</p>
  </footer>
);

const footerStyle = {
  backgroundColor: "#003366",
  color: "#fff",
  textAlign: "center",
  fontSize: "0.9rem",
  padding: "1em 2em",
};

export default Footer;
