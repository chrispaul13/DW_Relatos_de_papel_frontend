import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookCover from "../components/BookCover";
import { useCart } from "../hooks/useCart";
import "../styles/shopping-cart.css";

function ShoppingCart() {
    const {
        cartItems,
        cartCount,
        cartTotal,
        removeItem,
        updateQuantity,
    } = useCart();

    return (
        <div className="shopping-cart-page">
            <Navbar />

            <main className="shopping-cart-main">
                <div className="shopping-cart-heading">
                    <p className="shopping-cart-eyebrow">
                        Tu selección de lectura
                    </p>
                    <h1>Mi carrito</h1>
                    <p>
                        {cartCount} {cartCount === 1 ? "libro" : "libros"} en tu carrito
                    </p>
                </div>

                {cartItems.length === 0 ? (
                    <section className="cart-empty">
                        <span className="cart-empty-icon">🛒</span>
                        <h2>Tu carrito está vacío</h2>
                        <p>
                            Todavía no has añadido ningún libro.
                            Descubre nuestra selección y encuentra tu próxima lectura.
                        </p>
                        <Link className="cart-primary-button" to="/home">
                            Explorar catálogo
                        </Link>
                    </section>
                ) : (
                    <div className="cart-layout">
                        <section className="cart-products">
                            {cartItems.map((item) => (
                                <article className="cart-product" key={item.id}>
                                    <BookCover
                                        book={item}
                                        className="cart-product-image"
                                        fallbackClassName="cart-product-image book-cover-fallback--cart"
                                        loading="eager"
                                    />

                                    <div className="cart-product-info">
                                        <h2>{item.title}</h2>
                                        <p>{item.author}</p>
                                        <strong>
                                            ${Number(item.price).toFixed(2)}
                                        </strong>

                                        <div className="cart-quantity">
                                            <button
                                                type="button"
                                                aria-label={`Disminuir cantidad de ${item.title}`}
                                                disabled={item.quantity <= 1}
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.quantity - 1
                                                    )
                                                }
                                            >
                                                −
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                type="button"
                                                aria-label={`Aumentar cantidad de ${item.title}`}
                                                disabled={item.quantity >= item.stock}
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.quantity + 1
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-product-actions">
                                        <strong>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </strong>

                                        <button
                                            className="cart-remove-button"
                                            type="button"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </article>
                            ))}

                            <Link className="cart-back-link" to="/home">
                                ← Seguir explorando libros
                            </Link>
                        </section>

                        <aside className="cart-summary">
                            <h2>Resumen del pedido</h2>

                            <div className="cart-summary-row">
                                <span>Productos</span>
                                <span>{cartCount}</span>
                            </div>

                            <div className="cart-summary-row">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>

                            <div className="cart-summary-row">
                                <span>Envío</span>
                                <span>Por calcular</span>
                            </div>

                            <div className="cart-summary-total">
                                <span>Total</span>
                                <strong>${cartTotal.toFixed(2)}</strong>
                            </div>

                            <Link
                                className="cart-primary-button cart-checkout-button"
                                to="/checkout"
                            >
                                Continuar al checkout
                            </Link>

                            <p className="cart-summary-note">
                                El importe del envío se determinará durante
                                el proceso de compra.
                            </p>
                        </aside>
                    </div>
                )}
            </main>

            <footer className="site-footer">
                <p>© 2026 Relatos de papel</p>
                <Link to="/home">Volver al catálogo</Link>
            </footer>
        </div>
    );
}

export default ShoppingCart;