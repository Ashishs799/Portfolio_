import React from "react";
import Photo from "../assets/images/heropic.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 5,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1 } },
  };

  return (
    <div className="bg-[#212020] z-10 relative">
      <div className=" h-screen overflow-x-hidden w-full -z-10 ">
        <Navbar />

        <div className="relative h-[640px] m-0 ">
          <motion.div
            className=" font-bold block transition absolute top-32 left-1/2  transform -translate-x-1/2 -translate-y-1/2 "
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <span className=" tracking-[40px] ">
              <span className="text-[12rem] uppercase text-pink-100">
                Ashish
              </span>
              <span className="text-4xl tracking-[20px]  text-pink-800 absolute bottom-0 right-0">
                {" "}
                Lohani
              </span>{" "}
            </span>
          </motion.div>

          <img
            className="absolute bottom-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] object-cover brightness-50 "
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            src={Photo}
            alt="Profile"
          />
          <div className="ml-40 text-xl w-fit text-pink-800 flex flex-col items-center justify-between absolute bottom-10 ">
            <span className="my-1.5 cursor-pointer hover:text-pink-800">
              <FaFacebookF />
            </span>
            <span className="my-1.5 cursor-pointer hover:text-pink-800">
              <FaInstagram />
            </span>
            <span className="my-1.5 cursor-pointer hover:text-pink-800">
              <FaLinkedinIn />
            </span>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Hero;
