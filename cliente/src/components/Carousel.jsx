import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../styles/Carousel.css";

// Datos de productos
const products = [
  {
    id: 1,
    name: "Restaurador Premium para Partes Plásticas",
    image: "/restaurador2.png",
  },
  {
    id: 2,
    name: "Restaurador de llantas Alemán",
    image: "/restaurador.png",
  },
];

// Componente de flecha personalizada
const CustomPrevArrow = (props) => (
  <button {...props} className="custom-arrow prev-arrow">
    <IoIosArrowBack />
  </button>
);
const CustomNextArrow = (props) => (
  <button {...props} className="custom-arrow next-arrow">
    <IoIosArrowForward />
  </button>
);

function Carousel() {
  // Configuración de Slick Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Muestra 1 por 1
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Productos Destacados</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="carousel-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="carousel-image"/>
              <h3 className="carousel-item-title">{product.name}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;