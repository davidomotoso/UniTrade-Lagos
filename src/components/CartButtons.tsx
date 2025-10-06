"use client";
import AddCartButton from "./AddCartButton";
import { useCartStore } from "@/Utils/storeCart";
import Counter from "./Counter";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: StaticImageData;
}

const CartButtons = ({ product }: { product: Product }) => {
  const cart = useCartStore((state) => state.cart) as { id: number }[];
  const count = useCartStore((state) => state.count);
  const isInCart = cart.some((item) => item.id === product.id);
  return (
    <>
      {isInCart ? (
        <Counter item={{ quantity: count }} />
      ) : (
        <AddCartButton
          product={{
            name: product.name,
            price: product.price,
            image: product.image,
            id: product.id,
            quantity: count,
          }}
          icon={true}
          addClass={"p-3"}
        />
      )}
    </>
  );
};

export default CartButtons;
