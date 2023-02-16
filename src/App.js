import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  document.body.classList = "bg-gradient-to-r from-sky-500 to-indigo-500";

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exect path="/" element={<Home />}></Route> 
        </Routes>
    </Router>
  );
}

export default App;