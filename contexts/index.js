"use client";

import React from "react";
import SidebarProvider from "./sidebar/SidebarProvider";
import ModalProvider from "./modal/ModalProvider";
import ProjectProvider from "./project/ProjectProvider";
import AnimateProvider from "./animate/AnimateProvider";

export default function Contexts({ children }) {
  return (
    <AnimateProvider>
      <SidebarProvider>
        <ModalProvider>
          <ProjectProvider>{children}</ProjectProvider>
        </ModalProvider>
      </SidebarProvider>
    </AnimateProvider>
  );
}
