import React from "react";
import ecommerce from "../assets/images/pahiranlptp.png";
import taskcascade from "../assets/images/taskcascade.png";
import tictactoe from "../assets/images/tictactoebg.jpg";
import taskmanager from "../assets/images/taskmanage.jpg";
import eatwell from "../assets/images/Eatwell.png";

const Portfolio = () => {
  return (
    <div className=" w-full  px-40 py-20 bg-[#1C1B20] relative z-10">
      <h1 className="text-2xl font-bold tracking-wider uppercase text-pink-600 mb-8">
        Work
      </h1>
      <div
        className=" w-full  flex flex-col gap-12 
       "
      >
        <div className="flex gap-12 ">
          <div className="col-span-2  rounded-lg overflow-hidden">
            <img src={taskcascade} alt="Image 1" className="w-full h-full " />
          </div>
          <div className=" w-[900px] rounded-lg overflow-hidden h-[400px] self-end">
            <img
              src={tictactoe}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" col-span-3  px-40 py-16">
          <div className="rounded-lg overflow-hidden">
            <img
              src={ecommerce}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex gap-12">
          <div className=" w-[900px] rounded-lg overflow-hidden">
            <img
              src={taskmanager}
              alt="Image 5"
              className="w-fit h-full object-cover"
            />
          </div>
          <div className="col-span-2    rounded-lg overflow-hidden">
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
