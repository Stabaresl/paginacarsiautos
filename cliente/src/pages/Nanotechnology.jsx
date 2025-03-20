import React from "react";
import Slider from "react-slick"; // 📌 Importamos el carrusel
import { FaShieldAlt, FaWater, FaSun, FaPaintRoller } from "react-icons/fa"; // 📌 Íconos elegantes
import "../styles/Nanotechnology.css";

const Nanotechnology = () => {
  // Configuración del carrusel
  const settings = {
    dots: true, // ✅ Muestra los indicadores inferiores
    infinite: true,
    speed: 500,
    slidesToShow: 1, // ✅ Solo muestra 1 tarjeta a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // ✅ Activamos las flechas de navegación
};

  return (
    <div className="nanotech-container">
      {/* Nueva Sección - Título y Texto Explicativo */}
      <section className="nanotech-intro">
        <h1>LA NANOTECNOLOGÍA, EL MEJOR ALIADO DE TU AUTO</h1>
        <p>
          Nuestros productos manejan nanotecnología, lo que los posiciona como uno de los mejores en el mercado, brindando confianza para su uso y garantía en el efecto prometido.
        </p>
      </section>

      {/* Sección Hero */}
      <section className="nanotech-hero">
        <h1>Nanotecnología para Restaurar Pinturas Negras Automotrices</h1>
        <p>Descubre cómo la nanotecnología revoluciona la protección y restauración de pinturas negras en vehículos.</p>
      </section>
        {/* Nueva Imagen de Ancho Completo */}
        <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/nanotecnologia2.jpg`} alt="Imagen 1" className="styled-image" />
        <img src={`${process.env.PUBLIC_URL}/nanotecnologia.jpg`} alt="Imagen 2" className="styled-image" />
        </div>
      {/* Sección Carrusel */}
      <section className="nanotech-section">
        <h2>¿Cómo Funciona la Nanotecnología?</h2>
        <Slider {...settings} className="nanotech-carousel">
          <div className="nanotech-card">
            <FaPaintRoller className="nanotech-icon" />
            <h3>Relleno de Micro-rayas</h3>
            <p>Las nanopartículas penetran en los micro-rayones de la pintura, rellenando y alisando la superficie.</p>
          </div>
          <div className="nanotech-card">
            <FaShieldAlt className="nanotech-icon" />
            <h3>Creación de una Capa Protectora</h3>
            <p>Se forma una capa ultradelgada que repele agua, suciedad y rayos UV.</p>
          </div>
          <div className="nanotech-card">
            <FaSun className="nanotech-icon" />
            <h3>Restauración del Brillo</h3>
            <p>Las nanopartículas suavizan irregularidades microscópicas, devolviendo el brillo original.</p>
          </div>
          <div className="nanotech-card">
            <FaWater className="nanotech-icon" />
            <h3>Efecto Hidrofóbico</h3>
            <p>Los recubrimientos nanotecnológicos hacen que la pintura repela agua y manchas.</p>
          </div>
        </Slider>
      </section>

      <div className="back-button-container">
        <a href="/" className="back-button">Volver al Inicio</a>
      </div>
    </div>
  );
};

export default Nanotechnology;
