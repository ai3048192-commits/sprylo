import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import ShopOffers from "./pages/ShopOffers";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductsDatabase from "./pages/ProductsDatabase";

export default function App() {
  return (
    <Router>
      {/* الشريط العلوي يجب أن يكون خارج الـ Routes */}
      <Header />
      <Navbar />

      <Routes>
        {/* يمكنك ترك هذا الجزء فارغاً الآن أو وضع المسارات لاحقاً */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopoffers" element={<ShopOffers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/productsDatabase" element={<ProductsDatabase />} />
      </Routes>
      <Footer />
    </Router>
  );
}
