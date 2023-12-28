import { Heart, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-white px-4 py-2 rounded-sm flex flex-row-reverse lg:flex-row gap-4">
      <div className="relative w-40 h-40 lg:w-32 lg:h-32 flex items-center justify-center lg:block">
        <Image src="/images/product-1.png" alt="" fill className="object-contain"/>
      </div>
      <div className="space-y-0.5">
        <div>
          <span className="text-gray-500">Apple</span>
          <h3 className="text-lg font-semibold leading-normal">
            iPhone 14 256GB Yellow 5G With FaceTime - International Version
          </h3>
        </div>
        <div>
          <span className="text-xs text-gray-500">Order in 5 hrs 51 mins</span>
          <p className="text-sm text-gray-700">
            <strong className="text-gray-800">Free delivery</strong> by{" "}
            <span className="underline font-bold text-gray-800">
              Fri, Dec 29.
            </span>
          </p>
        </div>
        <p className="text-sm text-gray-700">
          Sold by <strong className="text-gray-800">P A P I T A</strong>
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-500 cursor-pointer">
            <Heart size={16} />
            <span className="text-sm">Move to Wishlist</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 cursor-pointer">
            <Trash size={16} />
            <span className="text-sm">Remove</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
