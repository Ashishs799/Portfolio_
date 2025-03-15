import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <>
      <div className=" bg-[#0D0D0D] h-screen w-full  z-100 px-40 pt-24">
    
        <h1 className="text-sm font-bold tracking-wider uppercase my-4 text-pink-800">
          About me
        </h1>
        <div className="mt-8 ">
          <p className="text-6xl font-bold leading-18 text-pink-100">
            "Hi, I'm Ashish Sunar, an{" "}
            <span className="text-pink-800">aspiring frontend developer</span>{" "}
            skilled in React.js, HTML, CSS, and JavaScript, passionate about
            creating user-friendly web applications and eager to gain hands-on
            experience through real-world projects"
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
