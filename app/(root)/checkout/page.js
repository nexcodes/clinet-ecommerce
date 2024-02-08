import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductSection from "./_components/product-section";
import OrderSummary from "./_components/order-summary";

const Checkout = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4 lg:space-y-0 lg:flex lg:gap-4">
        <div className="lg:max-w-4xl w-full space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-3xl text-gray-800 font-bold">{"Cart "}</h3>
            <span className="text-base text-gray-500 font-medium">
              {"(1 item)"}
            </span>
          </div>
          <div className="relative w-full h-12">
            <Image src="/images/banner-4.png" alt="" fill />
          </div>
          <ProductSection />
          <button className="bg-white border-2 border-blue-500 text-blue-500 px-4 py-2 font-bold rounded-sm">
            Continue Shopping
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-3xl text-gray-800 font-bold">
                {"Wishlist "}
              </h3>
              <span className="text-base text-gray-500 font-medium">
                {"(0 item)"}
              </span>
            </div>
            <Link
              href="/wishlist"
              className="text-blue-500 underline text-base"
            >
              {"View All >"}
            </Link>
          </div>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
