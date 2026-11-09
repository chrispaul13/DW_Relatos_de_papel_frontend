import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/tokens.css";
import "../styles/landing.css";
import { mockBooks } from "../data/mocks/books.mock";
import Navbar from "../components/Navbar";
import BookCover from "../components/BookCover";

function Home() {
    const [search, setSearch] = useState("");
    const normalizedSearch = search.trim().toLocaleLowerCase("es");
    const filteredBooks = mockBooks.filter((book) =>
        book.title.toLocaleLowerCase("es").includes(normalizedSearch)
    );

    return (
        <div className="landing-page">
           <Navbar />

            <main>
                <section className="hero" aria-labelledby="home-title">
                    <img
                        className="hero__image"
                        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=2200&q=85"
                        alt="Libros abiertos y apilados sobre una mesa de lectura"
                    />
                    <div className="hero__shade" aria-hidden="true" />
                    <div className="hero__content">
                        <p className="eyebrow">Lecturas para cada momento</p>
                        <h1 id="home-title">Encuentra tu próxima historia</h1>
                        <p className="hero__copy">
                            Explora nuevas voces, vuelve a tus autores favoritos y descubre
                            ese libro que no sabías que estabas buscando.
                        </p>
                        <a className="button-primary" href="#catalogo">
                            Explorar el catálogo
                        </a>
                    </div>
                    <span className="hero__caption">Un refugio para lectores curiosos</span>
                </section>

                <section className="selection" id="catalogo" aria-labelledby="catalog-title">
                    <div className="selection__heading">
                        <div>
                            <p className="section-kicker">Elegidos para ti</p>
                            <h2 id="catalog-title">Lecturas que dejan huella</h2>
                        </div>
                        <label className="catalog-search">
                            <span>Buscar por título</span>
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Ej. El jardín de las horas"
                            />
                        </label>
                    </div>

                    {filteredBooks.length > 0 ? (
                        <div className="book-grid">
                            {filteredBooks.map((book) => (
                                <Link className="book-card" key={book.id} to={`/book/${book.id}`}>
                                    <div className="book-card__image-wrap">
                                        <BookCover
                                            book={book}
                                            className="book-card__image"
                                            fallbackClassName="book-card__image book-cover-fallback--card"
                                        />
                                        {book.tag && (
                                            <span className="book-card__tag">{book.tag}</span>
                                        )}
                                    </div>
                                    <div className="book-card__details">
                                        <div>
                                            <h3>{book.title}</h3>
                                            <p className="book-card__author">{book.author}</p>
                                        </div>
                                        <p className="book-card__price">
                                            ${Number(book.price).toFixed(2)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="empty-results" role="status">
                            No encontramos títulos que coincidan con “{search}”.
                        </p>
                    )}
                </section>
            </main>

            <footer className="site-footer">
                <p>© 2026 Relatos de papel</p>
                <a href="#catalogo">Volver al catálogo</a>
            </footer>
        </div>
    );
}

export default Home;