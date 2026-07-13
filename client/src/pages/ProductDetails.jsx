import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyProductData } from "../assets/assets";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = dummyProductData.find(
      (item) => item._id === id
    );
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8"
      >
        <img
          src={assets.arrow_icon}
          alt="back"
          className="w-4 rotate-180"
        />
        Back to Products
      </button>

      {/* Product Details */}
      <div className="grid lg:grid-cols-2 gap-12">

        {/* Left */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right */}
        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold mt-5">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-2">
            Brand: {product.brand}
          </p>

          <p className="text-gray-600 mt-6 leading-8">
            {product.description}
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium">Monthly Rent</span>
              <span className="text-blue-600 font-bold text-xl">
                ₹{product.rentPerMonth}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium">Security Deposit</span>
              <span>
                ₹{product.securityDeposit}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium">Location</span>
              <span>{product.location}</span>
            </div>

            <div className="flex justify-between pb-3">
              <span className="font-medium">Availability</span>

              {product.isAvailable ? (
                <span className="text-green-600 font-semibold">
                  In Stock
                </span>
              ) : (
                <span className="text-red-500 font-semibold">
                  Out of Stock
                </span>
              )}
            </div>

          </div>

          <button className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-medium transition">
            Rent Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
