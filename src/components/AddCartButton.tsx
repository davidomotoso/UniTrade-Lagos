"use client";
import { FaCartPlus } from "react-icons/fa6";
import { useCartStore } from "@/Utils/storeCart";
import useFunctions from "@/Utils/useFunctions";

interface AddCartButtonProps {
  product: {};
  icon: boolean;
  addClass: string;
}

const AddCartButton = ({ product, icon,addClass }: AddCartButtonProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const {alertMessage}=useFunctions();
  return (
    <button
      type="submit"
      onClick={() => {
        addToCart(product);
        alertMessage("Item added to cart","bg-accent");
      }}
      className={`bg-primary text-white ${addClass} rounded-md cursor-pointer flex items-center w-full mt-4 font-medium hover:bg-primary/90 duration-200`}
    >
      {icon && <FaCartPlus className="text-xl" />}
      <span className="mx-auto">Add to cart</span>
    </button>
  );
};

export default AddCartButton;
