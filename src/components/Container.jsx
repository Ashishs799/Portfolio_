import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

const Container = () => {
  return (
    <div className=" m-0 block ">
      <Hero />
      <About />
      <Portfolio/>
      <Skills/>
    </div>
  );
};

export default Container;
