import React, { useState } from "react";
import Headroom from "react-headroom";
import { user } from "../utils/portfolio";
import hamburger from "../assets/images/hamburger.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import SidebarContext from "../state/siderbar/SidebarContext";

export default function Navbar() {
  const { toggleSidebar } = useContext(SidebarContext);
  let [navBg, setNavBg] = useState(
    "bg-gradient-to-r from-sky-500 to-indigo-500"
  );

  return (
    <Headroom
      onUnfix={() => setNavBg("bg-gradient-to-r from-sky-500 to-indigo-500")}
      onPin={() => setNavBg("bg-black/80")}
      className="bg-transparent"
    >
      <nav
        className={`text-white flex justify-between items-center px-4 md:px-10 pt-7 pb-3 ${navBg}`}
      >
        <Link to="/" className="font-cursive text-3xl">
          {user.name}
        </Link>
        <Link to="/" className="hidden md:block">
          <div className="inline cursor-pointer ml-6 p-2 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md">
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </div>
          <Link
            to="/projects"
            className="inline cursor-pointer ml-6 p-2 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md"
          >
            <NavLink to="/projects" activeclassname="active">
              Projects
            </NavLink>
          </Link>
          <Link
            to="/blogs"
            className="inline cursor-pointer ml-6 p-2 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md"
          >
            <NavLink to="/blogs" activeclassname="active">
              Blogs
            </NavLink>
          </Link>
          <Link
            to="/contact"
            className="inline cursor-pointer ml-6 p-2 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md"
          >
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </Link>
        </Link>
        <div className="block md:hidden">
          <img
            src={hamburger}
            alt="menu"
            className="invert w-6"
            onClick={toggleSidebar}
          />
        </div>
      </nav>
    </Headroom>
  );
}
