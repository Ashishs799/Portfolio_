import React from "react";
import Photo from "../assets/images/heropic.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
import { Side_Navbar } from "./SideNavbar/Side_Navbar";

const Hero = ({ openSideBar, scrollToSection }) => {
  return (
    <div className="bg-[#161616] z-10 relative" id="hero">
      <div className=" h-screen overflow-x-hidden w-full relative">
        <Navbar openSideBar={openSideBar} scrollToSection={scrollToSection} />
        {/* <div className="relative w-full 2xl:h-[640px] h-full"> */}
        <div className=" font-bold block transition absolute top-[140px] 2xl:top-[180px] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center">
          \
          <span className="2xl:text-[12rem] tracking-[20px] text-5xl 2xl:tracking-[40px] uppercase  text-pink-100 block">
            Ashish
          </span>
          <span className="2xl:text-4xl 2xl:tracking-[20px] tracking-[8px] text-sm text-pink-800 absolute -bottom-8 right-4">
            {" "}
            Lohani
          </span>{" "}
        </div>

        <img
          className="absolute bottom-0 2xl:bottom-0 left-1/2  transform -translate-x-1/2 2xl:w-[700px] 2xl:h-auto h-[500px] object-cover brightness-50 "
          src={Photo}
          alt="Profile"
        />

        <div className="ml-40 text-xl w-fit text-pink-800 hidden md:flex xl:flex 2xl:flex flex-col items-center justify-between absolute bottom-20 ">
          <span className="my-2 cursor-pointer hover:text-pink-100 transition-all delay-75 duration-150 ease-in">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </span>

          <span className="my-2 cursor-pointer hover:text-pink-100 transition-all delay-75 duration-150 ease-in">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </span>
          <span className="my-2 cursor-pointer hover:text-pink-100 transition-all delay-75 duration-150 ease-in">
            <a
              href="https://www.linkedin.com/in/ashish-sunar-599429238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
