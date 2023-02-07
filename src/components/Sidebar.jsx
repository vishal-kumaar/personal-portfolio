import React from "react";

export default function Sidebar(props) {
  return (
    <aside
      style={{ backgroundColor: "#212428" }}
      className={`fixed top-0 left-0 h-screen w-[60vw] z-50 transition-transform  ${props.translate} ${props.display}`}
    ></aside>
  );
}
