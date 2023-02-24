import React from "react";
import github from "../assets/images/github.svg";
import globe from "../assets/images/globe.svg";

export default function Project(props) {
  const closeModal = () => {
    props.setModal(false);
    props.setOpacity("opacity-100");
    document.body.style.overflow = "auto";
  };

  window.onclick = (event) => {
    if (event.target.id === "project") {
      closeModal();
    }
  };

  return (
    <div
      id="project"
      className={`bg-transparent ${props.modal ? "translate-y-0" : "-translate-y-full"} overflow-auto w-full h-full fixed top-0 left-0 z-50 transition duration-700 ease-in-out flex`}
    >
      {props.project && (
        <div className="bg-white h-fit relative w-[95%] m-auto px-8 py-14 flex flex-col lg:flex-row justify-center items-center rounded-xl">
          <p
            className="absolute right-4 top-1 font-firasans text-4xl cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </p>
          <img
            src={props.project.image}
            alt={props.project.name}
            className="w-96 mb-5 lg:mb-0 rounded-xl border-2"
          />
          <div className="ml-0 lg:ml-10 max-w-3xl w-full">
            <h3 className="font-firasans text-black text-sm mb-1">{props.project.tech}</h3>
            <h1 className="font-signika text-black text-2xl lg:text-3xl mb-1">
              {props.project.name}
            </h1>
            <p className="font-poppins text-sm font-medium mb-3">
              {props.project.desc}
            </p>
            <div className="flex items-center mt-2">
              <a
                href={props.project.code}
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-blue-600"
              >
                <img src={github} alt="github" className="w-6" />
                <p className="font-poppins">Github</p>
              </a>
              <a
                href={props.project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center ml-4"
              >
                <img src={globe} alt="globe" className="w-4" />
                <p className="ml-1 font-poppins">Live Link</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
