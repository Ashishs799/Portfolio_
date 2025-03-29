import React from "react";
import { motion } from "framer-motion";
import Button from "./Button/Button";

const About = () => {
  return (
    <div
      className="px-10 flex flex-col justify-center 2xl:block bg-[#1C1B20]  w-full 2xl:px-40 2xl:py-24 z-10 relative"
      id="about"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-[10px] tracking-[4px] 2xl:text-2xl font-bold 2xl:tracking-[12px] uppercase text-pink-600"
      >
        About me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="2xl:my-8"
      >
        <p className="text-2xl leading-12 2xl:text-5xl font-bold 2xl:leading-18 text-pink-100">
          I'm Ashish Lohani, an{" "}
          <span className="text-pink-800">aspiring frontend developer</span>{" "}
          skilled in JavaScript, React.js, HTML, CSS, and Tailwind CSS,
          passionate about creating user-friendly web applications and have
          built 20+ projects, gaining hands-on experience through real-world
          development.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="2xl:m-0 my-8"
      >
        <Button label={"Download CV"} />
      </motion.div>
    </div>
  );
};

export default About;
