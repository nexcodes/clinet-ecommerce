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
    <div>
      <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
        Recommended for you
      </h3>

      <Swiper
        className="relative"
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={6}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
      >
        <button className="carousel-prev bg-white p-2 shadow-lg absolute top-1/2 left-4 z-[99999] rounded-full cursor-pointer">
          <ChevronLeft />
        </button>
        {arr.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}
        <button className="carousel-next bg-white p-2 shadow-lg absolute top-1/2 right-4 z-[99999] rounded-full cursor-pointer">
          <ChevronRight />
        </button>
      </Swiper>
    </div>
  );
};

export default ProductSection;
