import React from 'react';
import Header from './components/Header';  // Importación correcta del Header
import Footer from './components/Footer';  // Importación correcta del Footer
import FAQ from './components/FAQ';  // Importación correcta del FAQ
import Formulario from './components/Formulario';
import Historia from './components/Historia';
import Equipo from './components/Equipo';  // Importación de la sección de Equipo
import './App.css';

// Si la imagen está en la carpeta 'public/images'
const serviceImage = '/images/elservicio-nosmueve.jpg'; // La ruta correcta si está en public

function App() {
  return (
    <div>
      <Header />
      <section id="inicio" className="welcome-banner">
        <div className="image-overlay"></div>
        <img 
          src={serviceImage} // Usar variable para la ruta de la imagen
          alt="El servicio nos mueve - Energy and Water" 
          className="welcome-image" 
        />
        <div className="welcome-text">
          <h1 className="hero-text">
            Bienvenido a <span className="energy">Energy</span> and <span className="water">Water</span>
          </h1>
          <p>Soluciones integrales para tu hogar y empresa.</p>
        </div>
      </section>
      
      <section id="historia">
        <Historia />
      </section>
      
      <section id="equipo">
        <Equipo />
      </section>
      
      <section id="faq">
        <FAQ />
      </section>
      
      <section id="contacto">
        <Formulario />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
