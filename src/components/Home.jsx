import React from "react";
import { greetings } from "../utils/portfolio";
import developer from "../assets/images/developer.svg";
import { socialLinks } from "../utils/portfolio";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import file from "../assets/images/file.svg";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col-reverse lg:flex-row text-white h-[90vh] mx-4 my-4 lg:my-0">
      <section className="max-w-2xl">
        <div className="text-4xl font-bold font-signika mb-4">
          {greetings.title}
        </div>
        <div className="text-4xl text-white font-medium font-[arial] mb-6">
         a {greetings.subtitle[0]}
        </div>
        <div className="text-xl font-firasans mb-12">
          {greetings.description}
        </div>
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
          <button className="bg-white flex items-center py-2 px-4 rounded shadow-xl shadow-black/20 outline-black  transition ease-in-out duration-300 hover:-translate-y-1 hover:shadow-black/30">
            <img src={file} alt="resume" className="w-4" />
            <div className="ml-2 text-sm font-bold font-signika text-black/90">
              SEE MY RESUME
            </div>
          </button>
        </div>
      </section>
      <section className="">
        <img src={developer} alt="developer" className="w-[30rem]" />
      </section>
    </main>
  );
}
