import React, { useState } from "react";
// import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import Ipad from "../assets/images/Ipad.jpg";
import Handup from "../assets/images/handup.jpg";
import Boy from "../assets/images/man.json";
import Chat from "../assets/images/chatting.json";
import Lottie from "lottie-react";
import Phone from "../assets/images/iphone.jpg";

const Contact = () => {
  return (
    <div className="h-screen w-full px-10 py-20 2xl:px-40 2xl:py-20 bg-pink-100 sticky bottom-0 ">
      <div className="h-full w-full bg-white flex 2xl:flex-row flex-col justify-center 2xl:justify-between 2xl:px-20 items-center">
        <div className=" w-full h-full 2xl:px-20 px-10  flex flex-col items-start justify-center">
          <span className="2xl:pt-20 2xl:pb-8 block 2xl:text-3xl ">
            Let's connect—faster than a JavaScript function execution!
          </span>
          <p className="text-xs 2xl:text-xl leading-8">
            <span className="font-bold">Pop me an email </span>at{" "}
            <a
              href="mailto:aaciss456@gmail.com"
              className="text-pink-800 font-bold cursor-pointer 2xl:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              aaciss456@gmail.com
            </a>{" "}
            or find me on social media.
          </p>

          <span className="2xl:text-xl 2xl:w-[100px] flex gap-2 my-2 2xl:my-6 justify-between items-center cursor-pointer ">
            <FaFacebookF className="hover:text-pink-800 transition delay-150 duration-300  ease" />
            <FaInstagram className="hover:text-pink-800 transition delay-150  duration-300 ease" />
            <FaLinkedinIn className="hover:text-pink-800 transition delay-150 duration-300  ease" />
          </span>
        </div>
        <div className="w-full 2xl:w-md bg-red flex justify-center items-center relative">
          <div className=" flex justify-center items-center ">
            <Lottie
              animationData={Boy}
              loop={true}
              className="w-64 h-64 2xl:w-120 2xl:h-120 relative z-10"
            />
          </div>
          <div className="phone-shadow w-[20px] h-[5px] "></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
