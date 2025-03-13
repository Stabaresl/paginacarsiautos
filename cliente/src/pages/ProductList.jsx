import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/ProductList.css';

function ProductList({ products = [], onAddToCart }) { 
  if (!products.length) {
    return <p className="empty-message">No hay productos disponibles</p>;
  }

  return (
    <div className="product-list-container">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
