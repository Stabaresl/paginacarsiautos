import React from 'react';
import '../styles/Home.css';
import Carousel from '../components/Carousel'; // Importamos el carrusel

const Home = () => {
  return (
    <div className="home-container">
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
          <img src={`${process.env.PUBLIC_URL}/restaurador2.png`} alt="Accesorio Destacado" />
        </div>
        <div className="split-text">
          <h2>Sobre Nosotros</h2>
          <p>
            En Carsiautos, nos especializamos en ofrecer productos y servicios de la más alta calidad para el cuidado, personalización y mantenimiento de vehículos.  
            Nuestra pasión es transformar y mejorar cada auto con tecnología avanzada y accesorios innovadores.
          </p>
          <a href="/about" className="split-button">CONOCER MAS</a>
        </div>
      </section>

      {/* Sección Informativa */}
      <section className="info-section">
        <div className="info-content">
          <h2>Calidad y rendimiento para tu vehículo</h2>
          <p>Ofrecemos accesorios de alta calidad para mejorar la seguridad, estética y desempeño de tu automóvil.</p>
          <div className="info-grid">
            <div className="info-item">
              <img src={`${process.env.PUBLIC_URL}/restaurador.png`} alt="Seguridad" />
              <h3>Seguridad</h3>
              <p>Los mejores sistemas de seguridad para proteger tu auto y a tu familia.</p>
            </div>
            <div className="info-item">
              <img src={`${process.env.PUBLIC_URL}/img/estetica.png`} alt="Estética" />
              <h3>Estética</h3>
              <p>Personaliza tu vehículo con accesorios únicos y modernos.</p>
            </div>
            <div className="info-item">
              <img src={`${process.env.PUBLIC_URL}/img/rendimiento.png`} alt="Rendimiento" />
              <h3>Rendimiento</h3>
              <p>Mejoras en suspensión, frenos y motores para maximizar el desempeño.</p>
            </div>
          </div>
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
