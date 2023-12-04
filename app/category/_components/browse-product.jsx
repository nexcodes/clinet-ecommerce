"use client";

import ProductCard from "./product-card";

const BrowseProductSection = () => {
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
    <div className="bg-gray-100">
      <div className="container px-5 py-4 mx-auto">
        <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl text-center">
          Browse Product
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-2">
          {arr.map((item, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseProductSection;
