import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/category/category-product">
        <Image src="/images/electronics.png" width={100} height={50} alt="" />
        <h2 className="font-bold text-lg">Electronics</h2>
      </Link>
    </div>
  );
};

export default CategoryCard;
