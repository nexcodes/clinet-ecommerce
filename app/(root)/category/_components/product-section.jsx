"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./product-card";

import "swiper/css/navigation";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductSection = ({ products }) => {
  return (
    <div className="container px-5 py-4 mx-auto">
      <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl text-center">
        Best Seller
      </h3>

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
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={item} />
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
