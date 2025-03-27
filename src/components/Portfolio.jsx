import React from "react";
import ecommerce from "../assets/images/pahiranlptp.png";
import taskcascade from "../assets/images/taskcascade.png";
import tictactoe from "../assets/images/tictactoebg.jpg";
import taskmanager from "../assets/images/taskmanage.jpg";
import eatwell from "../assets/images/Eatwell.png";
import { MdArrowOutward } from "react-icons/md";

const Portfolio = () => {
  return (
    <div className=" w-full px-10  2xl:px-40 2xl:py-20 bg-[#1C1B20] relative z-10">
      <h1 className="text-[10px] tracking-[4px] 2xl:text-2xl font-bold 2xl:tracking-[12px] uppercase text-pink-600 mb-8">
        Work
      </h1>
      <div
        className=" w-full flex flex-col 2xl:gap-12 gap-y-4
       "
      >
        <div className="flex flex-col 2xl:flex-row 2xl:gap-12 gap-y-4">
          <div className="rounded-lg overflow-hidden w-full relative group ">
            {/* <div className="w-full h-full bg-[#a3004ca1] z-10 absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 flex justify-center items-center transition delay-75 duration-200 ease-in">
              <div className="flex gap-x-4 ">
                <span className=" py-3 px-6 bg-white rounded-4xl block">
                  Taskcascade.com
                </span>
                <span className=" py-3 px-4 flex justify-center items-center bg-white rounded-4xl ">
                  <MdArrowOutward />
                </span>
              </div>
            </div> */}
            <img
              src={taskcascade}
              alt="Image 1"
              className="w-full h-full absolute top-0 left-0  "
            />
          </div>
          <div className=" 2xl:w-[900px] rounded-lg overflow-hidden 2xl:h-[400px] 2xl:self-end">
            <img
              src={tictactoe}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="2xl:px-40 2xl:py-16">
          <div className="rounded-lg overflow-hidden">
            <img
              src={ecommerce}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col 2xl:flex-row 2xl:gap-12 gap-y-4">
          <div className=" 2xl:w-[900px] rounded-lg overflow-hidden">
            <img
              src={taskmanager}
              alt="Image 5"
              className="2xl:w-fit h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={eatwell}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
