import Image from "next/image";
import React from "react";

const MegaDealsCard = () => {
  return (
    <div className="flex items-center">
      <div className="rounded-l-lg bg-gray-100 w-[70%] h-48">
        <div className="relative h-4">
          <p className="absolute top-0 left-0 px-3 py-1 text-sm font-semibold text-white bg-black rounded-lg">
            Apple deals
          </p>
        </div>
        <div className="p-4 flex items-center h-full">
          <div>
            <p className="text-lg text-gray-600">
              Apple Iphone 14 pro max 512 gb Deep purple color
            </p>
            <span className="text-black font-bold text-lg md:text-xl line-through">
              $1599
            </span>{" "}
            <span className="text-black font-bold text-xl md:text-2xl">
              $1299
            </span>
          </div>
        </div>
      </div>
      <div className="relative w-[30%] h-48 bg-white rounded-r-lg">
        <Image src="/images/product-1.png" alt="" fill />
      </div>
    </div>
  );
};

export default MegaDealsCard;
