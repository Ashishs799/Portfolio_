import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Side_Navbar } from "./SideNavbar/Side_Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSideNavlink, setShowSideNavLink] = useState(false);

  const openSideBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSideNavLink(true);
      } else {
        setShowSideNavLink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className=" m-0 block relative">
      <Hero
        openSideBar={openSideBar}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={scrollToSection}
      />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <div
        className={`${
          showSideNavlink ? "opacity-100" : "opacity-0"
        } fixed top-1/2 right-4 z-1000 transition-all delay-75 duration-200 ease`}
      >
        <Side_Navbar scrollToSection={scrollToSection} />
      </div>
      <div
        className={`fixed top-0 ${
          isOpen ? "opacity-1000" : "opacity-0"
        } z-1000 right-0  transition-all delay-75 duration-200 ease-in`}
      >
        <Sidebar openSideBar={openSideBar} scrollToSection={scrollToSection} />
      </div>
    </div>
  );
};

export default Container;
