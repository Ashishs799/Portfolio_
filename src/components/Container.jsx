import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Side_Navbar } from "./SideNavbar/Side_Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Container = () => {
  return (
    <div className=" m-0 block relative">
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <div className="fixed top-1/2 right-4 z-1000">
        <Side_Navbar />
      </div>
      {/* <div className="fixed top-0 right-0 z-1000">
        <Sidebar />
      </div> */}
    </div>
  );
};

export default Container;
