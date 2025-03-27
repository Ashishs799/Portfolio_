import React from "react";
import { GoHome } from "react-icons/go";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiGrid32 } from "react-icons/ci";
import { MdOutlineGamepad } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";

export const Side_Navbar = () => {
  return (
    <div className="side_nav">
      <div className="flex flex-col justify-between items-center [&>*]:py-2 [&>*]:px-3 bg-black  w-fit rounded-3xl py-4 text-xl [&>*]:hover:text-white [&>*]:transition [&>*]:duration-300 [&>*]:delay-150 [&>*]:ease-in cursor-pointer text-pink-700 hidden">
        <span className="">
          <GoHome />
        </span>
        <span>
          <CiUser />
        </span>
        <span>
          <CiGrid32 />
        </span>
        <span>
          <MdOutlineGamepad />
        </span>
        <span>
          <RiContactsBook3Line />
        </span>
      </div>
    </div>
  );
};
