import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookCover from "../components/BookCover";
import { useCart } from "../hooks/useCart";
import "../styles/checkout.css";

function Checkout() {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const handleConfirmOrder = () => {
        if (cartItems.length === 0) {
            return;
        }

        window.alert("¡Tu pedido se ha realizado correctamente!");
        clearCart();
        navigate("/home");
    };

    return (
        <>
            <Navbar />

            <main className="container checkout-page">
                <div className="checkout-header">
                    <span className="checkout-eyebrow">
                        RELATOS DE PAPEL
                    </span>
                    <h1>Finalizar compra</h1>
                    <p>Revisa los detalles de tu pedido antes de confirmarlo.</p>
                </div>

                {cartItems.length === 0 ? (
                    <section className="checkout-empty">
                        <div className="checkout-empty-icon">📚</div>
                        <h2>Tu carrito está vacío</h2>
                        <p>
                            Todavía no has seleccionado libros para tu compra.
                        </p>
                        <Link to="/home" className="checkout-back-button">
                            Explorar catálogo
                        </Link>
                    </section>
                ) : (
                    <div className="checkout-layout">
                        <section className="checkout-order">
                            <div className="checkout-section-heading">
                                <h2>Resumen de tu pedido</h2>
                                <span>{cartItems.length} productos</span>
                            </div>

                            <div className="checkout-items">
                                {cartItems.map((item) => (
                                    <article
                                        className="checkout-item"
                                        key={item.id}
                                    >
                                        <div className="checkout-item-image">
                                            <BookCover
                                                book={item}
                                                className="checkout-item-cover"
                                                fallbackClassName="checkout-item-cover book-cover-fallback--cart"
                                                loading="eager"
                                            />
                                        </div>

                                        <div className="checkout-item-info">
                                            <h3>{item.title}</h3>
                                            <p>{item.author}</p>
                                            <span>
                                                Cantidad: {item.quantity}
                                            </span>
                                        </div>

                                        <div className="checkout-item-price">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <aside className="checkout-summary">
                            <h2>Resumen de pago</h2>

                            <div className="checkout-summary-row">
                                <span>Productos</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>

                            <div className="checkout-summary-row">
                                <span>Envío</span>
                                <span>Por calcular</span>
                            </div>

                            <div className="checkout-summary-total">
                                <span>Total</span>
                                <strong>${cartTotal.toFixed(2)}</strong>
                            </div>

                            <p className="checkout-note">
                                Esta es una compra de demostración.
                                No se realizará ningún cobro real.
                            </p>

                            <button
                                className="checkout-confirm-button"
                                onClick={handleConfirmOrder}
                            >
                                Confirmar compra
                            </button>

                            <Link
                                to="/cart"
                                className="checkout-edit-link"
                            >
                                Volver al carrito
                            </Link>
                        </aside>
                    </div>
                )}
            </main>
            <footer className="site-footer">
                <p>© 2026 Relatos de papel</p>
                <Link to="/home">Volver al catálogo</Link>
            </footer>
        </>
    );
}

export default Checkout;