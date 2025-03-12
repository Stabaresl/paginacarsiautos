import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa"; // Importar iconos

function Navbar() {
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Oculta la barra si bajas
      } else {
        setVisible(true); // Muestra la barra si subes
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Barra de redes sociales */}
      <div className="social-bar">
        <a href="https://facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://instagram.com/tu_pagina" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://wa.me/tu_numero" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="social-icon" />
        </a>
        <a href="https://tiktok.com/@tu_pagina" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="social-icon" />
        </a>
      </div>

      {/* Barra de navegación con efecto de ocultar/mostrar */}
      <nav className={`navbar ${visible ? "navbar-visible" : "navbar-hidden"}`}>
        <div className="navbar-center">
          <span className="navbar-title">CARSIAUTOS</span>
        </div>
        <div className="navbar-links">
          <Link to="/products">Productos</Link>
          <Link to="/cart">Carrito</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
