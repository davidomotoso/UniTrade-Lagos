import { create } from "zustand";

interface CartState {
  cart: object[];
  addToCart: (product: object) => void;
  removeFromCart: (item: object) => void;
  alert: object;
  setAlert: (alert: { message: string; type: boolean; color: string }) => void;
}
export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (item) =>
    set((state) => ({ cart: state.cart.filter((i) => i !== item) })),
  alert: {},
  setAlert: (alert) => set(() => ({ alert })),
}));
