"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="2xl:max-w-[88rem] mx-auto">
      <Swiper
        className="relative group"
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
      >
        <button className="carousel-prev group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 left-4 z-[99999] rounded-full cursor-pointer transition">
          <ChevronLeft />
        </button>
        <SwiperSlide>
          <div className="relative w-full h-32 md:h-48">
            <Image src="/images/banner-1.png" alt="" fill />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-32 md:h-48">
            <Image src="/images/banner-2.png" alt="" fill />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-32 md:h-48">
            <Image src="/images/banner-3.png" alt="" fill />
          </div>
        </SwiperSlide>
        <button className="carousel-next group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 right-4 z-[99999] rounded-full cursor-pointer transition">
          <ChevronRight />
        </button>
      </Swiper>
    </div>
  );
};

export const BannerFull = ({ banners }) => {
  return (
    <div className="2xl:max-w-[88rem] mx-auto">
      <div className="relative w-full h-16 md:h-20">
        <Image src="/images/banner-4.png" alt="" fill />
      </div>
      <div className="flex">
        <div className="w-full">
          <Swiper
            className="relative group"
            modules={[Navigation]}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".carousel-next",
              prevEl: ".carousel-prev",
            }}
          >
            <button className="carousel-prev group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 left-4 z-[99999] rounded-full cursor-pointer transition">
              <ChevronLeft />
            </button>
            {banners?.map((banner, index) => (
              <SwiperSlide key={banner.image}>
                <div className="relative w-full h-32 md:h-40">
                  <Image src={banner.image} alt="" fill />
                </div>
              </SwiperSlide>
            ))}
            <button className="carousel-next group-hover:opacity-100 opacity-0 bg-white p-2 shadow-lg absolute top-1/3 right-4 z-[99999] rounded-full cursor-pointer transition">
              <ChevronRight />
            </button>
          </Swiper>
        </div>
        {/* <div className="w-[30%]">
          <div className="relative w-full h-32 md:h-40">
            <Image src="/images/banner-5.png" alt="" fill />
          </div>
        </div> */}
      </div>
    </div>
  );
};
