import React from "react";
import { user, socialLinks } from "../utils/portfolio";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import hashnode from "../assets/images/hashnode.svg";
import file from "../assets/images/file.svg";

export default function Contact(props) {
  return (
    <div className={`${props.opacity} transition duration-500 ease-in-out bg-white py-14 flex flex-col md:flex-row justify-center items-center`}>
      <div className="mr-auto ml-auto md:mr-32 md:ml-0 w-fit">
        <img src={user.profilePic} alt="" className="rounded-full w-52 mb-3" />
        <h1 className="font-signika text-black text-xl">{user.name}</h1>
        <p className="font-poppins text-md text-black mb-5">{user.gmail}</p>
        <a
          href={user.resumeLink}
          target="_blank"
          rel="noreferrer"
          className="w-fit bg-black/5 flex items-center py-2 px-4 rounded shadow-xl shadow-black/20 outline-black transition ease-in-out duration-300 hover:-translate-y-1 hover:shadow-black/30 h-10"
        >
          <img src={file} alt="resume" className="w-4" />
          <div className="ml-2 text-sm font-bold font-signika text-black/90">
            SEE MY RESUME
          </div>
        </a>
      </div>
      <div className="flex flex-row flex-wrap md:flex-col md:flex-nowrap mt-10 md:mt-0">
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-28 my-2 mx-auto md:mx-0 transition ease-in-out duration-300 hover:scale-105"
          >
            <div className="bg-blue-600 rounded-full p-2 shadow-xl shadow-black/30 outline-white hover:bg-blue-700 hover:shadow-black/80">
              <img src={linkedin} alt="linkedin" className="w-6 invert" />
            </div>
            <p className="ml-2 text-sm font-bold font-signika text-black/90">
              LinkedIn
            </p>
          </a>
        )}
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-28 my-2 mx-auto md:mx-0 transition ease-in-out duration-300 hover:scale-105"
          >
            <div className="bg-black rounded-full p-2 shadow-xl shadow-black/30 outline-white hover:bg-black/80 ">
              <img src={github} alt="github" className="w-6 invert" />
            </div>
            <p className="ml-2 text-sm font-bold font-signika text-black/90">
              Github
            </p>
          </a>
        )}
        {socialLinks.facebook && (
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-28 my-2 mx-auto md:mx-0 transition ease-in-out duration-300 hover:scale-105"
          >
            <div className="bg-blue-800 rounded-full p-2 shadow-xl shadow-black/30 outline-white hover:bg-blue-900 hover:shadow-black/80">
              <img src={facebook} alt="facebook" className="w-6 invert" />
            </div>
            <p className="ml-2 text-sm font-bold font-signika text-black/90">
              Facebook
            </p>
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-28 my-2 mx-auto md:mx-0 transition ease-in-out duration-300 hover:scale-105"
          >
            <div className="bg-red-700 rounded-full p-2 shadow-xl shadow-black/30 outline-white hover:bg-red-800 hover:shadow-black/80">
              <img src={instagram} alt="facebook" className="w-6 invert" />
            </div>
            <p className="ml-2 text-sm font-bold font-signika text-black/90">
              Instagram
            </p>
          </a>
        )}
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-28 my-2 mx-auto md:mx-0 transition ease-in-out duration-300 hover:scale-105"
          >
            <div className="bg-blue-500 rounded-full p-2 shadow-xl shadow-black/30 outline-white hover:bg-blue-600 hover:shadow-black/80">
              <img src={twitter} alt="twitter" className="w-6 invert" />
            </div>
            <p className="ml-2 text-sm font-bold font-signika text-black/90">
              Twitter
            </p>
          </a>
        )}
        {socialLinks.hashnode && (
          <a
            href={socialLinks.hashnode}
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-28 my-2 mx-auto md:mx-0 transition ease-in-out duration-300 hover:scale-105"
          >
            <div className="bg-blue-600 rounded-full p-2 shadow-xl shadow-black/30 outline-white hover:bg-blue-700 hover:shadow-black/80">
              <img src={hashnode} alt="twitter" className="w-6" />
            </div>
            <p className="ml-2 text-sm font-bold font-signika text-black/90">
              Hashnode
            </p>
          </a>
        )}
      </div>
    </div>
  );
}
