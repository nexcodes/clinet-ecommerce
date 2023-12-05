import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const DealsGrid = () => {
  return (
    <div className="bg-gray-50">
      <div className="container px-5 py-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="grid grid-cols-2 gap-4 bg-white p-4">
            <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl col-span-2">
              More reasons to shop
            </h3>
            <Image src="/images/top-rated.png" width={200} height={200} alt="" />
            <Image src="/images/top-rated.png" width={200} height={200} alt="" />
            <Image src="/images/top-rated.png" width={200} height={200} alt="" />
            <Image src="/images/top-rated.png" width={200} height={200} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-4 bg-white p-4">
            <div className="col-span-2 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl">
                  Mega deals
                </h3>
              </div>
              <div className="bg-gray-200 rounded-full cursor-pointer px-3 py-2 space-x-0.5 flex items-center">
                <Clock size={16} />
                <span className="text-gray-800 font-bold text-sm">
                  11h : 11m
                </span>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  All deals
                </button>
              </div>
            </div>
            <Image src="/images/top-rated.png" width={200} height={200} alt="" />
            <Image src="/images/top-rated.png" width={200} height={200} alt="" />
            <Image src="/images/top-rated.png" width={200} height={200} alt="" />
            <Image src="/images/top-rated.png" width={200} height={200} alt="" />
          </div>
          <div className="grid grid-cols-1 bg-white p-4">
            <h3 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl mb-2">
              In focus
            </h3>
            <div className="space-y-4">

            <div className="relative w-full min-h-[10rem]">
              <Image src="/images/promotion.png" alt="" fill />
            </div>
            <div className="relative w-full min-h-[10rem]">
              <Image src="/images/promotion.png" alt="" fill />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsGrid;
