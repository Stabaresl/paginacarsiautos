import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Sección principal dividida */}
            <section className="hero">
                <div className="hero-left">
                    <h1>Encuentra lo mejor para tu auto</h1>
                    <p>Accesorios, repuestos y más al mejor precio.</p>
                    <button className="hero-button">Comprar Ahora</button>
                </div>
                <div className="hero-right"></div>
            </section>
        </div>
    );
};

export default Home;
