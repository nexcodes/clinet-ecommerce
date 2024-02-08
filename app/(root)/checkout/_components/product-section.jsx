"use client";

import { useCartStore } from "@/zustand/cart";
import ProductCard from "./productCard";

const ProductSection = () => {
  const { cart } = useCartStore();

  return (
    <>
      {cart.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </>
  );
};

export default ProductSection;
