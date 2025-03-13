import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Carsiautos</div>
      <ul className="nav-links">
        <li><Link to="/products">Comprar</Link></li>
        <li><Link to="/about">Sobre Nosotros</Link></li>
        <li className="cart-icon"><Link to="/checkout"><FaShoppingCart /></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
