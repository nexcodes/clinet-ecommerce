import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create()(
  persist(
    (set, get) => ({
      cart: [],
      addItemToCart: (props) => {
        const cart = get().cart;

        const Product = cart.find((item) => item._id === props._id);

        if (Product) return { message: "Product Already Exists" };

        const item = [...cart, props];
        set({ cart: item });
        return { message: "Product added to cart" };
      },
      removeItemFromCart: (id) => {
        const cart = get().cart;

        const Product = cart.filter((item) => item._id !== id);

        set({ cart: Product });
        return { message: "Product removed from cart" };
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
