import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Container = () => {
  return (
    <div className=" m-0 block relative">
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
};

export default Container;
