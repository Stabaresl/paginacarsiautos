import React, { useState, useEffect } from "react";
import "../styles/SocialSidebar.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialSidebar = () => {
  const [position, setPosition] = useState(200); // Posición inicial en px

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY + 200); // Ajusta la posición con el scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="social-sidebar" style={{ top: `${position}px` }}>
      <a href="https://www.facebook.com/share/18qzEdJnsD/" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="social-icon" />
      </a>
      <a href="https://wa.me/573147916968?text=Hola%2C%20estoy%20interesado%20en%20obtener%20más%20información%20sobre%20los%20productos%20de%20Carsiautos.%20¿Podrían%20brindarme%20detalles%20adicionales%3F%20Gracias." 
         target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="social-icon" />
      </a>
      <a href="https://www.instagram.com/carsiautos/?igsh=MWJkYWxuaDI0cWxqZQ%3D%3D#" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
    </div>
  );
};

export default SocialSidebar;
