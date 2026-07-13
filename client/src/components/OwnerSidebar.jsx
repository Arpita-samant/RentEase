import React from "react";
import { NavLink } from "react-router-dom";

const OwnerSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold text-blue-400 mb-10">
        RentEase
      </h1>

      <nav className="space-y-3">

        <NavLink
          to="/owner"
          end
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`
          }
        >
          📊 Dashboard
        </NavLink>

        <NavLink
          to="/owner/add-product"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`
          }
        >
          ➕ Add Product
        </NavLink>

        <NavLink
          to="/owner/manage-products"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`
          }
        >
          📦 Manage Products
        </NavLink>

        <NavLink
          to="/owner/rental-requests"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`
          }
        >
          📋 Rental Requests
        </NavLink>

      </nav>

    </div>
  );
};

export default OwnerSidebar;