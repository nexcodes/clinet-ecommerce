"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./product-card";

import "swiper/css/navigation";
import "swiper/css";
import MegaDealsCard from "./mega-deals-card";

const MegaDealsSection = () => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="bg-yellow-100">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
            Mega deals of the day
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <MegaDealsCard />
          <MegaDealsCard />
          <MegaDealsCard />
          <MegaDealsCard />
          <MegaDealsCard />
          <MegaDealsCard />
        </div>
      </div>
    </div>
  );
};

export default MegaDealsSection;
