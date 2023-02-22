import React from "react";
import { user, socialLinks } from "../utils/portfolio";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import file from "../assets/images/file.svg";

export default function Home(props) {
  return (
    <main
      className={`${props.opacity} bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center flex-col-reverse lg:flex-row text-white px-6 py-14 lg:my-0 transition-opacity ease-in-out duration-500`}
    >
      <section className="max-w-2xl">
        <div className="text-4xl font-bold font-poppins mb-4">{user.title}</div>
        <div className="text-4xl text-white font-medium font-signika mb-6 relative w-full">
          I'm
          {user.subtitle.length >= 3 && (
            <>
              <span className="block opacity-0 overflow-hidden ml-14 absolute top-0 left-0 right-0 animate-bottomToTop">
                {user.subtitle[0]}
              </span>
              <span
                style={{ animationDelay: "2s" }}
                className="block opacity-0 overflow-hidden ml-14 absolute top-0 left-0 right-0 animate-bottomToTop"
              >
                {user.subtitle[1]}
              </span>
              <span
                style={{ animationDelay: "4s" }}
                className="block opacity-0 overflow-hidden ml-14 absolute top-0 left-0 right-0 animate-bottomToTop"
              >
                {user.subtitle[2]}
              </span>
            </>
          )}
        </div>
        <div className="text-xl font-firasans mb-12">{user.description}</div>
        <div className="flex item-center mb-12">
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-black/80"
            >
              <img src={linkedin} alt="linkedin" className="w-6 invert" />
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="bg-black rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-black/80 hover:shadow-black/80"
            >
              <img src={github} alt="github" className="w-6 invert" />
            </a>
          )}
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-800 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-900 hover:shadow-black/80"
            >
              <img src={facebook} alt="facebook" className="w-6 invert" />
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="bg-red-700 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-black/80"
            >
              <img src={instagram} alt="facebook" className="w-6 invert" />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-black/80"
            >
              <img src={twitter} alt="twitter" className="w-6 invert" />
            </a>
          )}
        </div>
        <div>
          <a
            href={user.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="w-fit bg-white flex items-center py-2 px-4 rounded shadow-xl shadow-black/20 outline-black transition ease-in-out duration-300 hover:-translate-y-1 hover:shadow-black/30"
          >
            <img src={file} alt="resume" className="w-4" />
            <div className="ml-2 text-sm font-bold font-signika text-black/90">
              SEE MY RESUME
            </div>
          </a>
        </div>
      </section>
      <section className="lg:ml-10 mb-8 lg:mb-0 h-64 lg:h-7">
        <img src={user.profilePic} alt="" className="rounded-full w-64 lg:w-72"/>
      </section>
    </main>
  );
}
