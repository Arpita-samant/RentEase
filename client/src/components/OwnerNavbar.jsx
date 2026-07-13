import React from "react";

const OwnerNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-white px-8 py-5 shadow">

      <div>
        <h1 className="text-2xl font-bold">
          Owner Dashboard
        </h1>

        <p className="text-gray-500">
          Manage your products and rental requests
        </p>
      </div>

      <div className="flex items-center gap-4">

        <img
          src="https://i.pravatar.cc/100"
          className="w-11 h-11 rounded-full"
          alt=""
        />

        <div>

          <h2 className="font-semibold">
            Owner
          </h2>

          <p className="text-sm text-gray-500">
            Admin Panel
          </p>

        </div>

      </div>

    </div>
  );
};

export default OwnerNavbar;