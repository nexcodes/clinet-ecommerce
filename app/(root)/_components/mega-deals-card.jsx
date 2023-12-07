import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

const MegaDealsCard = () => {
  return (
    <div>
      <div className="bg-gray-100 rounded-t-lg relative">
        <div className="absolute top-0 right-0 bg-yellow-400 px-4 rounded-b-lg">
          <p className="text-red-600 text-xs md:text-sm">Smartphone deal</p>
        </div>

        <div className="absolute bottom-0 right-0 px-4">
          <div className="bg-white rounded-full cursor-pointer p-2">
            <ShoppingCart size={20} />
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <Image src="/images/product-1.png" width={80} height={80} alt="" />
        </div>
      </div>
      <div className="bg-gray-200 rounded-b-lg p-2">
        <h6 className="text-gray-600 text-sm leading-5">
          Apple iPhone 14 Pro Max 512 gb purple color
        </h6>
        <span className="text-black font-bold text-md md:text-lg line-through">
          $1599
        </span>{" "}
        <span className="text-black font-bold text-lg md:text-xl">$1299</span>
      </div>
    </div>
  );
};

export default MegaDealsCard;
