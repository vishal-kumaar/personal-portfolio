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
  document.body.classList = "bg-gradient-to-r from-sky-500 to-indigo-500";

  const toggleSidebar = () => {
    if (sidebar === true) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} sidebar={sidebar} />
      <Sidebar toggleSidebar={toggleSidebar} sidebar={sidebar} />
      <Routes>
        <Route
          exect
          path="/"
          element={
            <>
              <Home />
              <Skills />
            </>
          }
        ></Route>
        <Route exect path="/projects" element={<Projects />}></Route>
        <Route exect path="/blogs" element={<Blogs />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
