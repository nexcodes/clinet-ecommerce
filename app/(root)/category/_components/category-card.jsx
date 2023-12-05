import Image from "next/image";
import React from "react";

const CategoryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/images/electronics.png" width={100} height={50} alt="" />
      <h2 className="font-bold text-lg">Electronics</h2>
    </div>
  );
};

export default CategoryCard;
