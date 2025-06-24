import projects from "../components/Projects";
import { useState } from "react";

export default function ProjectViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const project = projects[currentIndex];

  const nextProject = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
      );
      setFade(false);
    }, 500); // match your CSS transition time
  };

  const prevProject = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
      );
      setFade(false);
    }, 500);
  };

  return (
    <section id="projects">
      <h1 className="project-intro">Look at some of my projects</h1>
      <div className={`project-tile ${fade ? "fade-out" : ""}`}>
        <h2 id="project-title">{project.title}</h2>
        <p id="project-description">{project.description}</p>
        <p id="project-date">Date: {project.date}</p>
        <p id="technologies">
          <strong>Technologies: </strong>
          {project.technologies}
        </p>
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          id="project-link"
        >
          <img src={project.image} alt={project.title} id="project-image" />
        </a>
      </div>
      <div className="project-navigation">
        <button className="previous-project nav-button" onClick={prevProject}>
          Previous
        </button>
        <button className="next-project nav-button" onClick={nextProject}>
          Next
        </button>
      </div>
      <div className="button2-container">
        {/* Link to more projects */}
        <a
          id="profile-link"
          className="project-btns"
          href="https://github.com/zepro2004"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Projects
        </a>
      </div>
    </section>
  );
}
