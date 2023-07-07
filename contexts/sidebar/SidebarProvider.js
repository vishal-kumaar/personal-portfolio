"use client";

import React, { useState } from "react";
import SidebarContext from "./SidebarContext";

export default function SidebarProvider({ children }) {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    if (sidebar) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  };

  if (typeof window !== "undefined") {
    window.onclick = (event) => {
      if (event.target.id === "sidebar") {
        toggleSidebar();
      }
    };
  }

  return (
    <SidebarContext.Provider value={{ sidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
