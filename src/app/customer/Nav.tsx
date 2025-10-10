import Link from "next/link";
import { BsHouseDoor, BsPerson } from "react-icons/bs";

const Nav = () => {
  return (
    <aside className="bg-white w-3/12 rounded-sm overflow-clip">
      <ul>
        <li>
          <Link
            className="flex items-center gap-x-4 p-3 pl-5 duration-100 hover:font-medium w-full hover:bg-gray-300/85"
            href={""}
          >
            <BsPerson className="text-xl" /> My account
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-4 p-3 pl-5 duration-100 hover:font-medium w-full hover:bg-gray-300/85"
            href={""}
          >
            <BsHouseDoor className="text-xl" />
            Orders
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Nav;
