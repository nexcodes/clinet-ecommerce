"use client";

import CategoryCard from "./category-card";

const CategorySection = () => {
  const arr = ["1", "2", "3", "4"];

  return (
    <div className="bg-gray-50">
      <div className="p-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {arr.map((item, index) => (
            <CategoryCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
