import passionImage from "../assets/images/Others/Passion.jpg";
import motivationImage from "../assets/images/Others/motivation.jpg";
import screensImage from "../assets/images/Others/screens.jpg";
import codingImage from "../assets/images/Others/coding.jpg";

export default function Home() {
  return (
    <main>
      <section id="welcome-section">
        {/* Introduction section */}
        <p className="intro-sentence">Hello, my name is</p>
        <h1>Louis Bertrand Ntwali.</h1>
        <p>
          I'm a <b>Computer Programming</b> student at Algonquin College.
        </p>
        <img
          src={passionImage}
          alt="Picture showing time and a programmer"
          id="motivation-image"
        />
        <p>
          I specialize in <b>software development</b>, and my hobbies include
          coding, exploring new technologies, and learning languages.
        </p>
      </section>
      <div className="images-holder">
        {/* Image gallery section */}
        <img src={motivationImage} alt="Motivation quote" className="images" />
        <img
          src={screensImage}
          alt="A picture of programs running on different screens"
          className="images"
        />
        <img src={codingImage} alt="Coding" className="images" />
      </div>
      <div className="button-container">
        {/* Button to navigate to projects page */}
        <a
          className="project-btns buttons"
          href="./projects.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          See My Work
        </a>
      </div>
    </main>
  );
}
