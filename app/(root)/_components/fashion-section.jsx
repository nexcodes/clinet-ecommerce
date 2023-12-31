"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FashionCard from "./fashion-card";

const FashionSection = () => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  return (
    <div className="bg-gray-50">
      <div className="2xl:max-w-[88rem] px-5 py-4 mx-auto">
        <div className="flex items-center justify-between">

        <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
          {"Women's fashion"}
        </h3>
        <button className="border border-gray-900 text-gray-900 font-bold text-lg rounded-[1px] px-2 py-1">
          View All
        </button>
        </div>
        <Swiper
          className="relative group"
          modules={[Navigation]}
          spaceBetween={6}
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
              slidesPerView: 6,
            },
          }}
        >
          <button className="carousel-prev group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 left-4 z-[99999] rounded-full cursor-pointer transition">
            <ChevronLeft />
          </button>
          {arr.map((item, index) => (
            <SwiperSlide key={index}>
              <FashionCard />
            </SwiperSlide>
          ))}
          <button className="carousel-next group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 right-4 z-[99999] rounded-full cursor-pointer transition">
            <ChevronRight />
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default FashionSection;
