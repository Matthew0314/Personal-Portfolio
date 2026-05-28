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
                    <p>Hello! I’m Matthew Holzer, an aspiring Video Game Developer passionate about creating interactive worlds that blend technology and creativity. I’m currently pursuing a B.S. in Computer Science with a minor in Digital and Creative Technology at The College of New Jersey, where I focus on game design, programming, and immersive technologies like virtual reality.</p>
                    <p>My work spans a variety of projects, from developing a VR-based CPR training simulator that teaches life-saving skills, to researching decision-making in virtual environments, to designing tactical RPG systems inspired by classics like Fire Emblem and Final Fantasy Tactics. These experiences have strengthened my skills in video game development and working on collaborative projects.</p>
                    <p>Outside of coursework, I serve as President of the Kappa Theta Pi Professional Technology Fraternity and am an active member of Association for Computing Machinery where I serve as Outreach Chair, and Digit.ALL. My goal as a Game Developer is to create games that challenge, inspire, and leave lasting impressions on players. I’m excited to continue growing as a developer and contribute to the future of gaming with innovative and engaging experiences.</p>
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