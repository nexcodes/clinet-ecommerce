"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const SubNav = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <nav
      onMouseLeave={() => setIsClosed(true)}
      className="bg-gray-50 dark:bg-gray-700 relative hidden lg:block"
    >
      <div className="px-4 py-3 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 space-x-8 text-sm overflow-x-scroll no-scrollbar">
            <li
              onMouseEnter={() => setIsClosed(false)}
              className="text-blue-500 font-bold border-r border-blue-500 flex px-2 space-x-2 min-w-fit"
            >
              <span>All Categories</span>
              <ChevronDown />
            </li>
            <li onMouseEnter={() => setIsClosed(false)}>Electronics</li>
            <li onMouseEnter={() => setIsClosed(false)}>Men</li>
            <li onMouseEnter={() => setIsClosed(false)}>Women</li>
            <li onMouseEnter={() => setIsClosed(false)}>Home</li>
          </ul>
        </div>
      </div>
      <div
        hidden={isClosed}
        className="absolute top-10 z-50 mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y w-full"
      >
        <div className="flex space-x-16 px-4 py-5 mx-auto text-gray-900 md:px-6">
          <div>
            <h3 className="mb-2 text-md font-extrabold leading-none tracking-tight text-gray-900 md:text-lg">
              Categories
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500">Mobiles & Accessories</li>
              <li className="text-sm text-gray-500">Mobiles & Accessories</li>
              <li className="text-sm text-gray-500">Mobiles & Accessories</li>
              <li className="text-sm text-gray-500">Mobiles & Accessories</li>
              <li className="text-sm text-gray-500">Mobiles & Accessories</li>
              <li className="text-sm text-gray-500">Mobiles & Accessories</li>
              <li className="text-sm text-gray-500">Mobiles & Accessories</li>
              <li className="text-sm text-gray-500">Mobiles & Accessories</li>
              <li className="text-sm text-gray-500">Mobiles & Accessories</li>
              <li className="text-sm text-gray-500">Mobiles & Accessories</li>
            </ul>
          </div>
          <div className="cols-span-2">
            <h3 className="mb-2 text-md font-extrabold leading-none tracking-tight text-gray-900 md:text-lg">
              Top Brands
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/hp.png" alt="" width={80} height={80} />
              </div>
              <div className="border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/hp.png" alt="" width={80} height={80} />
              </div>
              <div className="border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/hp.png" alt="" width={80} height={80} />
              </div>
              <div className="border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/hp.png" alt="" width={80} height={80} />
              </div>
              <div className="border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/hp.png" alt="" width={80} height={80} />
              </div>
              <div className="border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/hp.png" alt="" width={80} height={80} />
              </div>
              <div className="border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/hp.png" alt="" width={80} height={80} />
              </div>
              <div className="border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/hp.png" alt="" width={80} height={80} />
              </div>
              <div className="border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/hp.png" alt="" width={80} height={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
