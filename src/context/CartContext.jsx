
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const CART_STORAGE_KEY = "relatos-de-papel-cart";

function getInitialCart() {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        return savedCart ? JSON.parse(savedCart) : [];
    } catch {
        return [];
    }
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(getInitialCart);

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    const addItem = (book) => {
        let added = false;

        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.id === book.id
            );

            if (existingItem) {
                if (existingItem.quantity >= book.stock) {
                    return currentItems;
                }

                added = true;

                return currentItems.map((item) =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            if (book.stock <= 0) {
                return currentItems;
            }

            added = true;

            return [...currentItems, { ...book, quantity: 1 }];
        });

        return added;
    };

    const removeItem = (bookId) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== bookId)
        );
    };

    const updateQuantity = (bookId, quantity) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === bookId
                    ? {
                        ...item,
                        quantity: Math.max(
                            1,
                            Math.min(Number(quantity), item.stock)
                        ),
                    }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                cartTotal,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}