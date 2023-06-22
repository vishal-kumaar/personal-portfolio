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
import State from "./state";

function App() {
  const [modal, setModal] = useState(false);
  document.body.classList = "bg-black";

  const scroll = () => {
    window.scroll({
      top: 0,
      behavior: "auto",
    });
  };

  const toggleModal = () => {
    if (modal === true) {
      setModal(false);
      document.body.style.overflow = "auto";
    } else {
      setModal(true);
      document.body.style.overflow = "hidden";
    }
  };

  window.onclick = (event) => {
    if (event.target.id === "project") {
      toggleModal();
    }
  };

  return (
    <State>
      <Router>
        <Sidebar scroll={scroll} />
        <div
          className={`flex flex-col min-h-screen transition-opacity ease-in-out duration-500`}
        >
          <div className="flex-grow bg-white">
            <Navbar scroll={scroll} />
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
    </State>
  );
}
export default App;
