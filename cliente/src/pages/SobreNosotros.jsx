import React from 'react';
import '../styles/SobreNosotros.css';
import { FaCar, FaTools, FaDotCircle, FaPaintRoller, FaShower, FaShieldAlt } from 'react-icons/fa';

const specializations = [
  { icon: <FaCar />, title: "Car Audio", description: "Sistemas de sonido de última generación que elevan tu experiencia de conducción." },
  { icon: <FaTools />, title: "Accesorios y Repuestos", description: "Encuentra todo lo que necesitas para mejorar y personalizar tu vehículo." },
  { icon: <FaDotCircle />, title: "Llantas y Rines", description: "Las mejores opciones en seguridad, agarre y estilo para tu auto." },
  { icon: <FaPaintRoller />, title: "Pintura y Latonería", description: "Servicios de restauración y embellecimiento para tu carrocería." },
  { icon: <FaShower />, title: "Detailing y Tapicería", description: "Mantén tu vehículo impecable con nuestros servicios de detailing premium." },
  { icon: <FaShieldAlt />, title: "Polarizado y Protección PPF", description: "Protege tu auto contra rayones y los efectos del clima con tecnología avanzada." }
];


function SobreNostros() {
  return (
    <div className="about-container">
      {/* Primera Sección: Introducción */}
      <section className="about-intro">
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/logocarsiautos.png`} alt="Sobre Nosotros" />
        </div>
        <div className="text-container">
          <h1 className="about-title">
            HOLA <span className="highlight">Y BIENVENIDO</span>
          </h1>
          <p className="about-description">
            En <strong>Carsiautos</strong>, la excelencia y la innovación definen nuestro compromiso con cada cliente.
            Nos especializamos en ofrecer soluciones de alto nivel para <strong>personalización, mantenimiento y protección vehicular</strong>,
            combinando <strong>tecnología de vanguardia</strong> con una atención excepcional.  
          </p>
          <p className="about-description">
            Cada detalle importa, y nuestro objetivo es brindarle a su vehículo el <strong>cuidado y el rendimiento que merece</strong>.
          </p>
        </div>
      </section>

      {/* Nueva Sección de Imagen a Pantalla Completa */}
      <section className="full-width-image">
        <img src={`${process.env.PUBLIC_URL}/imagen especializacion.png`} alt="Imagen Destacada" />
      </section>

      {/* Sección Especialización */}
      <section className="about-specialization">
        {specializations.map((item, index) => (
          <div key={index} className="specialization-item">
            {item.icon}
            <h3 className="specialization-title">{item.title}</h3>
            <p className="specialization-description">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default SobreNostros;
