import React from 'react';
import '../styles/SobreNosotros.css';

function About() {
  return (
    <div className="about-container">
      {/* Primera Sección: Introducción */}
      <section className="about-intro">
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/logocarsiautos.png`} alt="Sobre Nosotros" />
        </div>
        <div className="text-container">
          <h1>Sobre <span>Nosotros</span></h1>
          <p>
            En Carsiautos, nos apasiona brindar a nuestros clientes productos y servicios de la más alta calidad 
            para el cuidado, personalización y mantenimiento de sus vehículos. Nuestra misión es ofrecer soluciones 
            innovadoras y accesibles que mejoren tanto la estética como el rendimiento de los autos.
          </p>
        </div>
      </section>

      {/* Segunda Sección: Especializaciones */}
      <section className="about-specialization">
        <h2>Nuestras Especialidades</h2>
        <p><strong>Nos especializamos en diversas áreas, incluyendo:</strong></p>
        <ul>
          <li><strong>Car Audio:</strong> Sistemas de sonido de última generación.</li>
          <li><strong>Accesorios y Repuestos:</strong> Gran variedad de productos.</li>
          <li><strong>Llantas y Rines:</strong> Opciones de calidad y seguridad.</li>
          <li><strong>Pintura y Latonería:</strong> Servicios para mantener la carrocería.</li>
          <li><strong>Detailing y Tapicería:</strong> Cuidado y restauración.</li>
          <li><strong>Polarizado y Protección PPF:</strong> Protección avanzada.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
