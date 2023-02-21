import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [opacity, setOpacity] = useState("opacity-100");
  document.body.classList = "bg-black";

  const toggleSidebar = () => {
    if (sidebar === true) {
      setSidebar(false);
      setOpacity("opacity-30");
    } else {
      setSidebar(true);
      setOpacity("opacity-100")
    }
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} sidebar={sidebar} opacity={opacity} />
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
        <Route exect path="/projects" element={<Projects opacity={opacity} />}></Route>
        <Route exect path="/blogs" element={<Blogs opacity={opacity} />}></Route>
      </Routes>
      <Footer opacity={opacity} />
    </Router>
  );
}

export default App;