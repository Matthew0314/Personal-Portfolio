import { useState } from "react";
import "./App.css";
import "./index.css";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import PopupMenu from "./components/PopupMenu";
import Hero from "./components/Hero";
import videoFile from "./assets/WebsiteVideo.mp4";
import resumeIcon from "./assets/ResumeIcon.png";
import githubIcon from "./assets/GitHub.png";
import linkedinIcon from "./assets/LinkedIN.png";
import emailIcon from "./assets/Email.png";
import projectImage from "./assets/GameGridHome.png";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

import LTWB from "./pages/LTWB";
import Home from "./pages/Home";

function App() {
  

  return (
    <>
    <ScrollToTop />

    <Routes>
      
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/LTWB"
        element={<LTWB />}
      />

    </Routes>

    </>
  );
}


export default App;