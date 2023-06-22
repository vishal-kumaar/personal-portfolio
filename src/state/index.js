import React from "react";
import SidebarState from "./siderbar/SidebarState";
import ModalState from "./modal/ModalState";
import LoadingState from "./loading/LoadingState";
import ProjectState from "./project/ProjectState";

export default function State({ children }) {
  return (
    <SidebarState>
      <LoadingState>
        <ModalState>
          <ProjectState>{children}</ProjectState>
        </ModalState>
      </LoadingState>
    </SidebarState>
  );
}
