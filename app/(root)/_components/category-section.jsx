"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryCard from "./category-card";

const CategorySection = ({categories}) => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  return (
    <div className="2xl:max-w-[88rem] px-5 py-4 mx-auto">
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
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        <button className="carousel-prev group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 left-4 z-[99999] rounded-full cursor-pointer transition">
          <ChevronLeft />
        </button>
        {categories.map((item, index) => (
          <SwiperSlide key={item._id}>
            <CategoryCard category={item}/>
          </SwiperSlide>
        ))}
        <button className="carousel-next group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 right-4 z-[99999] rounded-full cursor-pointer transition">
          <ChevronRight />
        </button>
      </Swiper>
    </div>
  );
};

export default CategorySection;
