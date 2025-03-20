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
    <div className="h-screen w-full px-40 py-20 bg-pink-100 sticky bottom-0  ">
      <div className="h-full w-full bg-white flex justify-between px-20 items-center">
        <div className=" w-full h-full px-20 flex flex-col justify-center">
          <span className="pt-20 pb-8 block text-3xl ">
            Let's connect—faster than a JavaScript function execution!
          </span>
          <p className="text-xl leading-8">
            <span className="font-bold">Pop me an email </span>at{" "}
            <a
              href="mailto:aaciss456@gmail.com"
              className="text-pink-800 font-bold cursor-pointer text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              aaciss456@gmail.com
            </a>{" "}
            or find me on social media.
          </p>

          <span className="text-xl w-[100px] flex gap-2 my-6 justify-between items-center cursor-pointer ">
            <FaFacebookF className="hover:text-pink-800 transition delay-150 duration-300  ease" />
            <FaInstagram className="hover:text-pink-800 transition delay-150  duration-300 ease" />
            <FaLinkedinIn className="hover:text-pink-800 transition delay-150 duration-300  ease" />
          </span>
        </div>
        <div className="w-md py-10 flex justify-center items-center relative">
          <div className=" flex z-1000 justify-center items-center ">
            <Lottie
              animationData={Boy}
              loop={true}
              className="w-120 h-120 relative z-10"
            />
          </div>
          <div className="phone-shadow w-[20px] h-[5px] "></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
