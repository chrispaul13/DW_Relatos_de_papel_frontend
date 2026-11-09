import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/tokens.css";
import "../styles/landing.css";

function Login() {
    return (
        <div className="account-page">
            <Navbar />
            <main className="account-panel">
                <p className="section-kicker">Acceso a la biblioteca</p>
                <h1>Bienvenido, lector</h1>
                <p>
                    El inicio de sesión todavía no está habilitado. Mientras tanto,
                    puedes recorrer el catálogo y guardar libros en tu carrito.
                </p>
                <Link className="button-primary" to="/home">
                    Volver al catálogo
                </Link>
            </main>
            <footer className="site-footer">
                <p>© 2026 Relatos de papel</p>
                <Link to="/">Inicio</Link>
            </footer>
        </div>
    );
}

export default Login;