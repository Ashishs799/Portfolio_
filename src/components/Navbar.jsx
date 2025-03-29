import React, { useEffect, useState } from "react";
import logo from "../assets/images/ashish.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ openSideBar, scrollToSection }) => {
  return (
    <div className=" w-full py-4 lg:py-5 xl:px-40 px-10 text-pink-100 flex justify-between z-20  ">
      <img src={logo} clas alt="logo" className="lg:h-6 h-4 xl:h-6 " />

      <div
        className="lg:text-2xl xl:text-2xl lg:hidden xl:hidden text-sm "
        onClick={() => openSideBar()}
      >
        <AiOutlineMenu />
      </div>

      <ul className="hidden justify-between  w-72 uppercase text-xs md:flex sm:flex ">
        <li onClick={() => scrollToSection("about")} className="cursor-pointer">
          About
        </li>
        <li>|</li>

        <li
          onClick={() => scrollToSection("portfolio")}
          className="cursor-pointer"
        >
          Work
        </li>
        <li>|</li>
        <li
          onClick={() => scrollToSection("skills")}
          className="cursor-pointer"
        >
          Skills
        </li>
        <li>|</li>
        <li
          onClick={() => scrollToSection("skills")}
          className="cursor-pointer"
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
