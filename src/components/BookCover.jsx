import React, { useState } from "react";
import "../styles/book-cover.css";

function BookCover({ book, className, fallbackClassName, loading = "lazy" }) {
    const [failedImage, setFailedImage] = useState("");
    const imageUnavailable = failedImage === book.image;

    if (imageUnavailable) {
        return (
            <div
                className={[
                    "book-cover-fallback",
                    fallbackClassName,
                ].filter(Boolean).join(" ")}
                role="img"
                aria-label={`Portada no disponible: ${book.title}`}
            >
                <span>Portada no disponible</span>
                <strong>{book.title}</strong>
                <small>{book.author}</small>
            </div>
        );
    }

    return (
        <img
            className={className}
            src={book.image}
            alt={`Portada de ${book.title}`}
            loading={loading}
            onError={() => setFailedImage(book.image)}
        />
    );
}

export default BookCover;