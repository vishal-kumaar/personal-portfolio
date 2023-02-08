import React from "react";
import hamburger from "../assets/images/hamburger.svg";
import devIcon from "../assets/images/devIcon.png";

export default function Navbar(props) {
  return (
    <nav
      className={`flex justify-between items-center ${props.sidebarDisplay === "hidden" ? "bg-brownish" : "bg-black"} text-white py-6 px-4 sticky left-0 top-0 w-full opacity-95`}
    >
      <div className="">
        <img src={devIcon} alt="dev-icon" className="w-9" />
      </div>
      <div className="">
        <div className={`hidden`}>
          <div className="flex font-mono text-lg">
            <div className="mx-6 cursor-pointer hover:text-gray-400">Home</div>
            <div className="mx-6 cursor-pointer hover:text-gray-400">Skills</div>
            <div className="mx-6 cursor-pointer hover:text-gray-400">Project</div>
            <div className="mx-6 cursor-pointer hover:text-gray-400">Contact</div>
          </div>
        </div>
        <div className={props.opacity}>
          <img src={hamburger} alt="menu" className="w-7 invert" onClick={props.toggleSidebar} />
        </div>
      </div>
    </nav>
  );
}
