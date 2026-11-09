import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/tokens.css";
import "../styles/landing.css";

function Profile() {
    return (
        <div className="account-page">
            <Navbar />
            <main className="account-panel">
                <p className="section-kicker">Archivo del lector</p>
                <h1>Tu perfil</h1>
                <p>
                    Los datos de perfil y el historial de pedidos aún no están
                    disponibles en esta versión.
                </p>
                <Link className="button-primary" to="/home">
                    Explorar catálogo
                </Link>
            </main>
            <footer className="site-footer">
                <p>© 2026 Relatos de papel</p>
                <Link to="/home">Volver al catálogo</Link>
            </footer>
        </div>
    );
}

export default Profile;