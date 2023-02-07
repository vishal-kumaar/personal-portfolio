import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  document.body.style.backgroundColor = "#212428";
  const [sidebarDisplay, setSidebarDisplay] = useState("hidden");
  const [opacity, setOpacity] = useState("opaticy-100");
  const [translate, setTranslate] = useState("-translate-x-[60vw]");

  const toggleSidebar = () => {
    if (sidebarDisplay === "hidden"){
      setSidebarDisplay("block");
      setOpacity("opacity-30")
      setTranslate("translate-x-0")
    }
    else {
      setSidebarDisplay("hidden");
      setOpacity("opacity-100");
      setTranslate("-translate-x-[60vw]");
    }
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} opacity={opacity}/>
      <Sidebar display={sidebarDisplay} translate={translate} />
      <Home opacity={opacity}/>
    </>
  );
}

export default App;