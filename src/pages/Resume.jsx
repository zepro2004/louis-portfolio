export default function Resume() {
  return (
    <>
      <h1 className="resume-header">Resume</h1>

      {/* Contact Information section */}
      <section id="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Name: </strong>Louis Bertrand Ntwali
        </p>
        <p>
          <strong>Email: </strong>
          <a href="mailto:ntwa0004@algonquinlive.com" className="link">
            Email
          </a>
        </p>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/louis-bertrand-ntwali-118389312/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/zepro2004"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </section>

      {/* Summary section */}
      <section id="summary">
        <h2>Summary</h2>
        <p>
          I'm a Computer Programming student interested in developing efficient
          software solutions and managing databases. I aim to leverage my
          technical expertise in Java, Python, SQL, and web development to
          contribute to innovative projects and enhance business processes.
        </p>
      </section>

      {/* Skills section */}
      <section id="skills">
        <h2>PROGRAM-RELATED SKILLS</h2>
        <ul>
          <li>
            <b>Programming Languages:</b> Java, JavaScript, Python, SQL, PHP,
            HTML/CSS
          </li>
          <li>
            <strong>Database Management Systems:</strong> Oracle, MySQL,
            Microsoft SQL Server, PostgreSQL, Microsoft Access
          </li>
          <li>
            <strong>Software Tools:</strong>
            <ul>
              <li>Eclipse</li>
              <li>Visual Studio Code</li>
              <li>MySQL Workbench</li>
              <li>SQL Server Management Studio 2022</li>
              <li>Oracle SQL Developer</li>
              <li>VMWare Workstation</li>
              <li>XAMPP</li>
              <li>FileZilla</li>
              <li>Microsoft Office (Access, Word, Excel, PowerPoint)</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Experience section */}
      <section id="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            Wrote and maintained Java programs using Object-Oriented Principles.
          </li>
          <li>
            Created and maintained a Database both in Oracle and SQL Server
            using SQL codes.
          </li>
          <li>Analyzed and resolved program errors using debugging tools.</li>
          <li>
            Gained an understanding of operating systems and their interaction
            with hardware.
          </li>
          <li>Prepared technical reports and presentations.</li>
        </ul>
        <h2>Additional Experience</h2>
        <ul>
          <li>
            Strong communication skills in team settings and with managers.
          </li>
          <li>Efficient at optimizing code to improve performance.</li>
          <li>
            Comfortable working independently and in teams, contributing to over
            4 collaborative projects.
          </li>
          <li>Quick to learn new technologies and reduce learning time.</li>
          <li>Actively seek challenges to expand my programming knowledge.</li>
        </ul>
      </section>

      {/* Education section */}
      <section id="education">
        <h2>Education</h2>
        <div className="education-entry">
          <h3>Computer Programming Diploma</h3>
          <div className="school">
            <p>
              <strong>Algonquin College</strong> - Ottawa ON
            </p>
            <p>September 2024 - Present</p>
          </div>
          <ul>
            <li>GPA: 4.0 / 4.0</li>
            <li>Dean's List: Fall 2024</li>
            <li>
              Courses: Object-Oriented Programming (Java), Database (SQL), Web
              Programming (HTML, CSS, PHP, JavaScript), Operating Systems
              (Windows, Linux), Technical Writing
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
