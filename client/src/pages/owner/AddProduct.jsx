import React from "react";

const AddProduct = () => {
  return (

    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-2xl font-bold mb-6">
        Add New Product
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          className="border p-3 rounded-lg"
          placeholder="Product Name"
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Brand"
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Category"
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Monthly Rent"
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Security Deposit"
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Location"
        />

      </div>

      <textarea
        rows="5"
        placeholder="Description"
        className="border p-3 rounded-lg w-full mt-5"
      ></textarea>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
        Add Product
      </button>

    </div>
  );
};

export default AddProduct;