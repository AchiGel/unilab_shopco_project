import { create } from "zustand";
import { ProductTypes } from "../components/newArrivals/NewArrivals";

type CartProduct = ProductTypes & {
  quantity: number;
  sizeChosen: string;
  colorChosen: string;
};

type CartStore = {
  cartItems: CartProduct[];
  setCartItems: (value: CartProduct) => void;
  resetCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  setCartItems: (value) =>
    set((state) => ({
      cartItems: [...state.cartItems, value],
    })),
  resetCart: () => set({ cartItems: [] }),
}));
