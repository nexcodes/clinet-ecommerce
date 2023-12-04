"use client";

import CategoryCard from "./category-card";

const CategorySection = () => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  return (
    <div className="bg-gray-100">
      <div className="p-4">
        <div className="flex items-center justify-center">
          <h2 className="text-xl sm:text-3xl text-center font-extrabold mb-4 bg-yellow-300 px-4 py-4 rounded-full w-full sm:w-1/2">
            Explore all product
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 place-items-center">
          {arr.map((item, index) => (
            <CategoryCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
