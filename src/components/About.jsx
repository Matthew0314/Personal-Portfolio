import "../css/About.css";
import Headshot from "../assets/MatthewHolzer.png";

function About() {
  return (
    <section id="about">
        <div className="about">
            <h1 className="h2Outside">About Me</h1>
            <div className="aboutContainer">
                <div className="about-text">
                    <h1 className="h2Inside">About Me</h1>
                    <p>Hello! I’m Matthew Holzer, a software engineer and game developer who enjoys building interactive systems that combine strong technical foundations with thoughtful design. I recently graduated from The College of New Jersey with a B.S. in Computer Science and a minor in Digital and Creative Technology, where I developed experience across game development, full-stack software engineering, machine learning, and virtual reality.</p>
                    <p>Most recently, I worked on Leave The World Behind, where I designed and implemented core gameplay systems in Unity, including grid-based combat, enemy AI, animation systems, and overall game architecture. Outside of game development, I’ve built full-stack web applications using React and Spring Boot, conducted research in machine learning and computer vision for American Sign Language recognition, and developed virtual reality simulations for training and research.</p>
                    <p>I enjoy solving challenging technical problems and building systems that are both robust and engaging to use. Whether developing gameplay mechanics, designing backend systems, or experimenting with new technologies, I’m always looking for opportunities to learn, collaborate, and create software that leaves a lasting impact.</p>
                </div>
                <div className="about-image">
                    <img src={Headshot} alt="Matthew Holzer" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;