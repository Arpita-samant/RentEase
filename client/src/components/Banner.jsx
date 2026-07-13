import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-gradient-to-r from-[#0558FE] via-[#3B82F6] to-[#A9CFFF] rounded-3xl overflow-hidden">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="w-full md:w-1/2 p-8 md:p-14 text-white">

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
              Budget Friendly Rentals
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Rent Furniture
              <br />
              & Appliances
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-md">
              Furnish your home with premium furniture and appliances at
              affordable monthly rentals. Fast delivery and hassle-free returns.
            </p>

            <button className="mt-8 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition">
              Know More
            </button>

          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">

            <img
              src={assets.banner_image}
              alt="Furniture Banner"
              className="h-72 md:h-120 object-contain py-4 rounded-3xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;
