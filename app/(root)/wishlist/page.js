import { Lock, MoreHorizontal, Share2 } from "lucide-react";
import ProductCard from "./_components/product-card";

export default function Wishlist() {
  return (
    <div className="px-4 sm:px-6 py-4 sm:py-6 bg-gray-50">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl text-gray-800 font-bold">{"Wishlist"}</h3>
        <button className="bg-blue-500 rounded text-white font-bold px-4 py-2">
          Create a new wishlist
        </button>
      </div>
      <div className="flex flex-col lg:flex-row border-t border-gray-300 my-4">
        <div className="lg:max-w-sm w-full">
          <div className="bg-gray-100 p-4">
            <div className="flex items-center gap-2">
              <h6 className="text-xl text-gray-800 font-bold">{"USERNAME"}</h6>
              <button className="bg-blue-500 rounded-full text-white text-xs font-medium px-2 py-1">
                Default
              </button>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base text-gray-800">{"1 item"}</p>
              <Lock size={20} />
            </div>
          </div>
        </div>
        <div className="border-l border-gray-300 p-4 w-full">
          <div className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center gap-2">
              <h6 className="text-xl text-gray-800 font-bold">{"USERNAME"}</h6>
              <button className="bg-blue-500 rounded-full text-white text-xs font-medium px-2 py-1">
                Default
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-transparent border border-gray-400 rounded-full text-gray-600 text-sm px-4 py-2 flex items-center gap-4">
                <Share2 size={20} />
                Share
              </button>
              <button className="bg-transparent border border-gray-400 rounded-full text-gray-600 text-sm px-4 py-2 flex items-center gap-4">
                <MoreHorizontal size={20} />
                More
              </button>
            </div>
          </div>
          <div className="py-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
