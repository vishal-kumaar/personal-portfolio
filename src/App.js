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
import PageNotFound from "./components/PageNotFound";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [opacity, setOpacity] = useState("opacity-100");
  const [modal, setModal] = useState(false);
  document.body.classList = "bg-black";

  const scroll = () => {
    window.scroll({
      top: 0,
      behavior: "auto",
    });
  };

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

  const toggleModal = () => {
    if (modal === true) {
      setModal(false);
      document.body.style.overflow = "auto";
      setOpacity("opacity-100");
    } else {
      setModal(true);
      document.body.style.overflow = "hidden";
      setOpacity("opacity-30");
    }
  };

  window.onclick = (event) => {
    if (event.target.id === "sidebar") {
      toggleSidebar();
    } else if (event.target.id === "project") {
      toggleModal();
    }
  };

  return (
    <Router>
      <Sidebar
        toggleSidebar={toggleSidebar}
        sidebar={sidebar}
        scroll={scroll}
      />
      <div className={`flex flex-col ${opacity} min-h-screen  transition-opacity ease-in-out duration-500`}>
        <div className="flex-grow bg-white">
          <Navbar
            toggleSidebar={toggleSidebar}
            sidebar={sidebar}
            scroll={scroll}
          />
        </div>
        <div className="flex-grow flex flex-col bg-white">
          <Routes>
            <Route exect path="*" element={<PageNotFound />}></Route>
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
            <Route
              exect
              path="/projects"
              element={<Projects modal={modal} toggleModal={toggleModal} />}
            ></Route>
            <Route exect path="/blogs" element={<Blogs />}></Route>
            <Route exect path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
