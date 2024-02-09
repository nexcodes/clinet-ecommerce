"use client";

import Cart from "@/components/icons/cart";
import Express from "@/components/icons/express";
import StarFill from "@/components/icons/star-fill";
import { useCartStore } from "@/zustand/cart";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const ProductCard = ({ product }) => {
  const { cart , addItemToCart } = useCartStore();

  return (
    <div className="w-full sm:max-w-[14rem] bg-white border-[1px] border-gray-200 rounded-lg shadow p-2">
      <div className="flex justify-center relative bg-gray-50 rounded-lg p-2">
        <Link href={`/product/${product._id}`}>
          <Image
            src={product.thumbnail}
            width={200}
            height={350}
            alt="product image"
          />
        </Link>
        <div className="absolute top-1 right-1 bg-white shadow rounded-full cursor-pointer p-2">
          <Heart size={20} className="text-gray-700" />
        </div>
        <div className="absolute bottom-1 left-0 right-0 px-4">
          <div className="flex justify-between items-center">
            <div className="bg-white rounded-full cursor-pointer px-3 py-1 space-x-1 flex items-center">
              <span className="text-gray-800 font-bold">4.4</span>
              <StarFill className="text-green-600 w-4 h-4" />
              <span className="text-gray-500 font-normal">{"(7)"}</span>
            </div>
            <div className="bg-white rounded-full cursor-pointer p-2" onClick={() => {
              const res = addItemToCart(product)
              toast.message(res.message)
            }}>
              <Cart />
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <a href="#">
          <h5 className="text-md font-semibold tracking-tight text-gray-900">
            {product?.name}
          </h5>
        </a>
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
        <div className="flex items-center space-x-1 my-1 h-4">
          {product?.quantity < 40 && (
            <>
              <Image src="/images/bag.png" alt="" width={15} height={15} />
              <p className="text-xs md:text-sm text-gray-900 dark:text-white">
                only {product?.quantity} left in stock
              </p>
            </>
          )}
        </div>
        <Express />
      </div>
    </div>
  );
};

export default ProductCard;
