import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Home from "../pages/Home";
import BookDetail from "../pages/BookDetail";
import Checkout from "../pages/Checkout";
import Profile from "../pages/Profile";
import ShoppingCart from "../pages/ShoppingCart";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/book/:id" element={<BookDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;