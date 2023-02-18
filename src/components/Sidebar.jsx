import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../assets/images/avatar.svg";
import close from "../assets/images/close.svg";
import home from "../assets/images/home.svg";
import project from "../assets/images/project.svg";
import blog from "../assets/images/blog.svg";
import resume from "../assets/images/resume.svg";
import { greetings } from "../utils/portfolio";
import contact from "../assets/images/contact.svg";
import { socialLinks } from "../utils/portfolio";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";

export default function Sidebar(props) {
  return (
    <aside
      className={`fixed overflow-auto top-0 left-0 h-screen py-8 px-6 bg-white z-10 ${
        props.sidebar ? "-translate-x-96" : "translate-x-0"
      } ease-in-out duration-500`}
    >
      <div className="flex items-center justify-between">
          <img src={avatar} alt="developer" className="w-16" />
        <img
          src={close}
          alt="close"
          className="w-7 cursor-pointer"
          onClick={props.toggleSidebar}
        />
      </div>
      <h1 className="font-firasans font-bold mt-3 mb-5 text-lg text-black/80">{greetings.name}</h1>
      <hr className="border" />
      <div className="text-gray-600 font-bold mt-5 mb-20 flex flex-col">
        <NavLink
          to="/"
          className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center"
        >
          <img src={home} alt="home" className="w-6 h-6 mr-2" />
          <div className="">Home</div>
        </NavLink>
        <NavLink
          to="/project"
          className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center"
        >
          <img src={project} alt="project" className="w-6 h-6 mr-2" />
          <div className="">Project</div>
        </NavLink>
        <NavLink
          to="/resume"
          className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center"
        >
          <img src={blog} alt="blog" className="w-6 h-6 mr-2" />
          <div className="">Blog</div>
        </NavLink>
        <NavLink
          to="/blog"
          className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center"
        >
          <img src={resume} alt="resume" className="w-6 h-6 mr-2" />
          <div className="">Resume</div>
        </NavLink>
        <NavLink
          to="/contact"
          className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center"
        >
          <img src={contact} alt="contact" className="w-6 h-6 mr-2" />
          <div className="">Contact</div>
        </NavLink>
      </div>
      <hr className="border" />
      <div className="mt-10">
        <h1 className="text-xl font-bold font-firasans text-black/90 drop-shadow-lg">
          GET IN TOUCH
        </h1>
        <div className="mt-4">
          <div className="flex item-center mb-12">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-black/80"
              >
                <img src={linkedin} alt="linkedin" className="w-8 invert" />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="bg-black rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-black/80 hover:shadow-black/80"
              >
                <img src={github} alt="github" className="w-8 invert" />
              </a>
            )}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-800 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-900 hover:shadow-black/80"
              >
                <img src={facebook} alt="facebook" className="w-8 invert" />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-red-700 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-black/80"
              >
                <img src={instagram} alt="facebook" className="w-8 invert" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-black/80"
              >
                <img src={twitter} alt="twitter" className="w-8 invert" />
              </a>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
