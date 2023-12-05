import { TrendingUp } from "lucide-react";
import React from "react";

const Why = () => {
  return (
    <div className="bg-yellow-400 py-8">
      <div className="container mx-auto px-5 py-6 ">
        <h3 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl text-center">
          Why noon?
        </h3>
        <div className="flex  flex-wrap items-center justify-center gap-4 mt-4">
          <div className="space-y-4 max-w-md">
            <TrendingUp size={24} className="text-gray-900" />
            <h5 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl">
              grow your business
            </h5>
            <p className="text-gray-700 text-sm">
              {`Use noon's custom-built tools and seller support team to expand
              your business online, safeguarding for future success.`}
            </p>
          </div>
          <div className="space-y-4 max-w-md">
            <TrendingUp size={24} className="text-gray-900" />
            <h5 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl">
              grow your business
            </h5>
            <p className="text-gray-700 text-sm">
              {`Use noon's custom-built tools and seller support team to expand
              your business online, safeguarding for future success.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
