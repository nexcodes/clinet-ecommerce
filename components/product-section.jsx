"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./product-card";

import "swiper/css/navigation";
import "swiper/css";

const ProductSection = () => {
  const arr = ["1", "2", "3", "4", "5" , "6" , "7" , "8" , "9"];

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={8}
      slidesPerView={6}
      navigation
    >
      {arr.map((item, index) => (
        <SwiperSlide key={index}>
          <ProductCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSection;
