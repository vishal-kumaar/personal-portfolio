import React from "react";
import devIcon from "../assets/images/devIcon.png";
import close from "../assets/images/close.svg";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import linkedin from "../assets/images/linkedin.svg";
import email from "../assets/images/email.svg";

export default function Sidebar(props) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-80 z-50 transition duration-300 ease-in-out p-6 bg-brownish text-white overflow-auto ${props.translate}`}
    >
      <div className="flex justify-between items-center">
        <div>
          <img src={devIcon} alt="dev-icon" className="w-12" />
        </div>
        <img
          src={close}
          alt="close"
          className="w-7 invert cursor-pointer"
          onClick={props.toggleSidebar}
        />
      </div>
      <div className="font-signika mt-4 mb-6 text-lg">Vishal Kumar</div>
      <hr />
      <div className="mb-28 mt-8">
        <div className="my-4 text-xl font-mono font-semibold">Home</div>
        <div className="my-4 text-xl font-mono font-semibold">Skills</div>
        <div className="my-4 text-xl font-mono font-semibold">Project</div>
        <div className="my-4 text-xl font-mono font-semibold">Contact</div>
      </div>
      <hr />
      <div className="my-8">
        <div className="font-signika text-xl font-semibold mb-4">
          Get in touch
        </div>
        <div className="flex flex-wrap">
          <div className="p-3 rounded-md bg-gray-300 shadow-xl mr-4 my-2 transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-400">
            <img src={github} alt="github" className="w-6" />
          </div>
          <div className="p-3 rounded-md bg-gray-300 shadow-xl mr-4 my-2 transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-400">
            <img src={instagram} alt="instagram" className="w-6" />
          </div>
          <div className="p-3 rounded-md bg-gray-300 shadow-xl mr-4 my-2 transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-400">
            <img src={facebook} alt="facebook" className="w-6" />
          </div>
          <div className="p-3 rounded-md bg-gray-300 shadow-xl mr-4 my-2 transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-400">
            <img src={linkedin} alt="linkedin" className="w-6" />
          </div>
          <div className="p-3 rounded-md bg-gray-300 shadow-xl mr-4 my-2 transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-400">
            <img src={email} alt="email" className="w-6" />
          </div>
        </div>
      </div>
    </aside>
  );
}
