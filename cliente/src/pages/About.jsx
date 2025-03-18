import React from 'react';
import '../styles/About.css'; // Estilos para esta página

function About() {
  return (
    <div className="about-container">
      <h1>Sobre Nosotros</h1>
      <p>Somos una empresa dedicada a la venta de accesorios para vehículos, ofreciendo calidad y confianza.</p>

      <div className="about-section">
        <div className="about-text">
          <h2>Misión</h2>
          <p>Brindar a nuestros clientes los mejores accesorios para sus vehículos con calidad garantizada.</p>
        </div>
        <div className="about-text">
          <h2>Visión</h2>
          <p>Ser la tienda de referencia en accesorios automotrices en el mercado.</p>
        </div>
      </div>

      <div className="about-images">
        <img src="https://via.placeholder.com/300" alt="Misión" />
        <img src="https://via.placeholder.com/300" alt="Visión" />
      </div>
    </div>
  );
}

export default About;
