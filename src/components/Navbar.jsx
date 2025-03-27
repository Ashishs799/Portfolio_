import React from "react";
import logo from "../assets/images/ashish.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className=" w-full py-4 lg:py-5 xl:px-40 px-10 text-pink-100 flex justify-between z-20  ">
      <img src={logo} clas alt="logo" className="lg:h-6 h-4 xl:h-6 " />

      <div className="lg:text-2xl xl:text-2xl lg:hidden xl:hidden text-sm">
        <AiOutlineMenu />
      </div>

      <ul className="hidden justify-between  w-72 uppercase text-xs md:flex sm:flex ">
        <li>About</li>
        <li>|</li>
        <li>Skills</li>
        <li>|</li>
        <li>Work</li>
        <li>|</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
