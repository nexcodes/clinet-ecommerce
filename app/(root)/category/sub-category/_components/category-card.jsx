import Image from "next/image";
import React from "react";

const CategoryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/images/electronics.png" width={100} height={100} alt="" />
      <h2 className="font-bold text-lg">Air pods</h2>
    </div>
  );
};

export default CategoryCard;
