import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    review:
      "RentEase made furnishing my apartment so easy. The sofa and washing machine were delivered on time and in excellent condition.",
  },
  {
    name: "Rahul Verma",
    role: "College Student",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    review:
      "Affordable rental plans and great customer service. Perfect for students and working professionals.",
  },
  {
    name: "Ananya Singh",
    role: "Marketing Executive",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    review:
      "I rented a refrigerator and study table for six months. The quality was excellent and the return process was hassle-free.",
  },
];

const Testimonial = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          What Our Customers Say
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Thousands of customers trust RentEase for affordable furniture and
          appliance rentals with quick delivery and flexible plans.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-center mt-5">
              {item.name}
            </h3>

            <p className="text-center text-gray-500">{item.role}</p>

            <div className="flex justify-center text-yellow-400 text-xl mt-3">
              ★★★★★
            </div>

            <p className="text-center text-gray-600 mt-5 leading-7">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
