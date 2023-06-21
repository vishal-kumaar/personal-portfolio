import React, { useState } from "react";
import { projects } from "../utils/portfolio";
import Project from "./Project";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Projects(props) {
  const [isLoading, setLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  let page = Number(searchParams.get("page"));
  if (!page) {
    page = 1;
  }

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  };

  const openModal = (index) => {
    props.toggleModal();
    setProject(projects[index]);
  };

  useEffect(
    () => {
      searchParams.set("page", page);
      setSearchParams(searchParams);
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    handleLoading();
  }, [page]);

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
          <div className="mx-4 md:mx-10">
            <h1 className="mb-4 text-3xl font-signika text-black">
              Projects
            </h1>
            <hr className="border-black/40" />
            <div className="flex flex-wrap">
              {projects.length > 0 &&
                projects
                  .slice(6 * (page - 1), page * 6)
                  .map((project, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-[44%] lg:w-[28%] mx-4 sm:mx-[3%] lg:mx-[2.66%] mt-10 p-4 rounded-md bg-black/5 mb-4 shadow-2xl cursor-pointer hover:bg-black/20"
                      onClick={() => openModal(page - 1 + index)}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full rounded-md border-2"
                      />
                      <p className="mt-5 font-firasans text-sm text-black">
                        {project.tech}
                      </p>
                      <h1 className="font-signika text-xl mt-px">
                        {project.name}
                      </h1>
                    </div>
                  ))}
            </div>
            <Pagination totalPages={Math.ceil(projects.length / 6)} />
          </div>
        </div>
      )}
    </>
  );
}
