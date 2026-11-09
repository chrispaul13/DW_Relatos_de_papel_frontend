import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/tokens.css";
import "../styles/landing.css";

function Landing() {
    return (
        <div className="landing-page">
            <Navbar />
            <main>
                <section className="hero academy-landing-hero" aria-labelledby="landing-title">
                    <img
                        className="hero__image"
                        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=2200&q=85"
                        alt="Libros antiguos abiertos en una mesa de lectura"
                    />
                    <div className="hero__shade" aria-hidden="true" />
                    <div className="hero__content">
                        <p className="eyebrow">Una librería fuera del tiempo</p>
                        <h1 id="landing-title">Relatos de papel</h1>
                        <p className="hero__copy">
                            Entre madera antigua y páginas doradas, cada libro guarda
                            una puerta hacia otra historia.
                        </p>
                        <Link className="button-primary" to="/home">
                            Entrar a la librería
                        </Link>
                    </div>
                    <span className="hero__caption">Lecturas para quienes aún creen en el asombro</span>
                </section>

                <section className="academy-landing-intro" aria-labelledby="landing-intro-title">
                    <p className="section-kicker">El archivo de las historias</p>
                    <h2 id="landing-intro-title">Tu próxima lectura te está esperando</h2>
                    <p>
                        Recorre nuestro catálogo, consulta cada ficha y conserva tus
                        hallazgos en el carrito de la librería.
                    </p>
                    <div className="academy-landing-actions">
                        <Link className="button-primary" to="/home">Explorar catálogo</Link>
                        <Link className="academy-secondary-link" to="/login">Acceso de lectores</Link>
                    </div>
                </section>
            </main>
            <footer className="site-footer">
                <p>© 2026 Relatos de papel</p>
                <Link to="/home">Abrir catálogo</Link>
            </footer>
        </div>
    );
}

export default Landing;