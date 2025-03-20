import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetail.css";
import ProductButtons from "../components/ProductButtons"; // Ajusta la ruta según tu estructura

// Datos de los productos
const productData = {
  1: {
    name: "Restaurador Premium para Partes Plásticas internas y externas",
    image: "/restaurador2.png",
    description:
      "Producto importado de alta calidad. Diseñado para restaurar partes plásticas de todo tipo de color.",
    features: [
      "Producto biodegradable",
      "Fórmula con nanotecnología",
      "Restaura el color y apariencia original de las partes plásticas",
      "Protege contra los daños causados por los rayos UV y otros factores ambientales",
      "Formulado con grafeno 7H, que proporciona una excelente restauración y protección híbrida e hidrofóbica",
      "Genera una capa protectora que repele el polvo y el agua",
    ],
    usage: [
      "Descontaminar la superficie con una microfibra, utilizando el limpiador promotor de adherencia",
      "Aplicar el restaurador uniformemente con el aplicador",
    ],
    additional: [
      "Prolonga la vida útil de las partes plásticas",
      "Mejora la apariencia estética del vehículo",
    ],
    recommendations: [
      "Es importante que la superficie esté limpia y seca antes de aplicar el producto",
      "Evitar la aplicación del producto en exceso",
      "Para mejores resultados se recomienda el uso de microfibras de calidad",
      "Mantener el producto fuera del alcance de los niños",
    ],
  },
  2: {
    name: "Restaurador de llantas: El Secreto Alemán para Llantas Impecables",
    image: "/restaurador.png",
    description:
      "Descubre el restaurador de Llantas Nano Germany, el revolucionario producto con nanotecnología alemana diseñado para devolverle a tus neumáticos su brillo y apariencia original.",
    features: [
      "Nanotecnología avanzada: Penetra profundamente en el caucho, restaurando el color y brillo perdidos.",
      "Restauración profunda: Elimina la decoloración, previene el agrietamiento y residuos.",
      "Protección duradera: Crea una barrera contra los rayos UV, la suciedad y el polvo.",
      "Fórmula híbrida: Combina restauración y protección en un solo producto.",
      "Fácil aplicación: Su formato en spray permite una aplicación rápida y uniforme.",
      "Resultados visibles: Llantas más negras, brillantes y protegidas desde la primera aplicación.",
      "Marca de confianza: Nano Germany, sinónimo de calidad y excelencia en el cuidado automotriz.",
    ],
    usage: [
      "Limpia las llantas con agua y jabón para eliminar suciedad y polvo.",
      "Agita bien el producto Nano Germany.",
      "Aplica en la esponja, utilizando poca cantidad para una distribución uniforme.",
      "Extiende el producto sobre la llanta asegurando una cobertura completa.",
      "Deja secar durante unos minutos y disfruta de unas llantas renovadas.",
    ],
    includes: [
      "1 Frasco de Restaurador para llantas Nano Germany.",
      "1 Esponja de aplicación.",
      "1 Microfibra.",
    ],
    additional: [
      "Apto para todo tipo de llantas y cauchos.",
      "Producto seguro y no tóxico.",
      "Fabricado en Alemania con los más altos estándares de calidad.",
    ],
  },
  3: {
    name: "Desengrasante Nanotecnológico de Alto Rendimiento",
    image: "/desengrasante.png",
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

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id];

  if (!product) {
    return <h2 className="error-message">Producto no encontrado</h2>;
  }

  return (
    <div className="product-detail-container">
      {/* Contenedor de la imagen y botones (izquierda) */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        {/* Aquí se colocan los botones debajo de la imagen */}
        <ProductButtons />
      </div>

      {/* Contenedor de la información (derecha) */}
      <div className="product-card">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>

        {product.features && (
          <>
            <h3>Características:</h3>
            <ul className="product-features">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {product.usage && (
          <>
            <h3>Modo de Uso:</h3>
            <ul className="product-usage">
              {product.usage.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </>
        )}

        {product.additional && (
          <>
            <h3>Información Adicional:</h3>
            <ul className="product-additional">
              {product.additional.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </>
        )}

        {product.includes && (
          <>
            <h3>Incluye:</h3>
            <ul className="product-includes">
              {product.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {product.recommendations && (
          <>
            <h3>Recomendaciones:</h3>
            <ul className="product-recommendations">
              {product.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </>
        )}

        {/* Botón de regreso */}
        <button className="back-button" onClick={() => navigate("/")}>
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
