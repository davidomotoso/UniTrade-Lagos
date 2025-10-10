import useFunctions from "@/Utils/useFunctions";
import Link from "next/link";

const CartSummary = () => {
  const { calTotalPrice } = useFunctions();
  return (
    <section className="bg-white rounded-sm w-3/12 sticky top-2">
      <h5 className="uppercase p-2 border-b border-gray-200 font-medium">
        Cart Summary
      </h5>
      <div className="flex items-center justify-between p-2 border-b border-gray-200 ">
        <h6 className="text-sm font-medium">Subtotal</h6>
        <h3 className="text-xl font-semibold">{calTotalPrice()}</h3>
      </div>
      <div className="p-2">
        <Link href={"/checkout"}>
          <button
            className="bg-primary/85 text-center font-medium w-full text-white text-sm p-3 cursor-pointer duration-150 hover:bg-primary rounded-sm"
            title="checkout"
            type="submit"
          >
            Checkout ({calTotalPrice()})
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CartSummary;
