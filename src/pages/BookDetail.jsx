import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mockBooks } from "../data/mocks/books.mock";
import { mockBookReviews } from "../data/mocks/book-reviews.mock";
import { useCart } from "../hooks/useCart";
import BookCover from "../components/BookCover";

import "../styles/tokens.css";
import "../styles/landing.css";
import "../styles/book-detail.css";

const tabs = [
    { id: "description", label: "Descripción" },
    { id: "specifications", label: "Ficha técnica" },
    { id: "reviews", label: "Opiniones" },
];

function BookDetail() {
    const { id } = useParams();

    const book = mockBooks.find(
        (item) => item.id === Number(id)
    );

    const [activeTab, setActiveTab] = useState("description");
    const [cartMessage, setCartMessage] = useState("");

    // Acceso al carrito compartido
    const { cartItems, addItem } = useCart();

    // Libro no encontrado
    if (!book) {
        return (
            <div className="book-detail-page">
                <Navbar />

                <main className="book-detail-empty">
                    <p className="book-detail-eyebrow">Catálogo</p>
                    <h1>Este libro no está disponible</h1>
                    <p>No encontramos un libro con ese identificador.</p>
                    <Link className="book-detail-back" to="/home">
                        Regresar al catálogo
                    </Link>
                </main>

                <footer className="site-footer">
                    <p>© 2026 Relatos de papel</p>
                    <Link to="/home">Volver al catálogo</Link>
                </footer>
            </div>
        );
    }

    // Información del libro
    const reviews = mockBookReviews.filter(
        (review) => review.bookId === book.id
    );

    const hasStock = book.stock > 0;

    // Cantidad del libro que ya está en el carrito
    const currentCartItem = cartItems.find(
        (item) => item.id === book.id
    );

    const currentQuantity = currentCartItem?.quantity ?? 0;

    const canAddToCart =
        hasStock && currentQuantity < book.stock;

    // Añadir libro al carrito
    const handleAddToCart = () => {
        if (!canAddToCart) return;

        addItem(book);
        setCartMessage("¡Libro añadido al carrito correctamente!");
    };

    return (
        <div className="book-detail-page">
            <Navbar />

            <main className="book-detail-main">
                <nav
                    className="book-detail-breadcrumb"
                    aria-label="Ruta de navegación"
                >
                    <Link to="/home">Catálogo</Link>
                    <span aria-hidden="true">/</span>
                    <span>{book.category}</span>
                    <span aria-hidden="true">/</span>
                    <span aria-current="page">{book.title}</span>
                </nav>

                <section
                    className="book-detail-layout"
                    aria-labelledby="book-title"
                >
                    <div className="book-detail-cover-wrap">
                        <BookCover
                            book={book}
                            className="book-detail-cover"
                            fallbackClassName="book-detail-cover-fallback"
                            loading="eager"
                        />
                    </div>

                    <div className="book-detail-content">
                        <p className="book-detail-eyebrow">
                            {book.category}
                        </p>

                        <h1 id="book-title">{book.title}</h1>

                        <p className="book-detail-author">
                            Por {book.author}
                        </p>

                        <div
                            className="book-detail-rating"
                            aria-label={`Calificación ${book.rating} de 5`}
                        >
                            <span aria-hidden="true">★★★★★</span>
                            <strong>{book.rating.toFixed(1)}</strong>

                            <button
                                className="book-detail-rating-link"
                                type="button"
                                onClick={() => setActiveTab("reviews")}
                            >
                                {reviews.length} opiniones
                            </button>
                        </div>

                        <p className="book-detail-price">
                            ${book.price.toFixed(2)}
                        </p>

                        <p
                            className={`book-detail-stock${
                                hasStock ? " is-available" : " is-unavailable"
                            }`}
                        >
                            {hasStock
                                ? `${book.stock} disponibles`
                                : "Sin stock"}
                        </p>

                        <button
                            className="book-detail-add-button"
                            type="button"
                            disabled={!canAddToCart}
                            onClick={handleAddToCart}
                        >
                            {!hasStock
                                ? "Agotado"
                                : !canAddToCart
                                    ? "Stock máximo alcanzado"
                                    : "Añadir al carrito"}
                        </button>

                        <p
                            className="book-detail-cart-note"
                            aria-live="polite"
                        >
                            {cartMessage}
                        </p>

                        <div className="book-detail-tabs">
                            <div
                                className="book-detail-tablist"
                                role="tablist"
                                aria-label="Información del libro"
                            >
                                {tabs.map((tab) => (
                                    <button
                                        className="book-detail-tab"
                                        id={`tab-${tab.id}`}
                                        key={tab.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={
                                            activeTab === tab.id
                                        }
                                        aria-controls="book-detail-tabpanel"
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {tab.id === "reviews"
                                            ? `${tab.label} (${reviews.length})`
                                            : tab.label}
                                    </button>
                                ))}
                            </div>

                            <div
                                className="book-detail-tabpanel"
                                id="book-detail-tabpanel"
                                role="tabpanel"
                                aria-labelledby={`tab-${activeTab}`}
                                tabIndex="0"
                            >
                                {activeTab === "description" && (
                                    <p className="book-detail-description">
                                        {book.description}
                                    </p>
                                )}

                                {activeTab === "specifications" && (
                                    <dl className="book-detail-specifications">
                                        <div>
                                            <dt>ISBN</dt>
                                            <dd>{book.isbn}</dd>
                                        </div>
                                        <div>
                                            <dt>Editorial</dt>
                                            <dd>{book.publisher}</dd>
                                        </div>
                                        <div>
                                            <dt>Año de publicación</dt>
                                            <dd>{book.publicationYear}</dd>
                                        </div>
                                        <div>
                                            <dt>Páginas</dt>
                                            <dd>{book.pages}</dd>
                                        </div>
                                        <div>
                                            <dt>Idioma</dt>
                                            <dd>{book.language}</dd>
                                        </div>
                                    </dl>
                                )}

                                {activeTab === "reviews" && (
                                    reviews.length > 0 ? (
                                        <div className="book-detail-reviews">
                                            {reviews.map((review) => (
                                                <article
                                                    className="book-detail-review"
                                                    key={review.id}
                                                >
                                                    <div className="book-detail-review-heading">
                                                        <strong>
                                                            {review.reviewer}
                                                        </strong>
                                                        <span
                                                            aria-label={`${review.rating} de 5 estrellas`}
                                                        >
                                                            {"★".repeat(review.rating)}
                                                        </span>
                                                    </div>

                                                    <time dateTime={review.date}>
                                                        {new Date(
                                                            `${review.date}T12:00:00`
                                                        ).toLocaleDateString("es")}
                                                    </time>

                                                    <p>{review.comment}</p>
                                                </article>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="book-detail-description">
                                            Todavía no hay opiniones de muestra
                                            para este libro.
                                        </p>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <p>© 2026 Relatos de papel</p>
                <Link to="/home">Volver al catálogo</Link>
            </footer>
        </div>
    );
}

export default BookDetail;