"use client";

const ShopFromSection = () => {
  const arr = ["Under 50", "50-199", "200-499", "500-999", "1000+"];

  return (
    <div className="p-4">
      <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl text-center">
        Shop top brands
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {arr.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg px-8 py-6 flex items-center justify-center"
          >
            <p className="text-yellow-400 text-3xl font-extrabold leading-none tracking-tight md:text-4xl">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopFromSection;
