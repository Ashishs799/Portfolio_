import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Social_media = () => {
  return (
    <div className="">
      <span className="2xl:text-xl 2xl:w-[100px] flex gap-2 my-2 2xl:my-6 justify-between items-center cursor-pointer ">
        <FaFacebookF className="hover:text-pink-800 transition delay-150 duration-300  ease" />
        <FaInstagram className="hover:text-pink-800 transition delay-150  duration-300 ease" />
        <FaLinkedinIn className="hover:text-pink-800 transition delay-150 duration-300  ease" />
      </span>
    </div>
  );
};

export default Social_media;
