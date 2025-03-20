import React from 'react';
import '../styles/Home.css';
import Carousel from '../components/Carousel';
import SocialSidebar from '../components/SocialSidebar';

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
{/* Sección Informativa*/}
<section className="info-section">
  <div className="info-image">
    <img src={`${process.env.PUBLIC_URL}/nanotecnologia.png`} alt="Nanotecnología en autos" />
  </div>
  <div className="info-text">
    <h2>Innovación en Nanotecnología</h2>
    <p>
      Descubre cómo nuestra tecnología de vanguardia protege y mejora el rendimiento de tu vehículo con nanotecnología de última generación.
    </p>
    <a href="/nanotechnology" className="split-button">Saber Más</a>
  </div>
</section>

      {/* Carrusel de Productos */}
      <section className="carousel-section">
        <Carousel />
      </section>
    </div>
  );
};

export default Home;
