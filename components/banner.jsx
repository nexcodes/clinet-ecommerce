"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";

const Banner = () => {
  return (
    <Swiper
      className="relative group"
      modules={[Navigation]}
      slidesPerView={1}
      navigation={{
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      }}
    >
      <button className="carousel-prev group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 left-4 z-[99999] rounded-full cursor-pointer transition">
        <ChevronLeft />
      </button>
      <SwiperSlide>
        <div className="relative w-full h-32 md:h-64">
          <Image src="/banner-1.png" alt="" fill />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-32 md:h-64">
          <Image src="/banner-2.png" alt="" fill />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-32 md:h-64">
          <Image src="/banner-3.png" alt="" fill />
        </div>
      </SwiperSlide>
      <button className="carousel-next group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 right-4 z-[99999] rounded-full cursor-pointer transition">
        <ChevronRight />
      </button>
    </Swiper>
  );
};

export default Banner;
