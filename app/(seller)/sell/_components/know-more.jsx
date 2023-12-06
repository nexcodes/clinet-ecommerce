import { Rocket } from "lucide-react";
import React from "react";

const KnowMore = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-5 py-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center items-center">
            <Rocket size={50}/>
          </div>
          <h3 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            want to know more?
          </h3>
          <p className="text-gray-600">
            Register your interest in selling at noon by clicking the following
            buttons:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-3 bg-yellow-400 text-black hover:text-white hover:bg-black transition duration-200 font-semibold rounded-lg">
              KSA
            </button>
            <button className="px-8 py-3 bg-yellow-400 text-black hover:text-white hover:bg-black transition duration-200 font-semibold rounded-lg">
              Egypt
            </button>
            <button className="px-8 py-3 bg-yellow-400 text-black hover:text-white hover:bg-black transition duration-200 font-semibold rounded-lg">
              UAE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
