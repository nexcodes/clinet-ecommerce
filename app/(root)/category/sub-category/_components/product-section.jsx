"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./product-card";

import "swiper/css/navigation";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductSection = () => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="container px-5 py-4 mx-auto">
      <div className="flex items-center justify-between">
        <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
          Iphone 14 pro
        </h3>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-50 font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 me-2 mb-2 "
        >
          View all
        </button>
      </div>

      <Swiper
        className="relative group"
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={1}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
        breakpoints={{
          535: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <button className="carousel-prev group-hover:opacity-100  opacity-0 bg-white p-2 shadow-lg absolute top-1/2 left-4 z-[99999] rounded-full cursor-pointer transition">
          <ChevronLeft />
        </button>
        {arr.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}
        <button className="carousel-next group-hover:opacity-100  opacity-0 bg-white p-2 shadow-lg absolute top-1/2 right-4 z-[99999] rounded-full cursor-pointer transition">
          <ChevronRight />
        </button>
      </Swiper>
    </div>
  );
};

export default ProductSection;
