import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import './App.css';
import './styles/MyBackground.css';  // Importa el CSS del fondo

const dummyProducts = [
  {
    id: 1,
    name: 'Filtro de Aceite',
    price: 15,
    image: 'https://http2.mlstatic.com/D_NQ_NP_656280-MCO44145118302_112020-O.webp',
    description: 'Filtro de alta calidad para motor',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Llantas Deportivas',
    price: 120,
    image: 'https://http2.mlstatic.com/D_NQ_NP_774687-MLU69806881516_062023-O.webp',
    description: 'Llantas con diseño deportivo y resistente',
    quantity: 1,
  },
];

function App() {
  const [products] = useState(dummyProducts);
  const [cartItems, setCartItems] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setTimeout(() => setProgress(0), 500); // Espera 0.5 segundos en 100% antes de resetear
          return 100;
        }
        return oldProgress + 1;
      });
    }, 50); // Controla la velocidad de llenado

    return () => clearInterval(interval);
  }, []);

  // Agregar producto al carrito
  const handleAddToCart = (product) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingIndex >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Eliminar producto del carrito
  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // Procesar checkout
  const handleCheckout = (formData) => {
    console.log('Datos de checkout:', formData);
    console.log('Items en el carrito:', cartItems);
    setCartItems([]);
    alert('Compra realizada con éxito');
  };

  return (
    <div className="my-background">
      <Router>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <ProductList 
                products={products} 
                onAddToCart={handleAddToCart} 
              />
            } 
          />
          <Route 
            path="/products" 
            element={
              <ProductList 
                products={products} 
                onAddToCart={handleAddToCart} 
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cartItems} 
                onRemoveFromCart={handleRemoveFromCart} 
              />
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <Checkout 
                cartItems={cartItems} 
                onCheckout={handleCheckout} 
              />
            } 
          />
        </Routes>

        {/* Sección adicional para permitir el scroll */}
        <div style={{ height: "150vh", background: "#222", color: "white", textAlign: "center", padding: "50px" }}>
          <h2>Contenido adicional</h2>
          <p>Desplázate hacia abajo para ver cómo se oculta la barra de navegación.</p>
        </div>

        {/* Sección "EN CONSTRUCCIÓN" con la barra de carga en loop */}
        <div style={{ textAlign: "center", padding: "50px", background: "#111", color: "white" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>🚧 EN CONSTRUCCIÓN 🚧</h1>
          <div style={{
            width: "50%",
            margin: "auto",
            height: "30px",
            background: "#333",
            borderRadius: "5px",
            overflow: "hidden",
            position: "relative"
          }}>
            <div style={{
              width: `${progress}%`,
              height: "100%",
              background: "#FFC107",
              transition: "width 0.5s ease-in-out"
            }}>
            </div>
          </div>
          <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>{progress}%</p>
        </div>

      </Router>
    </div>
  );
}

export default App;
