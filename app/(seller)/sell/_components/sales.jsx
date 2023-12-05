import { Truck } from "lucide-react";
import React from "react";

const Sales = () => {
  return (
    <div className="container mx-auto px-8 py-4 text-center space-y-4">
      <h3 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Increase your sales
      </h3>
      <p className="text-gray-600">
        There are many ways retailers can amplify their selling success with
        noon...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mt-8">
        <div className="border border-gray-300 rounded p-8 space-y-2">
          <div className="flex justify-center">
            <Truck size={34} />
          </div>
          <h5 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl">
            Shipping
          </h5>
          <p className="text-gray-600">
            {`'noon Express' items are fulfilled by noon (FBN), meaning customers
            will receive the item super fast. An end-to-end solution and our
            most popular model.`}
          </p>
          <button className="px-8 py-3 bg-yellow-400 text-black hover:text-white hover:bg-black transition duration-200 font-semibold rounded-lg">
            Learn more
          </button>
        </div>
        <div className="border border-gray-300 rounded p-8 space-y-2">
          <div className="flex justify-center">
            <Truck size={34} />
          </div>
          <h5 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl">
            Shipping
          </h5>
          <p className="text-gray-600">
            {`'noon Express' items are fulfilled by noon (FBN), meaning customers
            will receive the item super fast. An end-to-end solution and our
            most popular model.`}
          </p>
          <button className="px-8 py-3 bg-yellow-400 text-black hover:text-white hover:bg-black transition duration-200 font-semibold rounded-lg">
            Learn more
          </button>
        </div>
        <div className="border border-gray-300 rounded p-8 space-y-2">
          <div className="flex justify-center">
            <Truck size={34} />
          </div>
          <h5 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl">
            Shipping
          </h5>
          <p className="text-gray-600">
            {`'noon Express' items are fulfilled by noon (FBN), meaning customers
            will receive the item super fast. An end-to-end solution and our
            most popular model.`}
          </p>
          <button className="px-8 py-3 bg-yellow-400 text-black hover:text-white hover:bg-black transition duration-200 font-semibold rounded-lg">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
