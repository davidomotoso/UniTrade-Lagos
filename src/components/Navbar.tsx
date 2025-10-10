"use client";
import Image from "next/image";
import logo from "../../public/LAGMIA.png";
import { FaUser } from "react-icons/fa";
import { FaCartShopping, FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import { useCartStore } from "@/Utils/storeCart";
const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <header className="bg-white px-6 py-2 rounded-md my-4 flex justify-between items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="logo for unitrade lagos"
          width={150}
          priority={true}
        />
      </Link>
      <input
        type="search"
        name="search for products"
        className="w-80 border rounded-sm border-gray-400 py-2 px-4 text-lg"
        placeholder="Search for Products"
      />
      <nav>
        <ul className="flex gap-8 text-gray-600 font-medium text-lg">
          <Link href="">
            <li className="flex items-center gap-x-2 hover:text-secondary duration-200">
              <FaUser />
              Account
              <FaChevronDown />
            </li>
          </Link>
          <Link href="/cart">
            <li className="flex items-center gap-x-2 hover:text-secondary duration-200 relative">
              <FaCartShopping />
              Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-5 bg-primary text-white h-5 w-5 text-center rounded-full text-sm">
                  {cart.length}
                </span>
              )}
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
