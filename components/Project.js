"use client";

import React, {useContext} from "react";
import ModalContext from "../contexts/modal/ModalContext";
import ProjectContext from "../contexts/project/ProjectContext";
import Image from "next/image";

export default function Project() {
  const { modal, toggleModal } = useContext(ModalContext);
  const { project } = useContext(ProjectContext);

  return (
    <div
      className={`${
        modal ? "z-50 fixed top-0 left-0" : "-z-50 static"
      } bg-transparent/60 w-full h-full`}>
      <div
        id="project"
        className={`bg-transparent ${
          modal ? "translate-y-0" : "-translate-y-full"
        } overflow-auto w-full h-full fixed top-0 left-0 z-30 transition duration-700 ease-in-out flex`}>
        <div className="bg-white h-fit relative w-[95%] m-auto px-8 py-14 flex flex-col lg:flex-row justify-center items-center rounded-xl">
          <p
            className="absolute right-4 top-1 font-firasans text-4xl cursor-pointer"
            onClick={toggleModal}>
            &times;
          </p>
          <Image
            src={project.image}
            alt={project.name}
            height={0}
            width={384}
            className="w-96 mb-5 lg:mb-0 rounded-xl border-2"
          />
          <div className="ml-0 lg:ml-10 max-w-3xl w-full">
            <h3 className="font-firasans text-black text-sm mb-1">
              {project.tech}
            </h3>
            <h1 className="font-signika text-black text-2xl lg:text-3xl mb-1">
              {project.name}
            </h1>
            <p className="font-poppins text-sm font-medium mb-3">
              {project.desc}
            </p>
            <div className="flex items-center mt-2">
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-black hover:text-blue-600">
                <Image height={0} width={24} src="./images/github.svg" alt="github" className="w-6" />
                <p className="font-poppins">Github</p>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center ml-4 text-black hover:text-blue-600">
                <Image height={0} width={16} src="./images/globe.svg" alt="globe" className="w-4" />
                <p className="ml-1 font-poppins">Live Link</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
