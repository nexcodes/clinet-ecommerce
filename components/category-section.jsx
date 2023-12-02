"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryCard from "./category-card";

const CategorySection = () => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  return (
    <Swiper
      className="relative group"
      modules={[Navigation]}
      spaceBetween={4}
      slidesPerView={2}
      navigation={{
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      }}
      breakpoints={{
        535: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 8
        },
      }}
    >
      <button className="carousel-prev group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 left-4 z-[99999] rounded-full cursor-pointer transition">
        <ChevronLeft />
      </button>
      {arr.map((item, index) => (
        <SwiperSlide key={index}>
          <CategoryCard />
        </SwiperSlide>
      ))}
      <button className="carousel-next group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 right-4 z-[99999] rounded-full cursor-pointer transition">
        <ChevronRight />
      </button>
    </Swiper>
  );
};

export default CategorySection;
