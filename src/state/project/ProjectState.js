import React from "react";
import ProjectContext from "./ProjectContext";
import { useState } from "react";

export default function ProjectState({ children }) {
  const [project, setProject] = useState({});
  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
