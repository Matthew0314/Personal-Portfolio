import { useState } from "react";
import "../App.css";
import "../index.css";

import ScrollToTop from "../components/ScrollToTop";

import Navbar from "../components/Navbar";
import PopupMenu from "../components/PopupMenu";
import Hero from "../components/Hero";
import videoFile from "../assets/WebsiteVideo.mp4";
import resumeIcon from "../assets/ResumeIcon.png";
import githubIcon from "../assets/GitHub.png";
import linkedinIcon from "../assets/LinkedIN.png";
import emailIcon from "../assets/Email.png";
import projectImage from "../assets/GameGridHome.png";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <ScrollToTop />
        {/* <h1>App</h1> */}
        <Navbar toggleMenu={toggleMenu} />

        <PopupMenu
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        menuItems={homeMenu}
        />

        <main className={menuOpen ? "blur-background" : ""}>

        <Hero
            title="Matthew Holzer"
            subtitle="Game Developer & Software Engineer"
            backgroundType="video"
            videoSrc={videoFile}
            links={[
            {
                href: "MatthewHolzerResume.pdf",
                label: "Resume",
                icon: resumeIcon,
                external: true
            },
            {
                href: "https://github.com/matthewholzer",
                label: "GitHub",
                icon: githubIcon,
                external: true
            },
            {
                href: "https://www.linkedin.com/in/matthewholzer314",
                label: "LinkedIn",
                icon: linkedinIcon,
                external: true
            },
            {
                href: "mailto:matthewh314@gmail.com",
                label: "Email",
                icon: emailIcon
            }
            
            ]}
        />

        <About />
        <Experience />
        <Projects />
        <Contact />

        </main>
        </>
        );

}

const homeMenu = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

export default Home;