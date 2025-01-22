/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type TUSerAuth = {
  cart: any;
  setCart: (cart: any) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useBasket = create<TUSerAuth>()((set) => ({
  cart: [],
  setCart: (cart) => set({ cart }),
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
