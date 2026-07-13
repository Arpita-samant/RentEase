import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import MyBookings from "./pages/MyBookings";

// Owner Pages
import OwnerLayout from "./pages/owner/OwnerLayout";
import Dashboard from "./pages/owner/Dashboard";
import AddProduct from "./pages/owner/AddProduct";
import ManageProducts from "./pages/owner/ManageProducts";
import RentalRequests from "./pages/owner/RentalRequests";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith("/owner");

  return (
    <>
      {/* Login Popup */}
      {showLogin && <Login setShowLogin={setShowLogin} />}

      {/* Navbar */}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Owner Routes */}
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="rental-requests" element={<RentalRequests />} />
        </Route>
      </Routes>

      {/* Footer */}
      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
