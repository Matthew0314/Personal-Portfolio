import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PopupMenu from "../components/PopupMenu";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import ProjectInfo from "../components/ProjectInfo";
import Contact from "../components/Contact";
import titleImage from "../assets/GameGridHome.png";
import githubIcon from "../assets/GitHub.png";

function LTWB() {
    const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
    <ScrollToTop />
    
    <div>
        <Navbar toggleMenu={toggleMenu} />

        <PopupMenu
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        menuItems={ltwbMenu}
        />

        <main className={menuOpen ? "blur-background" : ""}>

        <Hero
            title="Leave The World Behind"
            subtitle="Tactical Role-Playing Game made in Unity"
            backgroundType="image"
            videoSrc={null}
            imageSrc={titleImage}
            links={[
            // {
            //     href: "https://www.youtube.com/watch?v=YPKEKS3-gpE",
            //     label: "Video Demo",
            //     icon: "",
            //     external: true
            // },
            {
                href: "https://github.com/Matthew0314/Where-The-Moon-Meets-The-Sun",
                label: "GitHub",
                icon: githubIcon,
                external: true
            }
            ]}
        />

        <section id="overview">
            <ProjectInfo
                title="Overview"
                description="Leave The World Behind is an independent project that I developed using Unity. Inspired by games such as Fire Emblem and Final Fantasy Tactics, this game has the player strategically maneuver their units to defeat opposing enemy units. Each map presents different objectives, such as routing all enemies, defeating the boss unit, or safely moving all units to the escape point."
                bulletPoints={[
                    "Designed algorithms that dictates where units can move and attack based on their stats.",
                    "Implemented a database that stores character and class statistics.",
                    "Integrated capabilities for units to execute attacks.",
                    "Developed a user interface allowing players to see the expected outcome of each action.",
                    "Designed unique enemy AI, allowing each opposing unit to determine the best action to take against the player.",
                    "Developed a tutorial level designed to teach the player the mechanics of the game."
                ]
                }
                videoSrc="https://www.youtube.com/embed/YPKEKS3-gpE?si=P8ol1u7EHKJXDWez"
                imageSrc={null}
                links={[null]}
                backgroundColor="var(--backColor2)"
            />
        </section>

        <section id="gameplay">
            <ProjectInfo
                title="Gameplay"
                description="Where the Moon Meets the Sun is a tactical role-playing game I’ve been developing in Unity since the fall of 2023. Inspired by games like Fire Emblem and Final Fantasy Tactics, the game features grid-based combat where players strategically maneuver their units to defeat enemy forces. Each map presents unique objectives, such as routing all enemies, defeating the boss unit, or safely moving all units to an escape point. A key gameplay mechanic is Command Points: instead of giving each unit a fixed set of actions per turn, players have a limited pool of points each turn, which they can spend to move units, attack, or perform other actions. Units also have Limits, powerful special moves unique to each character that can be used after filling a gauge through combat, and Arts, high-cost abilities that deal significant damage or effects but consume more Command Points. These gameplay mechanics encourages the player to think several moves ahead and adapt their tactics."
                bulletPoints={[null]}
                videoSrc={null}
                imageSrc={null}
                links={[null]}
                backgroundColor="var(--backColor1)"
            />
        </section>


        <section id="contact">
            <Contact />
        </section>

        

        </main>
    </div>
    </>
);
}
const ltwbMenu = [
{ label: "Overview", href: "#overview" },
{ label: "Gameplay", href: "#gameplay" },
{ label: "Contact", href: "#contact" }
];
export default LTWB;
