"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";

const ChristmasSection = () => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  return (
    <div className="2xl:max-w-[88rem] px-5 py-4 mx-auto">
      <div className="relative w-full h-16">
        <Image src="/images/christmas-title.png" alt="" fill />
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
            <Image
              className="rounded-sm cursor-pointer"
              src="/images/christmas.png"
              width={200}
              height={200}
              alt=""
            />
          </SwiperSlide>
        ))}
        <button className="carousel-next group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 right-4 z-[99999] rounded-full cursor-pointer transition">
          <ChevronRight />
        </button>
      </Swiper>
    </div>
  );
};

export default ChristmasSection;
