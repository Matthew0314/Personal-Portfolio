import React, { useState } from "react";
import "../css/Contact.css";
import resumeIcon from "../assets/ResumeIcon.png";
import githubIcon from "../assets/GitHub.png";
import linkedinIcon from "../assets/LinkedIN.png";
import emailIcon from "../assets/Email.png";

function Contact() {
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <div className="icons" >
                <a href="MatthewHolzerResume.pdf" target="_blank">
                    <div className="iconContainer" >
                        <img src={resumeIcon} alt="Resume Icon"></img>
                    </div>
                </a>
                <a href="https://github.com/Matthew0314" target="_blank">
                    <div className="iconContainer" >
                        <img src={githubIcon} alt="GitHub Icon"></img>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/matthewholzer314/" target="_blank">
                    <div className="iconContainer" >
                        <img src={linkedinIcon} alt="LinkedIn Icon"></img>
                    </div>
                </a>
                <a href="mailto:matthewh314@gmail.com">
                    <div className="iconContainer">
                        <img src={emailIcon} alt="Email Icon"></img>
                    </div>
                </a>
            </div>
        </div>
    )

}

export default Contact;