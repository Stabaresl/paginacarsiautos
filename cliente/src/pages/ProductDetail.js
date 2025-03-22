import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";
import ProductButtons from "../components/ProductButtons";

const productData = {
  1: {
    name: "Restaurador Premium para Partes Plásticas",
    images: [
      "/restaurador2.png",
      "/restaurador2_1.png",
      "/restaurador2_2.png",
    ],
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
    images: [
      "/restaurador.png",
      "/restaurador_1.png",
      "/restaurador_2.png",
    ],
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
  3: {
    name: "Desengrasante Nanotecnológico de Alto Rendimiento",
    images: ["/desengrasante.png"],
    description:
      "Nuestro desengrasante nanotecnológico es una fórmula avanzada diseñada para eliminar eficazmente grasas, aceites y suciedad incrustada en motores y superficies industriales.",
    features: [
      "Tecnología Nanotecnológica: Las nanopartículas penetran profundamente en la suciedad, desintegrándola desde el interior para una limpieza superior.",
      "Limpieza Profunda y Eficaz: Elimina grasas, aceites, hollín y suciedad persistente de motores, maquinaria, herramientas y superficies industriales.",
      "Seguro para Múltiples Superficies: Formulado para ser seguro en motores con componentes delicados, acero inoxidable, plásticos, gomas y cables eléctricos, sin causar daños ni decoloración.",
      "Protección y Cuidado: A diferencia de los desengrasantes convencionales, nuestra fórmula protege las superficies tratadas, previniendo la corrosión y el deterioro.",
      "Fácil Aplicación: Su presentación en spray permite una aplicación precisa y uniforme, llegando a áreas de difícil acceso.",
      "Versatilidad: Ideal para uso en automóviles, motocicletas, maquinaria industrial, herramientas, equipos de jardinería y más.",
      "Concentrado: Fórmula de alta concentración que ofrece un rendimiento superior y una mayor durabilidad.",
    ],
    usage: [
      "Agitar bien antes de usar.",
      "Rociar el desengrasante directamente sobre la superficie a limpiar.",
      "Dejar actuar durante unos minutos para que la fórmula penetre y disuelva la suciedad.",
      "Frotar con un cepillo o paño limpio si es necesario.",
      "Enjuagar con agua o limpiar con un paño húmedo.",
    ],
    additional: [
      "Apto para múltiples aplicaciones: motores, herramientas, maquinaria y más.",
      "Seguro y eficiente en diversas superficies.",
    ],
    recommendations: [
      "Mantener fuera del alcance de los niños.",
      "Evitar el contacto con los ojos y la piel.",
      "En caso de contacto, enjuagar con abundante agua.",
      "No ingerir.",
      "Utilizar en un área bien ventilada.",
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id];

  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");
  const [zoomStyle, setZoomStyle] = useState({});
  const [zoomVisible, setZoomVisible] = useState(false);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${selectedImage})`,
      backgroundSize: "500%", // Mayor zoom
      backgroundPosition: `${x}% ${y}%`,
      top: `${e.clientY}px`,
      left: `${e.clientX + 20}px`, // Aparece a la derecha del mouse
      display: "block",
    });

    setZoomVisible(true);
  };

  const handleMouseLeave = () => {
    setZoomVisible(false);
  };

  return (
    <div className="product-detail-container">
      <div className="product-image">
        {/* Imagen Principal */}
        <div className="zoom-container">
          <img
            src={selectedImage}
            alt={product.name}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
          {zoomVisible && <div className="zoom-lens" style={zoomStyle}></div>}
        </div>

        {/* Miniaturas */}
        <div className="thumbnail-gallery">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Miniatura ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={selectedImage === image ? "selected" : ""}
            />
          ))}
        </div>
      </div>

      {/* Información del Producto */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>

        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Botones */}
        <ProductButtons />
      </div>
    </div>
  );
};

export default ProductDetail;
