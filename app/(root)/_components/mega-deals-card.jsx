"use client";

import { useCartStore } from "@/zustand/cart";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

const MegaDealsCard = ({ product }) => {
  const { addItemToCart } = useCartStore();

  return (
    <div>
      <div className="bg-gray-100 rounded-t-lg relative">
        <div className="absolute top-0 right-0 bg-yellow-400 px-4 rounded-b-lg">
          <p className="text-red-600 text-[0.6rem] md:text-sm">
            Smartphone deal
          </p>
        </div>

        <div className="absolute bottom-0 right-0 px-4">
          <div
            className="bg-white rounded-full cursor-pointer p-2"
            onClick={() => {
              const res = addItemToCart(product);
              toast.message(res.message)
            }}
          >
            <ShoppingCart size={20} />
          </div>
        </div>

        <div className="flex items-center justify-center pt-2 pb-4 sm:pt-4 sm:pb-0">
          <Image src={product.thumbnail} width={80} height={80} alt="" />
        </div>
      </div>
      <div className="bg-gray-200 rounded-b-lg p-2">
        <h6 className="text-gray-600 text-sm leading-5">{product.name}</h6>
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
  );
};

export default MegaDealsCard;
