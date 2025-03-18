import React from "react";
import { Link } from "react-router-dom";
import "../styles/Carousel.css";

const products = [
  {
    id: 1,
    name: "Restaurador Premium para Partes Plásticas internas y externas",
    image: "restaurador2.png",
  },
  {
    id: 2,
    name: "Restaurador de llantas: El Secreto Alemán para Llantas Impecables",
    image: "restaurador.png",
  },
];

function Carousel() {
  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Productos Destacados</h2> {/* ⬅️ Agregado aquí */}
      <div className="carousel-container">
        {products.map((product) => (
          <div key={product.id} className="carousel-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
