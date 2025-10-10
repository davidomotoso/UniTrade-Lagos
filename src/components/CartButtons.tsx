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
  quantity: number;
}

const CartButtons = ({ product }: { product: Product }) => {
  const cart = useCartStore((state) => state.cart) as {
    id: number;
    quantity: number;
  }[];
  const getQuantity = cart.find((item) => item.id === product.id)?.quantity ?? 0;
  const isInCart = getQuantity > 0;
  return (
    <>
      {isInCart ? (
        <Counter item={{ id: product.id, quantity: getQuantity }} />
      ) : (
        <AddCartButton
          product={{
            name: product.name,
            price: product.price,
            image: product.image,
            id: product.id,
            quantity: product.quantity,
          }}
          icon={true}
          addClass={"p-3"}
        />
      )}
    </>
  );
};

export default CartButtons;
