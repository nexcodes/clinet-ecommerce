import React from "react";
import AllProductsCard from "./all-products-card";

const AllProducts = () => {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  return (
    <div className="container px-5 py-4 mx-auto">
      <div className="flex items-center justify-between">
        <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
          All Mobiles
        </h3>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-50 font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Shop Now
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-2">
        {arr.map((item, index) => (
          <AllProductsCard key={index} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-8">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-50 font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
