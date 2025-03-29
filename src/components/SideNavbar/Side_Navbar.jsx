import React from "react";
import { GoHome } from "react-icons/go";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiGrid32 } from "react-icons/ci";
import { MdOutlineGamepad } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";

export const Side_Navbar = ({ scrollToSection }) => {
  return (
    <div className="side_nav ">
      <div className="2xl:flex flex-col justify-between items-center [&>*]:py-2 [&>*]:px-3 bg-black  w-fit rounded-3xl py-4 text-xl [&>*]:hover:text-white [&>*]:transition [&>*]:duration-300 [&>*]:delay-150 [&>*]:ease-in cursor-pointer text-pink-700 hidden">
        <span
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer"
        >
          <GoHome />
        </span>
        <span
          onClick={() => scrollToSection("about")}
          className="cursor-pointer"
        >
          <CiUser />
        </span>
        <span
          onClick={() => scrollToSection("portfolio")}
          className="cursor-pointer"
        >
          <CiGrid32 />
        </span>
        <span
          onClick={() => scrollToSection("skills")}
          className="cursor-pointer"
        >
          <MdOutlineGamepad />
        </span>
        <span
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer"
        >
          <RiContactsBook3Line />
        </span>
      </div>
    </div>
  );
};
