import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar({ cartItems }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Mostrar la navbar si el usuario sube o está en la parte superior
      setVisible(currentScrollY < lastScrollY.current || currentScrollY === 0);

      // Actualizar el valor de referencia
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${visible ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/iconocarsiautos.ico`}  alt="Logo" className="logo-img" />
        </Link>
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
