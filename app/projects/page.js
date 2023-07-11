"use client";
import React, { useContext, useEffect } from "react";
import { user, pageDescriptions, projects } from "../../utils/portfolio";
import Pagination from "../../components/Pagination";
import NoResultFound from "../../components/NoResultFound";
import ModalContext from "../../contexts/modal/ModalContext";
import ProjectContext from "../../contexts/project/ProjectContext";
import { useSearchParams, redirect } from "next/navigation";
import Image from "next/image";

export default function Projects() {
  const { setProject } = useContext(ProjectContext);
  const { toggleModal } = useContext(ModalContext);
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="description"]');
    document.title = `Projects | ${user.name}`;
    metaTag.setAttribute('content', pageDescriptions.projects);
  }, []);

  useEffect(() => {
    if (!page || page <= 0) {
      redirect("?page=1");
    }
  }, [page]);

  if (!page) {
    return null;
  }

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
                setProject(projects[(page - 1) * numOfProjectsInPage + index]);
              }}>
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={0}
                className="w-full rounded-md border-2"
              />
              <p className="mt-5 font-firasans text-sm text-black line-clamp-1">
                {project.tech}
              </p>
              <h1 className="font-signika text-xl mt-px line-clamp-1">{project.name}</h1>
            </div>
          ))}
        </div>
        <Pagination
          totalPages={Math.ceil(projects.length / numOfProjectsInPage)}
        />
      </div>
    </div>
  );
}
