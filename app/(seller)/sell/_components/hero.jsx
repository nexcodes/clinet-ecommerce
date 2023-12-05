import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-full min-w-screen min-h-screen">
      <Image src="/images/sell.webp" alt="" fill />
      <div className="absolute inset-0">
        <div className="p-8 container pl-40 pt-32">
          <div className="max-w-sm space-y-4">
            <select
              className="bg-gray-50 text-gray-900 text-sm p-2.5 outline-none w-40"
            >
              <option defaultChecked value="en">
                English
              </option>
              <option value="ar">Arabic</option>
            </select>
            <h3 className="text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              Start selling on noon
            </h3>
            <p className="text-gray-50">
              noon was created to help businesses, no matter their size - grow.
              Being from the region, noon is especially passionate about helping
              local businesses thrive, we look forward to helping you take your
              venture to the next level.
            </p>
            <button className="px-8 py-3 bg-yellow-400 text-black hover:text-white hover:bg-black transition duration-200 font-semibold rounded-lg">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
