import React, { useState } from 'react'; 
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
  // Agrega más productos si lo deseas
];

function App() {
  const [products] = useState(dummyProducts);
  const [cartItems, setCartItems] = useState([]);

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
    // Aquí puedes hacer una petición a tu backend para procesar el pago
    // Limpia el carrito tras completar la compra
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
      </Router>
    </div>
  );
}

export default App;
