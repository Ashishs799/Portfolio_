import React from "react";
import ecommerce from "../assets/images/pahiranlptp.png";
import taskcascade from "../assets/images/taskcascade.png";
import { motion } from "framer-motion";
import tictactoe from "../assets/images/tictactoebg.jpg";
import taskmanager from "../assets/images/taskmanagerapp.jpg";
import eatwell from "../assets/images/Eatwell.png";
import { MdArrowOutward } from "react-icons/md";

const Portfolio = () => {
  return (
    <div
      className=" w-full px-10  2xl:px-40 2xl:py-20 bg-[#1C1B20] relative z-10"
      id="portfolio"
    >
      <h1 className="text-[10px] tracking-[4px] 2xl:text-2xl font-bold 2xl:tracking-[12px] uppercase text-pink-600 mb-8">
        Work
      </h1>
      <div className="w-full flex flex-col 2xl:gap-12 gap-y-4">
        <div className="flex flex-col 2xl:flex-row 2xl:gap-12 gap-y-4">
          <motion.div
            className="rounded-lg overflow-hidden w-full relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-full h-full bg-[#a3004ca1] z-10 absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 flex justify-center items-center transition delay-75 duration-200 ease-in">
              <div className="flex gap-x-4 ">
                <span className=" py-3 px-3 text-xs 2xl:py-3 2xl:px-6 2xl:text-[16px] bg-white rounded-4xl block">
                  Taskcascade.com
                </span>
                <span className=" py-3 px-4 flex justify-center items-center bg-white rounded-4xl ">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
            <img
              src={taskcascade}
              alt="Image 1"
              className="w-full h-full absolute top-0 left-0"
            />
          </motion.div>
          <motion.div
            className="2xl:w-[900px] rounded-lg overflow-hidden 2xl:h-[400px] 2xl:self-end relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-full h-full bg-[#a3004ca1] z-10 absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 flex justify-center items-center transition delay-75 duration-200 ease-in">
              <div className="flex gap-x-4">
                <span className="py-3 px-3 text-xs 2xl:py-3 2xl:px-6 2xl:text-[16px] bg-white rounded-4xl block">
                  TicTacToe Game
                </span>
                <span className="py-3 px-4 flex justify-center items-center bg-white rounded-4xl">
                  <MdArrowOutward />
                </span>
              </div>
            </div>

            {/* Image */}
            <img
              src={tictactoe}
              alt="Image 2"
              className="w-full h-full object-cover absolute top-0 left-0"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="2xl:px-40 2xl:py-16 "
        >
          <div className="rounded-lg overflow-hidden relative group">
            <div className="w-full h-full bg-[#a3004ca1] z-10 absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in">
              <div className="flex gap-x-4">
                <span className="2xl:py-3 py-3 px-3 text-xs 2xl:px-6 2xl:text-[16px] bg-white rounded-4xl block">
                  E-commerce Project
                </span>
                <span className="py-3 px-4 flex justify-center items-center bg-white rounded-4xl">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
            <img
              src={ecommerce}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div className="flex flex-col 2xl:flex-row 2xl:gap-12 gap-y-4">
          <motion.div
            className="2xl:w-[900px] rounded-lg overflow-hidden relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-full h-full bg-[#a3004ca1] z-10 absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in">
              <div className="flex gap-x-4">
                <span className="text-xs py-3 px-3 2xl:py-3 2xl:px-6 2xl:text-[16px] bg-white rounded-4xl block">
                  Task Manager
                </span>
                <span className="py-3 px-4 flex justify-center items-center bg-white rounded-4xl">
                  <MdArrowOutward />
                </span>
              </div>
            </div>

            <img
              src={taskmanager}
              alt="Image 5"
              className="2xl:w-fit h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="rounded-lg overflow-hidden relative group"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="w-full h-full bg-[#a3004ca1] z-10 absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-200 ease-in">
              <div className="flex gap-x-4">
                <span className="text-xs py-3 px-3 2xl:py-3 2xl:px-6 2xl:text-[16px] bg-white rounded-4xl block">
                  Restaurant E-commerce Website
                </span>
                <span className="py-3 px-4 flex justify-center items-center bg-white rounded-4xl">
                  <MdArrowOutward />
                </span>
              </div>
            </div>

            <img
              src={eatwell}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
