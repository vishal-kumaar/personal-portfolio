import React, { useState } from "react";
import { projects } from "../utils/portfolio";
import nextIcon from "../assets/images/next.svg";
import Project from "./Project";

export default function Projects(props) {
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(6);
  const [nextBtn, setNextBtn] = useState("visible");
  const [prevBtn, setPrevBtn] = useState("invisible");
  const [isLoading, setLoading] = useState(false);
  const [project, setProject] = useState(null);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  };

  const nextProject = () => {
    if (lastIndex + 6 >= projects.length) {
      setNextBtn("invisible");
    }
    setFirstIndex(lastIndex);
    setLastIndex(lastIndex + 6);
    setPrevBtn("visible");
    handleLoading();
  };

  const previousProject = () => {
    if (firstIndex === 6) {
      setPrevBtn("invisible");
    }
    setLastIndex(firstIndex);
    setFirstIndex(firstIndex - 6);
    setNextBtn("visible");
    handleLoading();
  };

  const openModal = (index) => {
    props.toggleModal();
    setProject(projects[index]);
  };

  return (
    <>
      <Project
        modal={props.modal}
        toggleModal={props.toggleModal}
        project={project}
      />
      {isLoading ? (
        <div className="py-14 bg-white"></div>
      ) : (
        <div
          className={`py-14 bg-white ${props.opacity} transition-opacity duration-500 ease-in-out`}
        >
          <h1 className="mb-4 text-3xl font-signika mx-4 md:mx-10 text-black">
            Projects
          </h1>
          <hr className="border-black/40 mx-4 md:mx-10" />
          <div className="flex flex-wrap">
            {projects &&
              projects.slice(firstIndex, lastIndex).map((project, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[44%] lg:w-[28%] mx-4 sm:mx-[3%] lg:mx-[2.66%] mt-10 p-4 rounded-md bg-black/5 mb-4 shadow-2xl cursor-pointer hover:bg-black/20"
                  onClick={() => openModal(firstIndex + index)}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full rounded-md border-2"
                  />
                  <p className="mt-5 font-firasans text-sm text-black">
                    {project.tech}
                  </p>
                  <h1 className="font-signika text-xl mt-px">{project.name}</h1>
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
      )}
    </>
  );
}
