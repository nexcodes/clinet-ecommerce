"use client";

import { useCartStore } from "@/zustand/cart";
import { BadgePercent, ChevronRight } from "lucide-react";
import EMI from "@/components/icons/emi";
import Image from "next/image";

const OrderSummary = () => {
  const { cart } = useCartStore();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="lg:max-w-sm w-full">
      <div className="border border-gray-300 rounded px-4 py-2 space-y-4">
        <h3 className="text-2xl text-gray-700 font-bold">{"Order Summary"}</h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="border border-gray-300 rounded rounded-r-none w-full px-2 py-1 outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded rounded-l-none">
            Apply
          </button>
        </div>
        <div className="border border-gray-300 rounded bg-white px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BadgePercent size={16} className="text-blue-500" />
            <p className="text-blue-500 text-sm font-medium">
              View Available offers
            </p>
          </div>
          <ChevronRight size={16} className="text-blue-500" />
        </div>
        <div className="border-b border-gray-300 py-2 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-500 ">
              {"Subtotal "}
              <span className="text-base">{`(${cart.length} item)`}</span>
            </p>
            <span className="text-lg text-gray-600 ">${totalPrice}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-500 ">
              {"Shipping "}
              <span className="text-blue-500">{"Details"}</span>
            </p>
            <span className="text-lg text-blue-500 font-bold">Free</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl text-gray-800 font-bold">
            {"Total "}
            <span className="text-sm text-gray-600 font-normal">
              {"(Inclusive of VAT)"}
            </span>
          </p>
          <span className="text-2xl text-gray-800 font-bold">
            ${totalPrice}
          </span>
        </div>
        <div className="bg-pink-50 rounded px-4 py-2 flex items-center space-x-4">
          <EMI />
          <span className="text-sm">Monthly payment plans from AED 215.</span>
          <a className="text-sm text-yellow-400 underline font-bold">
            View more details
          </a>
        </div>
        <button className="bg-blue-500 rounded w-full text-white font-bold px-4 py-2">
          Checkout
        </button>
      </div>

      <div className="bg-pink-50/50 rounded px-4 py-2 flex items-center space-x-4 my-2">
        <Image src="/images/vip_debit_card.png" alt="" width={24} height={24} />
        <span className="text-sm">
          Earn AED 66.66 cashback using your Mashreq noon Debit Card.{" "}
          <a className="text-sm text-yellow-400 underline font-bold">
            Apply Now
          </a>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="border border-green-500 relative p-4 bg-white rounded">
          <div className="absolute top-0 left-4 -translate-y-1/2">
            <Image src="/images/tabby.svg" alt="" width={57} height={21} />
          </div>

          <p className="text-xs text-gray-500">
            Pay 4 interest-free payments of AED 833.25{" "}
            <a className="text-sm text-blue-500 underline font-bold">
              Learn more
            </a>
          </p>
        </div>
        <div className="border border-green-500 relative p-4 bg-white rounded">
          <div className="absolute top-0 left-4 -translate-y-1/2">
            <Image src="/images/tabby.svg" alt="" width={57} height={21} />
          </div>

          <p className="text-xs text-gray-500">
            Pay 4 interest-free payments of AED 833.25{" "}
            <a className="text-sm text-blue-500 underline font-bold">
              Learn more
            </a>
          </p>
        </div>
      </div>

      <div className="text-center mt-2">
        <h6 className="text-sm text-gray-600">
          Buy Now, Pay Later With noon EMI
        </h6>
        <p className="text-xs text-gray-500">
          Available when you spend AED 500 with select cards from the banks
          below.{" "}
          <a className="text-blue-500 underline font-bold">Find out more</a>
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Image
            src="/images/company-1.png"
            alt=""
            width={100}
            height={20}
            className="object-contain"
          />
          <Image
            src="/images/company-2.svg"
            alt=""
            width={100}
            height={20}
            className="object-contain"
          />
          <Image
            src="/images/company-3.svg"
            alt=""
            width={100}
            height={20}
            className="object-contain"
          />
          <Image
            src="/images/company-4.svg"
            alt=""
            width={100}
            height={20}
            className="object-contain"
          />
          <Image
            src="/images/company-5.svg"
            alt=""
            width={100}
            height={20}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
