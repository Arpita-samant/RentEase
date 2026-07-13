import React, { useState } from "react";

const RequestCard = ({ request }) => {

  const [status, setStatus] = useState(request.status);

  return (
    <div className="bg-white rounded-xl shadow p-5 flex gap-5">

      <img
        src={request.product.image}
        className="w-32 h-32 object-cover rounded-lg"
        alt=""
      />

      <div className="flex-1">

        <h2 className="text-xl font-semibold">
          {request.product.name}
        </h2>

        <p className="text-gray-500">
          {request.product.brand}
        </p>

        <p className="mt-2">
          <strong>Customer :</strong>{" "}
          {request.customerName}
        </p>

        <p>
          <strong>Phone :</strong>{" "}
          {request.phone}
        </p>

        <p>
          <strong>Rental :</strong>{" "}
          {request.pickupDate} - {request.returnDate}
        </p>

        <p className="font-semibold mt-2 text-blue-600">
          ₹{request.amount}/month
        </p>

      </div>

      <div className="flex flex-col justify-center gap-3">

        {status === "Pending" ? (
          <>
            <button
              onClick={() => setStatus("Approved")}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Accept
            </button>

            <button
              onClick={() => setStatus("Rejected")}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Reject
            </button>
          </>
        ) : (
          <span
            className={`px-4 py-2 rounded-lg text-center text-white ${
              status === "Approved"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {status}
          </span>
        )}

      </div>

    </div>
  );
};

export default RequestCard;