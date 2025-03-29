import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/images/ashish.png";

const Sidebar = ({ openSideBar, scrollToSection }) => {
  return (
    <div className="h-screen w-screen 2xl:hidden relative bg-[#161616]  text-white flex-col justify-center items-center gap-y-8 transition delay-75 duration-200 ease-in px-5">
      <div
        className=" text-xl p-4 flex items-center justify-between w-full "
        onClick={() => openSideBar()}
      >
        <img src={logo} className="w-3.5" alt="" />
        <RxCross2 />
      </div>
      <div
        className="h-full  py-20 relative
      "
      >
        <ul className="w-full text-3xl font-black flex flex-col justify-center items-center gap-y-8 [&>*]:tracking-[0.8em] py-8 [&>*]:hover:text-pink-800  [&>*]:transition  [&>*]:delay-150  [&>*]:duration-200 [&>*]:ease  [&>*]:cursor-pointer">
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >
            <span>ABOUT</span>
          </li>
          <li
            onClick={() => scrollToSection("portfolio")}
            className="cursor-pointer"
          >
            <span>WORK</span>
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer"
          >
            <span>SKILLS</span>
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer"
          >
            <span>CONTACT</span>
          </li>
        </ul>
        <div className="w-full flex justify-center absolute bottom-32">
          <div className="text-sm 2xl:w-[100px] w-[200px] flex gap-2 my-12 justify-between items-center cursor-pointer ">
            <FaFacebookF className="hover:text-pink-800 transition delay-150 duration-300  ease" />
            <FaInstagram className="hover:text-pink-800 transition delay-150  duration-300 ease" />
            <FaLinkedinIn className="hover:text-pink-800 transition delay-150 duration-300  ease" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
