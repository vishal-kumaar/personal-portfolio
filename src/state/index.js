import React from "react";
import SidebarState from "./siderbar/SidebarState";
import ModalState from "./modal/ModalState";
import LoadingState from "./loading/LoadingState";

export default function State({ children }) {
  return (
    <SidebarState>
      <LoadingState>
        <ModalState>{children}</ModalState>
      </LoadingState>
    </SidebarState>
  );
}
