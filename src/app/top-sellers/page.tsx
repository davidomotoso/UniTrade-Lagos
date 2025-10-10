import { introProducts } from "@/components/Exports";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
const TopSellers = () => {
  return (
    <>
      <Navbar />
    <section className="grid grid-cols-6 bg-white gap-4 p-5 pb-3 shadow-md rounded-b-md">
      {introProducts.map((product) => (
        <Link
          href={`/top-sellers/${product.id}`}
          className="space-y-1 text-neutral-dark w-46 hover:scale-[1.02] hover:shadow-md pb-2 rounded-md duration-150"
          key={product.id}
        >
          <Image
            className="rounded-md h-46 object-cover object-top"
            src={product.image}
            alt={product.name}
            placeholder="blur"
          />
          <div className=" p-2">
            <h2 className="text-ellipsis whitespace-nowrap overflow-clip">
              {product.name}
            </h2>
            <p className="font-medium">{product.price}</p>
          </div>
        </Link>
      ))}
      {introProducts.map((product) => (
        <Link
          href={`/top-sellers/${product.id}`}
          className="space-y-1 text-neutral-dark w-46 hover:scale-[1.02] hover:shadow-md pb-2 rounded-md duration-150"
          key={product.id}
        >
          <Image
            className="rounded-md h-46 object-cover object-top"
            src={product.image}
            alt={product.name}
            placeholder="blur"
          />
          <div className=" p-2">
            <h2 className="text-ellipsis whitespace-nowrap overflow-clip">
              {product.name}
            </h2>
            <p className="font-medium">{product.price}</p>
          </div>
        </Link>
      ))}
    </section>
    </>
  );
};

export default TopSellers;
