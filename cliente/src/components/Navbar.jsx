import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar({ cartItems }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detectar el scroll para cambiar el fondo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">CARSIAUTOS</Link>
      </div>

      {/* Botón de menú en móviles */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Enlaces de navegación */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/products">Comprar</Link></li>
        <li><Link to="/about">Sobre Nosotros</Link></li>
        <li className="cart-icon">
          <Link to="/checkout">
            <FaShoppingCart />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
