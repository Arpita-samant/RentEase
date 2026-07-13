import React from "react";
import { dummyProductData } from "../../assets/assets";

const ManageProducts = () => {
  return (

    <div>

      <h2 className="text-3xl font-bold mb-8">
        Manage Products
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {dummyProductData.map(product => (

          <div
            key={product._id}
            className="bg-white rounded-xl shadow p-5"
          >

            <img
              src={product.image}
              className="w-full h-52 object-cover rounded-lg"
              alt=""
            />

            <h2 className="text-xl font-semibold mt-4">
              {product.name}
            </h2>

            <p className="text-gray-500">
              {product.brand}
            </p>

            <p className="text-blue-600 font-bold mt-2">
              ₹{product.rentPerMonth}/month
            </p>

            <div className="flex gap-3 mt-5">

              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Edit
              </button>

              <button className="bg-red-600 text-white px-4 py-2 rounded">
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ManageProducts;