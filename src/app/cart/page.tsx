"use client";
import { useCartStore } from "@/Utils/storeCart";
import CartSummary from "./CartSummary";
import NoItem from "./NoItem";
import SelectedItem from "./SelectedItem";
import Navbar from "@/components/Navbar";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <>
      <Navbar />
    <section className="flex items-start justify-between text-neutral-dark">
      {cart.length ? (
      <>
          <SelectedItem />
        <CartSummary />
      </>
      ) : (
      <NoItem />
      )}
    </section>
    </>
  );
};

export default Cart;
