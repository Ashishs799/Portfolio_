import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Button from "./Button/Button";

const About = () => {
  return (
    <>
      <div className="px-10 flex flex-col justify-center 2xl:block bg-[#1C1B20] h-screen 2xl:h-auto w-full 2xl:px-40 2xl:py-24 z-10 relative">
        <h1 className="text-[10px] tracking-[4px] 2xl:text-2xl font-bold 2xl:tracking-[12px] uppercase text-pink-600">
          About me
        </h1>
        <div className="2xl:my-8 ">
          <p className="text-2xl leading-12 2xl:text-5xl font-bold 2xl:leading-18 text-pink-100">
            I'm Ashish Sunar, an{" "}
            <span className="text-pink-800">aspiring frontend developer</span>{" "}
            skilled in JavaScript, React.js, HTML, CSS, and Tailwind CSS,
            passionate about creating user-friendly web applications and have
            built 20+ projects, gaining hands-on experience through real-world
            development.
          </p>
        </div>
        <div className="2xl:m-0 my-8">
          <Button label={"Download CV"} />
        </div>
      </div>
    </>
  );
};
export default About;
