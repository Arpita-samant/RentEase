import React from "react";

const DashboardCard = ({ title, value, color }) => {
  return (
    <div
      className={`rounded-xl p-6 shadow text-white ${color}`}
    >
      <h2 className="text-lg">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
};

export default DashboardCard;