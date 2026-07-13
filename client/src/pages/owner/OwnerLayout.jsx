import React from "react";
import { Outlet } from "react-router-dom";
import OwnerSidebar from "../../components/OwnerSidebar";
import OwnerNavbar from "../../components/OwnerNavbar";

const OwnerLayout = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <OwnerSidebar />

      <div className="flex-1">

        <OwnerNavbar />

        <div className="p-8">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default OwnerLayout;