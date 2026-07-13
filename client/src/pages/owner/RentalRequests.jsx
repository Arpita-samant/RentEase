import React from "react";
import { dummyRentalRequests } from "../../assets/assets";
import RequestCard from "../../components/RequestCard";

const RentalRequests = () => {

  return (

    <div>

      <h2 className="text-3xl font-bold mb-8">
        Rental Requests
      </h2>

      <div className="space-y-6">

        {dummyRentalRequests.map(request => (

          <RequestCard
            key={request._id}
            request={request}
          />

        ))}

      </div>

    </div>

  );
};

export default RentalRequests;