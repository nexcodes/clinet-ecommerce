"use client";

const ShopFromPriceSection = () => {
  const arr = [
    "Under 50",
    "100 - 299",
    "300 - 599",
    "600 - 999",
    "100 +",
  ];

  return (
    <div className="p-4">
      <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
        Shop By Price
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {arr.map((item, index) => (
          <div
            key={index}
            className="bg-pink-blue rounded-full px-8 py-6 flex items-center justify-center w-52 h-52"
          >
            <p className="text-black text-xl font-extrabold leading-none tracking-tight md:text-2xl">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopFromPriceSection;
