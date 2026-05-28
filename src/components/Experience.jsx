import "../css/Experience.css";
import { useState } from "react";

function Experience() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="experience-section">
      <h1 className="experience-title">Experience</h1>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
}


function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  return (
    

    <div id="experience" className="experience-timeline-item">
      <div
        className="experience-card"
        onClick={() => setOpen(!open)}
      >
        <div className="experience-header">

          <div className="experience-title-group">
            <h2>{exp.title}</h2>
            <h3>{exp.company}</h3>
          </div>

          <div className="experience-date">
            {exp.date}
          </div>

        </div>
      </div>

      <div
        className="experience-dropdown"
        style={{
          maxHeight: open ? "500px" : "0px"
        }}
      >
        <div className="Experience-Wrapper">
            <ul>
            {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
            </ul>

            <div className="experience-skills">
            {exp.skills.map((skill, i) => (
                <span key={i} className="experience-skill-tag">
                {skill}
                </span>
            ))}
            </div>
        </div>
      </div>

    </div>
  );
}

const experiences = [

{
    title: "Undergraduate Researcher - Machine Learning",
    company: "The College of New Jersey",
    date: "Aug. 2025 - May. 2026",
    description: [
      "Conducting undergraduate research in Human-Computer to enhance an American Sign Language (ASL) recognition system using Google MediaPipe.",
      "Expanding recognition capabilities to include two-handed signs.",
      "Improving existing detection features for greater accuracy and reliability.",
      "Designing and implementing a comprehensive testing process to evaluate system performance."
    ],
    skills: ["Machine Learning", "Python", "Data Analysis", "Computer Vision", "Research"]
  },

  {
    title: "Computer Science Peer Mentor",
    company: "The College of New Jersey",
    date: "Aug. 2024 - May. 2026",
    description: [
      "Assisted students during lectures and labs with topics such as variables, control structures, object-oriented programming, and basic algorithms.",
      "Collaborated with course instructors to deliver targeted in-class and lab assistance tailored to student needs.",
      "Enhanced personal expertise in computer science topics through teaching and peer collaboration."
    ],
    skills: ["Java", "Object-Oriented Programming (OOP)", "Technical Communication"]
  },

  {
    title: "Undergraduate Researcher – Virtual Reality",
    company: "The College of New Jersey",
    date: "Jan. 2024 – May. 2025",
    description: [
      "Conducted undergraduate research in Virtual Reality, focusing on moral decision-making in a virtual environment.",
      "Designed and developed a Unity-based VR simulation to study ethical choices using the Trolley Problem framework.",
      "Explored the impact of avatar characteristics (animated vs. static) on participants’ empathy and decision-making.",
      "Researched ethical theories including utilitarianism and deontology to inform simulation design and experimental methodology.",
      "Created reusable, well-structured simulation code to be used by future research students for participant testing.",
      "Gained experience in project planning, pseudo-coding, and iterative prototyping within a collaborative research environment."
    ],
    skills: ["Unity", "C#", "Virtual Reality", "Research"]
  },

  {
    title: "Fraternity President",
    company: "Kappa Theta Pi Professional Technology Fraternity",
    date: "May. 2024 – May. 2025",
    description: [
      "Presided over organizational meetings and guided strategic planning for the semester.",
      "Set vision, mission, and goals while representing the organization to campus and national leadership.",
      "Managed and coordinated a team of 18 executive board members to execute initiatives effectively.",
      "Revamped the rush/pledge process, resulting in a measurable increase in new member recruitment.",
      "Expanded social events and campus involvement to strengthen community, engagement, and belonging.",
      "Collaborated with national organization leadership on policy, programming, and organizational alignment."
    ],
    skills: ["Leadership","Team Management", "Event Coordination", "Communication"]
  },

  

  
];

export default Experience;