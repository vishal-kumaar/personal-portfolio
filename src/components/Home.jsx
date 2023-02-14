import React from "react";
import vishalKumar from "../assets/images/vishalKumar.png";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import linkedin from "../assets/images/linkedin.svg";
import email from "../assets/images/email.svg";

export default function Home(props) {
  return (
    <>
      <div
        className={`px-5 md:px-10 flex justify-between items-center flex-col-reverse md:flex-row transition-all duration-300 ease-in-out ${props.opacity}`}
      >
        <div className="py-6">
          <div className="text-gray-300 text-lg font-[monospace] mb-4">
            Welcome to my porfolio site!
          </div>
          <div className="">
            <div className="text-red-600 text-5xl font-signika mb-3">
              Vishal Kumar
            </div>
            <div className="text-white text-4xl font-medium mb-4 font-[arial]">
              a Web Developer
            </div>
          </div>
          <div className="text-gray-200 text-lg font-medium">
            Building a successful product is a challenge. I am highly energetic
            in user experience design, interfaces and web development.
          </div>
        </div>
        <div className="py-6">
          <img src={vishalKumar} alt="vishal-kumar" className="w-96" />
        </div>
      </div>
      <div className="my-8 px-5 sm:px-10 md:px-28 lg:px-48 xl:px-64 2xl:px-80">
        <div className="font-firasans text-lg font-bold mb-4 text-white text-center">
          Get in touch
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="p-3 rounded-md bg-gray-300 shadow-xl my-2 transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-400">
            <img src={github} alt="github" className="w-6" />
          </div>
          <div className="p-3 rounded-md bg-gray-300 shadow-xl my-2 transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-400">
            <img src={instagram} alt="instagram" className="w-6" />
          </div>
          <div className="p-3 rounded-md bg-gray-300 shadow-xl my-2 transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-400">
            <img src={facebook} alt="facebook" className="w-6" />
          </div>
          <div className="p-3 rounded-md bg-gray-300 shadow-xl my-2 transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-400">
            <img src={linkedin} alt="linkedin" className="w-6" />
          </div>
          <div className="p-3 rounded-md bg-gray-300 shadow-xl my-2 transition ease-in-out duration-300 hover:-translate-y-2 hover:bg-gray-400">
            <img src={email} alt="email" className="w-6" />
          </div>
        </div>
      </div>
    </>
  );
}
