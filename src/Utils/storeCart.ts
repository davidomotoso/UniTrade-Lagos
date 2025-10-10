import { create } from "zustand";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: StaticImageData;
  quantity: number;
}

interface Alert {
  message: string;
  type: boolean;
  color: string;
}

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (item: Product) => void;
  alert: Alert | object;
  setAlert: (alert: Alert | object) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}
export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product: Product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (item: Product) =>
    set((state) => ({ cart: state.cart.filter((i) => i !== item) })),
  alert: {},
  setAlert: (alert) => set(() => ({ alert })),
  incrementQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),
  decrementQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ).filter((item) => item.quantity > 0),
    })),
}));
