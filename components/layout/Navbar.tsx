"use client";

import { Search } from "@mui/icons-material";
import Logo from "../Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center gap-12 w-[95%] mx-auto ">
      <Logo />

      <ul className="flex flex-grow gap-5 font-medium text-lg">
        <li>Recipes</li>
        <li>Ingredients</li>
        <li>Cuisines</li>
        <li>Occasions</li>
      </ul>

      <div className="flex gap-5">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-1.5  border border-gray-300 outline-none text-lg"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        <button className=" bg-primary text-white px-4 font-semibold py-3 ">
          Create
        </button>
        <button className=" bg-gray-400 px-4 font-semibold py-3 ">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
