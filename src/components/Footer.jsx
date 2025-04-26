import React from "react";
import "./footer.css";  // Asegúrate de que el archivo de estilo esté importado
import { Facebook, Instagram } from '@mui/icons-material';  // Importamos los íconos

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2025 Energy and Water. Todos los derechos reservados.</p>
        <p>Contáctanos: contacto@energywater.com | Teléfono: +56 2 3256 9798</p>
        <div className="social-media">
          {/* Enlaces a las redes sociales */}
          <a href="https://www.facebook.com/ENERGYANDWATERservices?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <Facebook style={{ fontSize: 40, color: '#3b5998' }} />  {/* Ícono de Facebook */}
          </a>
          <a href="https://www.instagram.com/energyandwatercl/?igsh=ZXVreG83c2JIdDV4#" target="_blank" rel="noopener noreferrer">
            <Instagram style={{ fontSize: 40, color: '#E1306C' }} />  {/* Ícono de Instagram */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
