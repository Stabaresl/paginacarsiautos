import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setTimeout(() => setProgress(0), 500);
          return 100;
        }
        return oldProgress + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>Sobre Nosotros</h1>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        {/* Barra de carga en loop */}
        <div className="progress-container">
          <h1>🚧 EN CONSTRUCCIÓN 🚧</h1>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p>{progress}%</p>
        </div>
      </Router>
    </div>
  );
}

export default App;
