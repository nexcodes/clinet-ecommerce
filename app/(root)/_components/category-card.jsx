import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }) => {
  if (!category) return null;

  return (
    <Link href={`/category/${category._id}`}>
      <div className="flex flex-col items-center justify-center">
        <Image src={category.image} width={100} height={50} alt="" />
        <h2 className="font-bold text-lg">{category.name}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
