import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarDisplay, setSidebarDisplay] = useState("hidden");
  const [opacity, setOpacity] = useState("opaticy-100");
  const [translate, setTranslate] = useState("-translate-x-[20rem]");
  document.body.classList.add("bg-brownish")

  const toggleSidebar = () => {
    if (sidebarDisplay === "hidden"){
      setSidebarDisplay("block");
      setOpacity("opacity-30")
      setTranslate("translate-x-0");
      document.body.classList.add("bg-black");
      document.body.classList.remove("bg-brownish");
    }
    else {
      setSidebarDisplay("hidden");
      setOpacity("opacity-100");
      setTranslate("-translate-x-[20rem]");
      document.body.classList.add("bg-brownish");
      document.body.classList.remove("bg-black");
    }
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} opacity={opacity} sidebarDisplay={sidebarDisplay} />
      <Sidebar translate={translate} toggleSidebar={toggleSidebar}/>
      <Home opacity={opacity}/>
    </>
  );
}

export default App;