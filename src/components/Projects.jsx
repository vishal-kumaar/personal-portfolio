import React, { useState } from "react";
import { projects } from "../utils/portfolio";
import github from "../assets/images/github.svg";
import globe from "../assets/images/globe.svg";
import nextIcon from "../assets/images/next.svg";

export default function Project(props) {
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(6);
  const [nextBtn, setNextBtn] = useState("visible");
  const [prevBtn, setPrevBtn] = useState("invisible");

  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };

  const nextProject = () => {
    if (lastIndex + 6 >= projects.length) {
      setNextBtn("invisible");
    }
    setFirstIndex(lastIndex);
    setLastIndex(lastIndex + 6);
    setPrevBtn("visible");
    scrollToTop();
  };

  const previousProject = () => {
    if (firstIndex === 6) {
      setPrevBtn("invisible");
    }
    setLastIndex(firstIndex);
    setFirstIndex(firstIndex - 6);
    setNextBtn("visible");
    scrollToTop();
  };

  return (
    <div className={`py-14 bg-white ${props.opacity} transition-opacity duration-500 ease-in-out`}>
      <h1 className="mb-4 text-3xl font-signika mx-4 md:mx-10 text-black">
        Projects
      </h1>
      <hr className="border-black/40 mx-4 md:mx-10" />
      <div className="flex flex-wrap">
        {projects &&
          projects.slice(firstIndex, lastIndex).map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[44%] lg:w-[28%] mx-4 sm:mx-[3%] lg:mx-[2.66%] mt-10 p-4 rounded-md bg-black/5 mb-4  hover:shadow-2xl hover:scale-105 transition ease-in-out duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full rounded-md"
              />
              <h1 className="font-signika text-xl mt-4">{project.name}</h1>
              <div className="flex items-center mt-2">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center hover:text-blue-600"
                >
                  <img src={github} alt="github" className="w-6" />
                  <p className="font-poppins">Github</p>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center ml-4"
                >
                  <img src={globe} alt="globe" className="w-4" />
                  <p className="ml-1 font-poppins">Live Link</p>
                </a>
              </div>
            </div>
          ))}
      </div>
      {projects.length > 6 && (
        <div className="flex justify-between font-signika mx-4 md:mx-10 mt-10">
          <button
            onClick={previousProject}
            className={`${prevBtn} flex items-center bg-blue-700 hover:bg-blue-500 shadow-xl py-1 px-2 text-white ouline-white border-none rounded`}
          >
            <img
              src={nextIcon}
              alt="previous"
              className="rotate-180 invert w-3 h-3 mr-[5px]"
            />
            <p>Previous</p>
          </button>
          <button
            onClick={nextProject}
            className={`${nextBtn} flex items-center bg-blue-700 hover:bg-blue-500 shadow-xl py-1 px-2 text-white ouline-white border-none rounded`}
          >
            <p>Next</p>
            <img
              src={nextIcon}
              alt="next"
              className="invert w-3 h-3 ml-[5px]"
            />
          </button>
        </div>
      )}
    </div>
  );
}
