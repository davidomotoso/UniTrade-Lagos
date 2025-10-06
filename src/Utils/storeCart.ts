import { create } from "zustand";

interface CartState {
  cart: object[];
  addToCart: (product: object) => void;
  removeFromCart: (item: object) => void;
  alert: object;
  setAlert: (alert: { message: string; type: boolean; color: string }) => void;
  count: number;
  increment: () => void;
  decrement: () => void;
}
export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (item) =>
    set((state) => ({ cart: state.cart.filter((i) => i !== item) })),
  alert: {},
  setAlert: (alert) => set(() => ({ alert })),
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
