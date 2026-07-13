import React from "react";

import DashboardCard from "../../components/DashboardCard";

import {
  dummyProductData,
  dummyRentalRequests,
} from "../../assets/assets";

const Dashboard = () => {

  const pending =
    dummyRentalRequests.filter(
      item => item.status === "Pending"
    ).length;

  const approved =
    dummyRentalRequests.filter(
      item => item.status === "Approved"
    ).length;

  const rejected =
    dummyRentalRequests.filter(
      item => item.status === "Rejected"
    ).length;

  const revenue =
    dummyRentalRequests
      .filter(item => item.status === "Approved")
      .reduce((sum, item) => sum + item.amount, 0);

  return (

    <div>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">

        <DashboardCard
          title="Products"
          value={dummyProductData.length}
          color="bg-blue-600"
        />

        <DashboardCard
          title="Requests"
          value={dummyRentalRequests.length}
          color="bg-green-600"
        />

        <DashboardCard
          title="Pending"
          value={pending}
          color="bg-yellow-500"
        />

        <DashboardCard
          title="Approved"
          value={approved}
          color="bg-purple-600"
        />

        <DashboardCard
          title="Revenue"
          value={`₹${revenue}`}
          color="bg-pink-600"
        />

      </div>

      <div className="bg-white rounded-xl shadow mt-10 p-6">

        <h2 className="text-2xl font-semibold mb-5">
          Recent Rental Requests
        </h2>

        <table className="w-full">

          <thead>

            <tr className="text-left border-b">

              <th className="pb-3">Customer</th>

              <th>Product</th>

              <th>Amount</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {dummyRentalRequests.map(item => (

              <tr
                key={item._id}
                className="border-b h-16"
              >

                <td>{item.customerName}</td>

                <td>{item.product.name}</td>

                <td>₹{item.amount}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      item.status === "Approved"
                        ? "bg-green-600"
                        : item.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-600"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
};

export default Dashboard;