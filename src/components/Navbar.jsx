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
        <div>
          <Link to="/" className="font-cursive text-3xl">
            {user.name}
          </Link>
        </div>
        <div className="flex gap-3">
          <NavLink
          to="/"
            activeclassname
            className="inline cursor-pointer ml-6 p-1.5 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md"
          >
            Home
          </NavLink>
          <NavLink
          to="/projects?page=1"
            activeclassname
            className="inline cursor-pointer ml-6 p-1.5 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md"
          >
          Project
          </NavLink>
          <NavLink
          to="/blogs?page=1"
            activeclassname
            className="inline cursor-pointer ml-6 p-1.5 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md"
          >
            Blogs
          </NavLink>
          <NavLink
          to="/contact"
            activeclassname
            className="inline cursor-pointer ml-6 p-1.5 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md"
          >
            Contact
          </NavLink>
          
        </div>
      </nav>
    </Headroom>
  );
}
