'use client';

import React from "react";
import SidebarProvider from "./sidebar/SidebarProvider";
import ModalProvider from "./modal/ModalProvider";
import ProjectProvider from "./project/ProjectProvider";

export default function Contexts({ children }) {
  return (
    <SidebarProvider>
        <ModalProvider>
          <ProjectProvider>{children}</ProjectProvider>
        </ModalProvider>
    </SidebarProvider>
  );
}