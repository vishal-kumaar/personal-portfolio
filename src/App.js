import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [opacity, setOpacity] = useState("opacity-100");
  document.body.classList = "bg-black";

  const toggleSidebar = () => {
    if (sidebar === true) {
      setSidebar(false);
      setOpacity("opacity-100");
      document.body.style.overflow = "auto";
    } else {
      setSidebar(true);
      setOpacity("opacity-30");
      document.body.style.overflow = "hidden";
    }
  };

  window.addEventListener("click", (event) => {
    if (event.target.id === "sidebar") {
      toggleSidebar();
    }
  });

  return (
    <Router>
      <Navbar
        toggleSidebar={toggleSidebar}
        sidebar={sidebar}
        opacity={opacity}
      />
      <Sidebar toggleSidebar={toggleSidebar} sidebar={sidebar} />
      <Routes>
        <Route
          exect
          path="/"
          element={
            <>
              <Home opacity={opacity} />
              <Skills opacity={opacity} />
            </>
          }
        ></Route>
        <Route
          exect
          path="/projects"
          element={<Projects opacity={opacity} setOpacity={setOpacity} />}
        ></Route>
        <Route
          exect
          path="/blogs"
          element={<Blogs opacity={opacity} />}
        ></Route>
        <Route
          exect
          path="/contact"
          element={<Contact opacity={opacity} />}
        ></Route>
      </Routes>
      <Footer opacity={opacity} />
    </Router>
  );
}
export default App;
