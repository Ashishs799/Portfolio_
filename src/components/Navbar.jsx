import React from "react";
import logo from "../assets/images/ashish.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className=" py-5 px-40 text-pink-100 flex justify-between z-20 ">
      <img src={logo} clas alt="logo" className="w-4 " />
      {/* <div>
        <GiHamburgerMenu />
      </div> */}
      <ul className="flex justify-between  w-72 uppercase text-xs ">
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
