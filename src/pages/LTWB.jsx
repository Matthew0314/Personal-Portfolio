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
            {
                href: "https://www.youtube.com/watch?v=YPKEKS3-gpE&feature=youtu.be",
                label: "Video Demo",
                icon: "",
                external: true
            },
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
                description={
                    <>
                        <p>
                            <i>Leave The World Behind</i> is an independent project developed in Unity and inspired by games such as <i>Fire Emblem</i> and <i>Final Fantasy Tactics</i>. Players strategically maneuver their units across grid-based battlefields to complete objectives such as defeating enemy forces, eliminating boss units, or escorting allies to safety.
                        </p>

                        <p>
                            As the sole programmer, I designed and implemented the game's core gameplay systems, including:
                        </p>

                        <ul>
                            <li>Grid-based movement and combat algorithms.</li>
                            <li>Character, class, and stat management systems.</li>
                            <li>Combat execution and battle calculations.</li>
                            <li>User interfaces displaying combat forecasts and player information.</li>
                            <li>Modular enemy AI with interchangeable behaviors.</li>
                            <li>Tutorial systems introducing players to core mechanics.</li>
                            <li>Gameplay-driven battle cutscenes and combat animations.</li>
                        </ul>
                    </>
                }
                videoSrc="https://www.youtube.com/embed/YPKEKS3-gpE?si=P8ol1u7EHKJXDWez"
                backgroundColor="var(--backColor2)"
            />
        </section>

        <section id="gameplay">
            <ProjectInfo
                title="Gameplay"
                description={
                    <>
                        <p>
                            <i>Leave The World Behind</i> features tactical, grid-based combat where positioning, resource management, and long-term planning are key to success. Each battle presents unique objectives, encouraging players to adapt their strategy rather than relying on a single approach.
                        </p>

                        <p>
                            Some of the core gameplay systems include:
                        </p>

                        <ul>
                            <li><strong>Command Points:</strong> A shared resource that players spend to move, attack, and perform actions each turn.</li>
                            <li><strong>Limits:</strong> Powerful character-specific abilities that become available after filling a combat gauge.</li>
                            <li><strong>Arts:</strong> High-cost abilities that provide powerful offensive and defensive options.</li>
                            <li><strong>Objective-Based Maps:</strong> Battles feature varied win conditions including defeating bosses, routing enemies, and escape missions.</li>
                        </ul>

                        <p>
                            Together these systems encourage players to carefully manage resources while planning several turns ahead.
                        </p>
                    </>
                }
                backgroundColor="var(--backColor1)"
            />
        </section>

        {/* <section id="enemy-ai">
            <ProjectInfo
                title="Enemy AI"
                description="Enemy AI is a crucial aspect of Leave The World Behind, as it determines how the opposing forces react to the player's actions. Each enemy unit has its own unique AI behavior, which are implemented as interchangable components. Enemies use A* pathfinding to navigate the battle field, evaluate movement options, and select targets based on their assigned bahvior. These behaviors include aggressive, passive, tracking, and attack-in-range strategies. The AI takes into account factors such as unit health, positioning, and available actions to determine the best course of action for each enemy unit. This creates a dynamic and challenging experience for players, as they must adapt their strategies to counter the enemy's tactics."
                bulletPoints={[null]}
                videoSrc={null}
                imageSrc={null}
                links={[null]}
                backgroundColor="var(--backColor2)"
            />
        </section> */}
        <section id="enemy-ai">
            <ProjectInfo
                title="Enemy AI"
                description={
                    <>
                        <p>
                            Enemy behavior is driven by a modular AI framework designed to create varied and engaging combat encounters. Rather than relying on a single hardcoded behavior, each enemy uses interchangeable AI components that determine how it reacts to the current battlefield.
                        </p>

                        <ul>
                            <li>Implemented A* pathfinding for intelligent battlefield navigation.</li>
                            <li>Created interchangeable AI behaviors including Aggressive, Passive, Tracker, and Attack-in-Range strategies.</li>
                            <li>Enemies evaluate movement options before selecting the most effective action.</li>
                            <li>Target selection considers factors such as positioning, available attacks, and battlefield state.</li>
                            <li>New enemy behaviors can be added without modifying the core AI framework.</li>
                        </ul>

                        <p>
                            This modular architecture allows encounters to remain varied while keeping the codebase maintainable and easy to extend.
                        </p>
                    </>
                }
                backgroundColor="var(--backColor2)"
            />
        </section>

        {/* <section id="Technical_Challenges">
            <ProjectInfo
                title="Enemy AI"
                description="One of the biggest challenges was designing systems that could continue to grow as new mechanics were introduced. Instead of writing one-off solutions for individual levels, I focused on creating modular systems that could be reused throughout the game.

                For example, enemy behavior is built around interchangeable AI implementations rather than hardcoded logic, allowing encounters to be customized simply by assigning different behaviors. Similarly, combat, movement, and map management are separated into dedicated systems, making it easier to introduce new mission types, abilities, and gameplay mechanics without modifying large portions of the codebase.

                This approach has made the project significantly easier to maintain while supporting continued development."
                bulletPoints={[null]}
                videoSrc={null}
                imageSrc={null}
                links={[null]}
                backgroundColor="var(--backColor2)"
            />
        </section> */}

        <section id="technical-challenges">
            <ProjectInfo
                title="Technical Challenges"
                description={
                    <>
                        <p>
                            One of the biggest challenges during development was designing gameplay systems that could continue to scale as new mechanics were introduced. Rather than writing one-off solutions for individual maps, I focused on creating modular systems that could be reused throughout the project.
                        </p>

                        <ul>
                            <li>Separated combat, movement, AI, and map logic into independent systems.</li>
                            <li>Designed interchangeable AI behaviors instead of hardcoded enemy logic.</li>
                            <li>Built reusable gameplay frameworks that support future maps, abilities, and mission types.</li>
                            <li>Focused on maintainable code that allows new mechanics to be added with minimal changes to existing systems.</li>
                        </ul>

                        <p>
                            This modular architecture has made the project significantly easier to maintain while supporting continued expansion as development progresses.
                        </p>
                    </>
                }
                backgroundColor="var(--backColor1)"
            />
        </section>

        <section id="future-work">
            <ProjectInfo
                title="Future Work"
                description={
                    <>
                        <p>
                            <i>Leave The World Behind</i> continues to evolve as I expand both its gameplay systems and narrative. While the current implementation provides a strong technical foundation, I plan to continue refining existing mechanics and introducing new features to create a deeper tactical experience.
                        </p>

                        <ul>
                            <li>Expand enemy AI with additional behavior types and improved tactical decision-making.</li>
                            <li>Implement new character classes, abilities, and status effects.</li>
                            <li>Add terrain mechanics, environmental hazards, and interactive map elements.</li>
                            <li>Develop more cinematic battle cutscenes and story-driven gameplay sequences.</li>
                            <li>Introduce additional mission objectives, side content, and playable chapters.</li>
                            <li>Continue balancing combat systems through playtesting and player feedback.</li>
                        </ul>

                        <p>
                            As development continues, my primary focus remains building scalable gameplay systems that make it easier to introduce new mechanics while maintaining a clean and reusable codebase.
                        </p>
                    </>
                }
                backgroundColor="var(--backColor2)"
            />
        </section>

        <Contact backgroundColor="var(--backColor1)" />

        

        </main>
    </div>
    </>
);
}
const ltwbMenu = [
{ label: "Overview", href: "#overview" },
{ label: "Gameplay", href: "#gameplay" },
{ label: "Enemy AI", href: "#enemy-ai" },
{ label: "Technical Challenges", href: "#technical-challenges" },
{ label: "Future Work", href: "#future-work" },
{ label: "Contact", href: "#contact" }
];
export default LTWB;
