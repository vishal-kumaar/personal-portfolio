import React, { useState } from "react";
import Headroom from "react-headroom";
import { greetings } from "../utils/portfolio";
import hamburger from "../assets/images/hamburger.svg";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  let [navBg, setNavBg] = useState("");

  return (
    <Headroom
      onUnfix={() => setNavBg("")}
      onPin={() => setNavBg("bg-black/80")}
      className="mt-4"
    >
      <nav
        className={`text-white flex justify-between items-center px-4 md:px-10 py-3 transition duration-300 ease-in-out ${navBg}`}
      >
        <NavLink to="/" className="font-cursive text-3xl">
          {greetings.name}
        </NavLink>
        <div className="hidden md:block">
          <NavLink
            to="/"
            className="ml-6 p-2 rounded font-roboto outline-white hover:bg-white hover:text-black hover:shadow-md"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className="ml-6 p-2 rounded font-roboto outline-white hover:bg-white hover:text-black hover:shadow-md"
          >
            Projects
          </NavLink>
          <NavLink
            to="/blogs"
            className="ml-6 p-2 rounded font-roboto outline-white hover:bg-white hover:text-black hover:shadow-md"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/resume"
            className="ml-6 p-2 rounded font-roboto outline-white hover:bg-white hover:text-black hover:shadow-md"
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className="ml-6 p-2 rounded font-roboto outline-white hover:bg-white hover:text-black hover:shadow-md"
          >
            Contact
          </NavLink>
        </div>
        <div className="block md:hidden">
          <img src={hamburger} alt="menu" className="invert w-6" onClick={props.toggleSidebar} />
        </div>
      </nav>
    </Headroom>
  );
}