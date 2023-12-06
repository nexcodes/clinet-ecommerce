"use client";

import clsx from "clsx";

const Cards = () => {
  const arr = ["Mobiles", "Tablets", "Accessories"];

  return (
    <div className="p-4">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {arr.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "bg-gray-100 from- rounded-lg px-8 py-2 flex items-center justify-center w-96 h-16",
              index === 0 && "bg-pink-blue"
            )}
          >
            <p className="text-gra9-400 text-3xl font-extrabold leading-none tracking-tight md:text-4xl">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
