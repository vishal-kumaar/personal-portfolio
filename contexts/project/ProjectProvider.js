'use client';

import React from "react";
import ProjectContext from "./ProjectContext";
import { useState } from "react";

export default function ProjectProvider({ children }) {
  const [project, setProject] = useState({});
  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
}