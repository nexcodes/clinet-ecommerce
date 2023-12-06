"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const FlagshipSection = () => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="container px-5 py-4 mx-auto">
      <div className="flex items-center justify-between">
        <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
          Flagship models
        </h3>
      </div>

      <Swiper
        className="relative group"
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={2}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
        breakpoints={{
          535: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        <button className="carousel-prev group-hover:opacity-100  opacity-0 bg-white p-2 shadow-lg absolute top-1/2 left-4 z-[99999] rounded-full cursor-pointer transition">
          <ChevronLeft />
        </button>
        {arr.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              className="rounded-sm"
              src="/images/iphone-15.png"
              width={200}
              height={200}
              alt=""
            />
          </SwiperSlide>
        ))}
        <button className="carousel-next group-hover:opacity-100  opacity-0 bg-white p-2 shadow-lg absolute top-1/2 right-4 z-[99999] rounded-full cursor-pointer transition">
          <ChevronRight />
        </button>
      </Swiper>
    </div>
  );
};

export default FlagshipSection;
