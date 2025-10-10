import DeliveryReturns from "@/components/DeliveryReturns";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

const Page = ({ params }: { params: { id: number } }) => {
  return (
    <>
      <Navbar />
    <section className="flex justify-between">
      <Product param={params} />
      <DeliveryReturns params={params}/>
    </section>
    </>
  );
};

export default Page;
