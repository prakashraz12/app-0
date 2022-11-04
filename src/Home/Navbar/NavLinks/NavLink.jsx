import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./HomePage/Home";
import LogIn from "./LogIn/LogIn";
import "./NavLinks.css";

const NavLink = () => {
  return (
    <div className="Ul-Link">
      <ul>
        <Home />
        <About />
        <Contact />
        <LogIn />
      </ul>
    </div>
  );
};

export default NavLink;
