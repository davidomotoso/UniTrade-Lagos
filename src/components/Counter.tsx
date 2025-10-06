import { useCartStore } from "@/Utils/storeCart";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Counter = ({ item }: { item: { quantity: number } }) => {
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  return (
    <form onSubmit={(e)=>e.preventDefault()} method="post" className="flex items-center gap-x-3">
      <button
        title="minus"
        className="font-bold text-lg rounded-md p-2 text-white bg-primary/85 cursor-pointer hover:bg-primary disabled:bg-gray-500"
        type="submit"
      >
        <FaMinus onClick={decrement} />
      </button>
      <strong>{item.quantity}</strong>
      <button
        title="plus"
        className="font-bold text-lg rounded-md p-2 text-white bg-primary/85 cursor-pointer hover:bg-primary"
        type="submit"
      >
        <FaPlus onClick={increment} />
      </button>
    </form>
  );
};

export default Counter;
