import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/products-details/${products._id}`);
        window.scrollTo(0, 0);
      }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={products.image}
          alt={products.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {products.isAvailable && (
          <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
            Available
          </span>
        )}

        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg">
          <span className="font-semibold">
            {currency}
            {products.rentPerMonth}
          </span>
          <span className="text-sm text-white/80"> / month</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <p className="text-blue-600 text-sm font-medium">
          {products.category}
        </p>

        <h3 className="text-xl font-semibold mt-2">
          {products.name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Brand: {products.brand}
        </p>

        <p className="text-gray-600 text-sm mt-3 line-clamp-2">
          {products.description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-gray-500 text-sm">
            📍 {products.location}
          </span>

          <button
            onClick={(e) => e.stopPropagation()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
