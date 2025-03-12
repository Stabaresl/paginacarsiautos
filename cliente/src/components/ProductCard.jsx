import React from 'react';
import '../styles/ProductCard.css';


function ProductCard({ product, onAddToCart }) {
  const { name, price, image, description } = product;

  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt={name} />
      <h2 className="product-card__name">{name}</h2>
      <p className="product-card__description">{description}</p>
      <p className="product-card__price">${price}</p>
      <button 
        className="product-card__button"
        onClick={() => onAddToCart(product)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
