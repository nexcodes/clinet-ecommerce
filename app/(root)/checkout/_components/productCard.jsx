import { Heart, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white px-4 py-2 rounded-sm flex flex-row-reverse lg:flex-row gap-4">
      <div className="relative w-40 h-40 lg:w-32 lg:h-32 flex items-center justify-center lg:block">
        <Image src={product.thumbnail} alt="" fill className="object-contain" />
      </div>
      <div className="space-y-0.5">
        <div>
          <h3 className="text-lg font-semibold leading-normal">
            {product.name}
          </h3>
          <p className="text-sm text-gray-700">{product.shortDescription}</p>
          <div className="flex items-center justify-between">
            {product?.saleStatus ? (
              <div>
                <span className="text-black font-bold text-md md:text-lg line-through">
                  ${product?.price}
                </span>{" "}
                <span className="text-black font-bold text-lg md:text-xl">
                  ${product?.salePrice}
                </span>{" "}
                <span className="text-green-600 font-bold text-xs">
                  {product?.discount}%
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold text-gray-900">
                ${product?.price}
              </span>
            )}
          </div>
        </div>
        <div>
          {/* <span className="text-xs text-gray-500">Order in 5 hrs 51 mins</span> */}
          <p className="text-sm text-gray-700">
            {product.estimatedDeliveryText}
          </p>
        </div>
        {/* <p className="text-sm text-gray-700">
          Sold by <strong className="text-gray-800">P A P I T A</strong>
        </p> */}
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
