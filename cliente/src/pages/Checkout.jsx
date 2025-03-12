import React, { useState } from 'react';
import '../styles/Checkout.css';


function Checkout({ cartItems, onCheckout }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'card',
  });

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de checkout (enviar datos, procesar pago, etc.)
    onCheckout(formData);
  };

  return (
    <div className="checkout-container">
      <h1>Finalizar Compra</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Método de Pago:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="card">Tarjeta</option>
            <option value="paypal">PayPal</option>
            <option value="transfer">Transferencia</option>
          </select>
        </div>

        <h2>Total a Pagar: ${total.toFixed(2)}</h2>

        <button type="submit" className="checkout-button">
          Pagar
        </button>
      </form>
    </div>
  );
}

export default Checkout;
