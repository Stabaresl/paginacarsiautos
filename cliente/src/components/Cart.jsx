import React from 'react';
import '../styles/Cart.css';


function Cart({ cartItems, onRemoveFromCart }) {
  // Calcula el total
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Carrito</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img 
                src={item.image} 
                alt={item.name} 
                className="cart-item__image" 
              />
              <div className="cart-item__details">
                <h2>{item.name}</h2>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price * item.quantity}</p>
                <button 
                  onClick={() => onRemoveFromCart(item.id)}
                  className="cart-item__remove-button"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
