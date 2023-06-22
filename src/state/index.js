import React from "react";
import SidebarState from "./siderbar/SidebarState";
import ModalState from "./modal/ModalState";

export default function State({ children }) {
  return (
    <SidebarState>
      <ModalState>{children}</ModalState>
    </SidebarState>
  );
}
