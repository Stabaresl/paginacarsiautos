import React from 'react';
import '../styles/Home.css';
import SocialSidebar from '../components/SocialSidebar';
import Carousel from '../components/Carousel'; // Importamos el carrusel

const Home = () => {


  return (
    
    <div className="home-container">
      <SocialSidebar />
      {/* Sección Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Equipa tu auto con lo mejor</h1>
          <p>Descubre los mejores accesorios, repuestos y más.</p>
          <a href="/products" className="hero-button">Ver Productos</a>
        </div>
      </section>

      {/* Sección Intermedia - Imagen Izquierda, Texto Derecha */}
      <section className="split-section">
        <div className="split-image">
          <img src={`${process.env.PUBLIC_URL}/logocarsiautos-sinfondo.png`} alt="Accesorio Destacado" />
        </div>
        <div className="split-text">
          <h2>Sobre Nosotros</h2>
          <p>
            En Carsiautos, nos especializamos en ofrecer productos y servicios de la más alta calidad para el cuidado, personalización y mantenimiento de vehículos.
            Nuestra pasión es transformar y mejorar cada auto con tecnología avanzada y accesorios innovadores.
          </p>
          <a href="/about" className="split-button">CONOCER MÁS</a>
        </div>
      </section>

      {/* Sección Informativa */}
      <section className="info-section">
        <div className="info-content">
          <h2>Calidad y rendimiento para tu vehículo</h2>
          <p>Ofrecemos accesorios de alta calidad para mejorar la seguridad, estética y desempeño de tu automóvil.</p>

          <div className="info-boxes">
  <div className="info-box security">
    <h3>Seguridad</h3>
    <p>Accesorios para garantizar la protección de tu auto.</p>
  </div>

  <div className="info-box estetica">
    <h3>Estética</h3>
    <p>Personaliza y mejora la apariencia de tu vehículo.</p>
  </div>

  <div className="info-box rendimiento">
    <h3>Rendimiento</h3>
    <p>Mejora la eficiencia y potencia de tu motor.</p>
  </div>
</div>
        </div>
      </section>

      {/* Carrusel de Productos */}
      <section className="carousel-section">
        <Carousel />
      </section>

      {/* Carrusel de Productos */}
      <section className="carousel-section">
        <Carousel />
      </section>
    </div>
  );
};

export default Home;
