import Cart from "@/components/icons/cart";
import Express from "@/components/icons/express";
import StarFill from "@/components/icons/star-fill";
import { Heart, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="w-full sm:max-w-[14rem] bg-white rounded-lg p-2">
      <div className="flex justify-center relative bg-gray-50 rounded-lg p-2">
        <Image
          src={"/images/product-1.png"}
          width={200}
          height={350}
          alt="product image"
        />
        <div className="absolute bottom-1 left-0 right-0 px-4">
          <div className="flex justify-between items-center">
            <div className="bg-white rounded-full cursor-pointer px-3 py-1 space-x-1 flex items-center">
              <span className="text-gray-800 font-bold">4.4</span>
              <StarFill className="text-green-600 w-4 h-4" />
              <span className="text-gray-500 font-normal">{"(7)"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <a href="#">
          <h5 className="text-md font-semibold tracking-tight text-gray-900">
            Apple iPhone 14 Pro Max
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">$599</span>
        </div>
        <Express />
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-blue-500 rounded text-white font-bold px-4 py-2">
          ADD TO CART
        </button>
        <button className="border border-blue-500 rounded text-blue-500 font-bold px-4 py-2">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
