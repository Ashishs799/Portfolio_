import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="h-screen w-[300px] 2xl:hidden bg-blue-500 flex-col justify-between items-center">
      <ul className="w-full h-full flex-col justify-between bg-teal-500 items-center [&>*]:tracking-[1em]">
        <li>
          <span>ASHISH</span>
        </li>
        <li>
          <span>ABOUT</span>
        </li>
        <li>
          <span>PORTFOLIO</span>
        </li>
        <li>
          <span>SKILLS</span>
        </li>
        <li>
          <span>CONTACT</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
