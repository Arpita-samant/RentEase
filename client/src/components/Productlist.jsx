import React from "react";
import { dummyProductData } from "../assets/assets";
import ProductCard from "./ProductCard";

const Productlist = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">All Products</h1>
        <p className="text-gray-500 mt-2">
          Explore our premium furniture and appliance rentals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {dummyProductData.map((product) => (
          <ProductCard
            key={product._id}
            products={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Productlist;