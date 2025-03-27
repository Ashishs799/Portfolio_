import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-[#1C1B20] px-10 text-white 2xl:h-screen w-screen 2xl:px-40 py-20 relative z-10">
      <h1 className="text-[10px] 2xl:text-2xl font-bold 2xl:tracking-[12px] tracking-[4px]  uppercase text-pink-600 ">
        Skills
      </h1>
      <span className="text-xl my-4 2xl:text-6xl 2xl:my-8 block text-white/">
        Turning ideas into interactive, responsive, and visually stunning web
        experiences
      </span>
      <div className=" w-full flex 2xl:flex-row flex-col gap-x-20">
        <div className="w-full flex flex-col">
          <span className="text-[16px] 2xl:text-2xl py-4 block">Frontend Development</span>
          <div className="w-full flex flex-col gap-y-4">
            <ProgressBar label="HTML" percentage={90} icon={<FaHtml5 />} />
            <ProgressBar label="CSS" percentage={85} icon={<FaCss3Alt />} />
            <ProgressBar
              label="JavaScript"
              percentage={75}
              icon={<IoLogoJavascript />}
            />
          </div>
        </div>

        <div className=" w-full flex flex-col">
          <span className="text-[16px]  2xl:text-2xl py-4 block">Frameworks & Libraries</span>
          <div className="w-full flex flex-col gap-y-4">
            <ProgressBar label="React" percentage={75} icon={<FaReact />} />
            <ProgressBar
              label="Tailwind Css"
              percentage={85}
              icon={<RiTailwindCssFill />}
            />
            <ProgressBar label="Framer " percentage={70} icon={<SiFramer />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
