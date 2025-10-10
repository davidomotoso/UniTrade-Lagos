import Navbar from "@/components/Navbar";
import CheckoutDetails from "./CheckoutDetails";
import OrderSummary from "./OrderSummary";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start justify-between">
        <CheckoutDetails />
        <OrderSummary/>
      </section>
    </>
  );
};

export default page;
