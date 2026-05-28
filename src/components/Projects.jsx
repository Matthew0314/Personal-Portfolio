import React, { useState } from "react";
import "../css/Projects.css";
import githubIcon from "../assets/GitHubTrans.png";
import projectImage from "../assets/GameGridHome.png";
import ratImage from "../assets/RatKyllHyde.png";
import vrImage from "../assets/CPRGame.png";
import { Link } from "react-router-dom";

function Projects() {
    return (
        <section id="projects">
            <div id="featured-projects" className="featured-projects-section">
                <h1 className="featured-projects-title">Featured Projects</h1>
                <div className="featured-projects-container">
                    {FCardData.map((FCard, index) => (
                        <FeaturedProjectsCard key={index} FCard={FCard} />
                    ))}
                </div>
            </div>

            <div className="projects-section" id="CodingProjects">
                <h1 className="section-title">Projects</h1>

                <div className="projects-grid">
                    {CCardData.map((p, i) => (
                    <ProjectCard key={i} project={p} />
                    ))}
                </div>
            </div>
        </section>

    )
}



function FeaturedProjectsCard({ FCard }) {
    return (
        <div className="featured-projects-card">
            <div className="image">
                <img src={FCard.image} alt={FCard.title} />
            </div>
            <div className="text">
                <h4>{FCard.title}</h4>
                <p>{FCard.description}</p>

                <div className="links">
                    {FCard.links?.map((link, index) => (
                        <a className="moreButton"
                            key={index}
                            href={link.href}
                            target={link.external ? "_blank" : "_self"}
                            rel={link.external ? "noopener noreferrer" : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                    {FCard.route && (
                        <Link to={FCard.route} className="moreButton">
                            View Project
                        </Link>
                        )}
                </div>
            </div>
        </div>
    );

}


function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <div className="project-title">
        {project.title}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="repo-link"
          >
            <img className="icon github-icon" src={githubIcon} alt="GitHub" />
          </a>
        )}
      </div>

      <div className="project-date">
        {project.date}
      </div>

      <div className="project-description">
        <ul>
          {project.description?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="tech-tags">
        {project.tech?.map((t, i) => (
          <span key={i} className="tech-tag">
            {t}
          </span>
        ))}
      </div>

    </div>
  );
}

const FCardData = [

    {
        title: "Leave The World Behind",
        route: "/LTWB",
        description: "Independent project developing a tactical role-playing game using Unity. Inspired by games such as Fire Emblem and Final Fantasy Tactics, this game has the player strategically maneuver their units to defeat opposing enemy units. Each map presents different objectives, such as routing all enemies, defeating the boss unit, or safely moving all units to the escape point.",
        links: [
            {
                href: "https://www.youtube.com/watch?v=YPKEKS3-gpE&feature=youtu.be",
                label: "Video Demo",
                external: true
            },
            {
                href: "https://github.com/Matthew0314/Where-The-Moon-Meets-The-Sun",
                label: "GitHub",
                external: true
            }
        ],
        image: projectImage
    },

    {
        title: "RatKyll and Hyde",
        description: "Worked with a five-person team that developed a local couch co-op multiplayer game in Unity set in a lively restaurant and kitchen environment. The game featured a single mode in which players competed to get as much food into a shared pot as possible while sabotaging each other, blending competitive and cooperative elements to create strategic and interactive gameplay. We implemented dynamic environmental interactions—such as hazards, scripted events, and physics-based challenges—while optimizing for a smooth, balanced shared-screen experience.",
        links: [
            { href: "https://youtube.com/watch?v=hu8W6fg3syw&feature=youtu.be", label: "Video Demo", external: true},
            { href: "https://github.com/Matthew0314/RatKyll-and-Hyde", label: "GitHub", external: true}
        ],
        image: ratImage
    },

    {
        title: "Virtual Reality CPR Simulator",
        description: "Collaborated with a team of four to create a virtual reality CPR training simulator using Unity and the Oculus Quest 2. The simulator provided an immersive environment for users to practice CPR techniques, featuring realistic patient models, interactive feedback on compression depth and rate, and various training scenarios. We implemented physics-based interactions for chest compression while optimizing performance for a smooth VR experience.",
        links: [
            { href: "https://youtube.com/watch?v=hu8W6fg3syw&feature=youtu.be", label: "Video Demo", external: true},
            { href: "https://github.com/Matthew0314/Virtual-Reality-CPR-Simulator", label: "GitHub", external: true}
        ],
        image: vrImage
    }
]




const CCardData = [
  {
    title: "LeGalBTQ",
    date: "February 2025",
    github: "https://github.com/Matthew0314/LeGalBTQ-S25-MH",
    description: [
      "Built a secure full-stack web application using Ruby on Rails and PostgreSQL to inform LGBTQ+ individuals of legal rights and connect them with LGBTQ+ friendly lawyers.",
      "Enabled case reporting and lawyer matching features, allowing clients to describe incidents and be connected with lawyers who specialize in LGBTQ+ legal issues.",
      "Created a searchable and filterable database of legislation relating to LGBTQ+ issues by state, enabling users to stay informed on relevant legal developments."
    ],
    tech: ["Ruby", "Git", "PostgreSQL"]
  },

  {
    title: "WebScraper Program",
    date: "November 2024",
    github: "https://github.com/Matthew0314/BestBuy-Web-Scrapper",
    description: [
      "Developed a Python web scraper to analyze the credibility of BestBuy product reviews.",
      "Utilized Selenium WebDriver to automate site navigation and data extraction.",
      "Implemented review analysis to assess authenticity and user sentiment.",
      "Demonstrated expertise in web automation, data scraping, and content evaluation."
    ],
    tech: ["Python", "Selenium"]
  },

  {
    title: "ClickCanvas",
    date: "December 2024",
    github: "https://github.com/JeffreyErnest/HCI_Project",
    description: [
      "Designed an innovative drawing application enabling users to draw using nose or hand movements.",
      "Utilized computer vision techniques to detect facial landmarks and hand gestures for hands-free interaction.",
      "Built with Python, integrating graphics and image processing libraries for real-time tracking."
    ],
    tech: ["Python", "MediaPipe"]
  },

    {
        title: "Command Line Shell Interface",
        date: "February 2024",
        description: [
            "Developed a custom command-line shell in C with dynamic directory-aware prompts.",
            "Implemented process creation, command execution, and directory navigation.",
            "Added support for input/output redirection and inter-process communication via pipes.",
            "Integrated command history functionality for efficient user interaction."
        ],
        tech: ["C", "Linux"]
    },
    {
        title: "Command Line Chat Room",
        date: "April 2024",
        description: [
            "Developed a multi-client command-line chat application using sockets for real-time communication.",
            "Implemented chat rooms with user-defined names, client color-coding, and server-managed room allocation.",
            "Designed a server capable of broadcasting messages, tracking connected clients, and handling dynamic chat rooms.",
            "Ensured smooth client connections, disconnections, and room selection with an intuitive user interface."
        ],
        tech: ["C", "Linux", "Socket Programming"]
    },
    {
        title: "Hackathon Scheduler",
        date: "February 2025",
        description: [
            "Developed a Ruby-based Scheduler application to automate room scheduling for university events, considering constraints like capacity, availability, and room type.",
            "Implemented file handling with Ruby’s CSV library to read and write room reservation data, and designed algorithms for generating scheduling plans based on user input.",
            "Ensured scheduling constraints, such as room size, computer availability, and proximity, were met for event planning, outputting results in CSV format.",
            "Demonstrated the application’s functionality in a technical review, highlighting design decisions and efficient problem-solving approaches."
        ],
        tech: ["Ruby", "Git", "Linux"]
    }



];

export default Projects;