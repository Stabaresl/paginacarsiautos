import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Enlace al inicio */}
        <Link to="/" className="navbar-logo">
          {/* Puedes mostrar ambos logos o uno según necesites */}
          <img src="/logo.png" alt="Logo principal" className="logo-main" />
          <img src="/logo2.png" alt="Logo secundario" className="logo-secondary" />
          <span>carsiautos</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/products">Productos</Link>
        <Link to="/cart">Carrito</Link>
      </div>
    </nav>
  );
}

export default Navbar;
