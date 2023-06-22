import React, { useState } from "react";
import { projects } from "../utils/portfolio";
import Project from "./Project";
import Pagination from "./Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import NoResultFound from "./NoResultFound";
import { useContext } from "react";
import ModalContext from "../state/modal/ModalContext";

export default function Projects() {
  const { toggleModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [searchParams] = useSearchParams();
  let page = Number(searchParams.get("page"));

  if (!page || page < 0) {
    navigate("?page=1", { replace: true });
  }

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  };

  useEffect(() => {
    handleLoading();
  }, [page]);

  if (projects.length === 0) {
    return <NoResultFound />;
  }

  const numOfProjectsInPage = 6;

  const projectObj = projects.slice(
    numOfProjectsInPage * (page - 1),
    page * numOfProjectsInPage
  );

  if (projectObj.length === 0) {
    return <NoResultFound />;
  }

  return (
    <>
      <Project project={project} />
      {isLoading ? (
        <div className="py-14"></div>
      ) : (
        <div className={`py-14`}>
          <div className="mx-4 md:mx-10">
            <h1 className="mb-4 text-3xl font-signika text-black">Projects</h1>
            <hr className="border-black/40" />
            <div className="flex flex-wrap">
              {projectObj.map((project, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[44%] lg:w-[28%] mx-4 sm:mx-[3%] lg:mx-[2.66%] mt-10 p-4 rounded-md bg-black/5 mb-4 shadow-2xl cursor-pointer hover:bg-black/20"
                  onClick={() => {
                    toggleModal();
                    setProject(
                      projects[(page - 1) * numOfProjectsInPage + index]
                    );
                  }}
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
            <Pagination totalPages={Math.ceil(projects.length / 6)} />
          </div>
        </div>
      )}
    </>
  );
}
