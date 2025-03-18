// src/components/ProductButtons.jsx
import React, { useState } from 'react';
import './ProductButtons.css'; // 
const ProductButtons = () => {
  // Control de la cantidad
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="product-buttons">
      {/* Selector de Cantidad */}
      <div className="quantity-selector">
        <button className="quantity-btn" onClick={handleDecrement}>-</button>
        <span className="quantity-display">{quantity}</span>
        <button className="quantity-btn" onClick={handleIncrement}>+</button>
      </div>

      {/* Botones de Acción */}
      <button className="add-to-cart">AGREGAR AL CARRITO</button>
      <button className="buy-now">COMPRAR AHORA</button>
      <button className="chat-advisor">CHATEAR CON UN ASESOR</button>
    </div>
  );
};

export default ProductButtons;
