import Image from "next/image";
import React from "react";

const SellerAccount = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative min-h-screen w-full">
          <Image src="/images/seller-account.webp" alt="" fill />
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Set up a seller account now
          </h3>
          <p className="text-gray-600">
            First you need to create a noon customer account here, then you will
            need to set-up your seller store here.
          </p>
          <p className="text-gray-600">
            Then simply upload the following required documents:
          </p>
          <ul className="list-disc ml-6 space-y-4">
            <li className="text-gray-600">
              Trading license or commercial registration
            </li>
            <li className="text-gray-600">
              Trading license or commercial registration
            </li>
            <li className="text-gray-600">
              Trading license or commercial registration
            </li>
            <li className="text-gray-600">
              Trading license or commercial registration
            </li>
            <li className="text-gray-600">
              Trading license or commercial registration
            </li>
          </ul>
          <button className="px-8 py-3 bg-yellow-400 text-black hover:text-white hover:bg-black transition duration-200 font-semibold rounded-lg">
            Set up account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerAccount;
