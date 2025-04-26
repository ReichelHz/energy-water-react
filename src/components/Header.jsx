import React, { useState, useEffect } from 'react';
import './header.css'; // Asegúrate de que este archivo exista

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Manejo del estado de desplazamiento (scroll)
  const handleScroll = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',  // Asegura que el scroll inicie en la parte superior
      });
    }
  };

  // Detectar el desplazamiento de la página para cambiar el estilo del header
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
      {/* Logo con imagen y texto */}
      <div className="logo" role="logo">
        <img src="/images/logo.png" alt="Logo Energy and Water" className="logo-img" />
        <div className="logo-text">
          <span className="energy">Energy</span>
          <span>&</span>
          <span className="water">Water</span>
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`} role="navigation" aria-label="Menú de navegación">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); handleScroll('#inicio'); }} aria-label="Ir al inicio">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#historia" onClick={(e) => { e.preventDefault(); handleScroll('#historia'); }} aria-label="Ir a la historia">Historia</a>
          </li>
          <li className="nav-item">
            <a href="#equipo" onClick={(e) => { e.preventDefault(); handleScroll('#equipo'); }} aria-label="Ir al equipo">Equipo</a>
          </li>
          <li className="nav-item">
            <a href="#faq" onClick={(e) => { e.preventDefault(); handleScroll('#faq'); }} aria-label="Ir a preguntas frecuentes">Preguntas Frecuentes</a>
          </li>
          <li className="nav-item">
            <a href="#contacto" onClick={(e) => { e.preventDefault(); handleScroll('#contacto'); }} aria-label="Ir al contacto">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Botón de menú para dispositivos móviles */}
      <div className="menu-toggle" onClick={toggleMenu} aria-label="Abrir o cerrar el menú de navegación">
        ☰
      </div>
    </header>
  );
};

export default Header;
