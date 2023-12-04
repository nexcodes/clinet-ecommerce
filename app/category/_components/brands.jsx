"use client";

import Image from "next/image";

const BrandsSection = () => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  return (
    <div className="p-4">
      <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl text-center">
        Shop top brands
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 place-items-center">
        {arr.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-200 rounded-lg p-4 flex items-center justify-center"
          >
            <Image src="/images/hp.png" alt="" width={160} height={160} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
