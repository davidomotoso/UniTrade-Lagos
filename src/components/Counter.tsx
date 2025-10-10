import { useCartStore } from "@/Utils/storeCart";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Counter = ({ item }: { item: { id: number; quantity: number } }) => {
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  console.log(item.quantity);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      method="post"
      className="flex items-center gap-x-3"
    >
      <button
        title="minus"
        className="font-bold text-lg rounded-md p-2 text-white bg-primary/85 cursor-pointer hover:bg-primary disabled:bg-gray-500"
        type="submit"
        onClick={() => decrementQuantity(item.id)}
      >
        <FaMinus />
      </button>
      <strong>{item.quantity}</strong>
      <button
        title="plus"
        className="font-bold text-lg rounded-md p-2 text-white bg-primary/85 cursor-pointer hover:bg-primary"
        type="submit"
        onClick={() => incrementQuantity(item.id)}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default Counter;
