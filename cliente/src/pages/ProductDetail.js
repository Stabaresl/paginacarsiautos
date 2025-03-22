import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";
import ProductButtons from "../components/ProductButtons";

// Datos simulados de productos
const productData = {
  1: {
    name: "Restaurador Premium para Partes Plásticas",
    images: ["/restaurador2.png", "/restaurador2_1.png", "/restaurador2_2.png"],
    price: "19.210,00",
    rating: 5.0,
    description:
      "Producto importado de alta calidad. Diseñado para restaurar partes plásticas de todo tipo de color.",
    features: [
      "Producto biodegradable",
      "Fórmula con nanotecnología",
      "Restaura el color y apariencia original de las partes plásticas",
      "Protege contra los daños causados por los rayos UV",
    ],
  },
  2: {
    name: "Restaurador de llantas Alemán",
    images: ["/restaurador.png", "/restaurador_1.png", "/restaurador_2.png"],
    price: "15.990,00",
    rating: 4.8,
    description:
      "Producto especializado para restaurar el brillo y color original de las llantas.",
    features: [
      "Fácil aplicación",
      "Durabilidad de hasta 3 meses",
      "Protección UV contra el desgaste",
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id];

  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);
  const zoomBoxSize = 200;
  const zoomFactor = 3;

  const animationFrameRef = useRef(null);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

   // Función para calcular la posición del zoom en móviles y escritorio
   const calculateZoomPosition = (clientX, clientY, target) => {
    const { left, top, width, height } = target.getBoundingClientRect();
    const offsetX = clientX - left;
    const offsetY = clientY - top;

    const zoomX = (offsetX / width) * 100;
    const zoomY = (offsetY / height) * 100;

    setCursorPosition({ x: clientX + 20, y: clientY + 20 });
    setZoomPosition({ x: zoomX, y: zoomY });
  };

  // Maneja el movimiento del zoom con mouse
  const handleMouseMove = (e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      calculateZoomPosition(e.clientX, e.clientY, e.target);
    });
  };

  // Maneja el movimiento del zoom con el dedo en pantallas táctiles
  const handleTouchMove = (e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      const touch = e.touches[0]; // Obtiene la primera posición del dedo
      calculateZoomPosition(touch.clientX, touch.clientY, e.target);
    });
  };


  return (
    <div className="product-detail-container">
      {/* Sección Imagen */}
      <div className="image-gallery">
        <div
          className="main-image"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
          onTouchMove={handleTouchMove}
          onTouchStart={() => setShowZoom(true)}
          onTouchEnd={() => setShowZoom(false)}
        >
          <img src={mainImage} alt="Producto" />
        </div>

        {showZoom && (
          <div
            className="zoom-box"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              backgroundImage: `url(${mainImage})`,
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              backgroundSize: `${zoomFactor * 100}%`,
            }}
          />
        )}

        <div className="thumbnail-container">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Miniatura"
              className="thumbnail"
              onClick={() => handleThumbnailClick(img)}
            />
          ))}
        </div>
      </div>

      {/* Sección Información del Producto */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="product-buttons">
          <ProductButtons productId={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
