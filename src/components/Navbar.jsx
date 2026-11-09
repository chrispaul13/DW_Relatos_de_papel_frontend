import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/navbar.css";

function Navbar() {
    const { cartCount } = useCart();

    return (
        <header className="site-header">
            <Link
                className="brand"
                to="/home"
                aria-label="Relatos de papel, inicio"
            >
                <span className="brand__name">Relatos de papel</span>
                <span className="brand__descriptor">
                    Librería independiente
                </span>
            </Link>

            <nav className="site-nav" aria-label="Navegación principal">
                <Link to="/home">Catálogo</Link>
                <Link to="/profile">Mi perfil</Link>
                <Link className="nav-login" to="/login">
                    Iniciar sesión
                </Link>

                <Link
                    to="/cart"
                    className="nav-cart"
                    aria-label={`Carrito de compras: ${cartCount} productos`}
                >
                    <span aria-hidden="true">🛒</span>
                    <span>Carrito</span>

                    {cartCount > 0 && (
                        <span className="nav-cart-count">
                            {cartCount}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;