export default function About() {
  const aboutPageStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1rem',
    boxSizing: 'border-box'
  };

  const aboutHeaderStyles = {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: 'var(--primary-color)',
    marginBottom: '2rem'
  };

  const aboutContentStyles = {
    maxWidth: 'var(--container-lg)',
    width: '100%'
  };

  const heroSectionStyles = {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '2rem',
    background: 'var(--bg-section)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-lg)'
  };

  const heroTextStyles = {
    fontSize: '1.3rem',
    lineHeight: '1.6',
    color: 'var(--text-primary)',
    marginBottom: '1.5rem'
  };

  const sectionStyles = {
    marginBottom: '3rem'
  };

  const sectionHeadingStyles = {
    fontSize: '1.8rem',
    color: 'var(--primary-color)',
    marginBottom: '1.5rem',
    borderBottom: '2px solid var(--primary-color)',
    paddingBottom: '0.5rem'
  };

  const skillsCategoryStyles = {
    marginBottom: '2rem'
  };

  const skillsCategoryTitleStyles = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: 'var(--text-primary)',
    marginBottom: '1rem'
  };

  const skillsListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem',
    marginBottom: '1rem'
  };

  const skillTagStyles = {
    backgroundColor: '#e9ecef',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#495057',
    border: '1px solid #dee2e6'
  };

  const skillTagAdvancedStyles = {
    backgroundColor: 'var(--primary-color)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#1a1a1a',
    border: '1px solid var(--primary-dark)',
    fontWeight: '500'
  };

  const skillTagIntermediateStyles = {
    backgroundColor: 'var(--accent-color)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#1a1a1a',
    border: '1px solid var(--accent-secondary)',
    fontWeight: '500'
  };

  const skillTagBeginnerStyles = {
    backgroundColor: 'var(--text-muted)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
    fontWeight: '500'
  };

  const skillDescriptionStyles = {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    marginTop: '0.5rem',
    fontStyle: 'italic'
  };

  const achievementListStyles = {
    listStyle: 'none',
    padding: 0
  };

  const achievementItemStyles = {
    padding: '1rem',
    marginBottom: '1rem',
    background: 'var(--bg-section)',
    borderRadius: '8px',
    borderLeft: '4px solid var(--primary-color)',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-md)'
  };

  const valueListStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  };

  const valueItemStyles = {
    textAlign: 'center',
    padding: '1.5rem',
    background: 'var(--bg-section)',
    borderRadius: '12px',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-md)'
  };

  const valueIconStyles = {
    fontSize: '2rem',
    marginBottom: '1rem'
  };

  const linkStyles = {
    color: 'var(--primary-color)',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <div style={aboutPageStyles}>
      <h1 style={aboutHeaderStyles}>About Me</h1>
      
      <div style={aboutContentStyles}>
        {/* Hero Section */}
        <section style={heroSectionStyles}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              color: 'white',
              boxShadow: 'var(--shadow-lg)'
            }}>
              👨‍💻
            </div>
            <div style={{ textAlign: 'left', flex: 1, minWidth: '300px' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                color: 'var(--primary-color)', 
                marginBottom: '0.5rem',
                fontWeight: 'var(--font-bold)'
              }}>
                Louis Bertrand Ntwali
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'var(--accent-color)', 
                marginBottom: '0.5rem',
                fontWeight: 'var(--font-medium)'
              }}>
                Computer Programming Student & Aspiring Software Engineer
              </p>
              <p style={{ 
                fontSize: '1rem', 
                color: 'var(--text-secondary)',
                fontStyle: 'italic'
              }}>
                📍 Ottawa, ON | 🎓 Algonquin College | 🌟 Dean's List Student
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '1.5rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎯</div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Mission</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                Creating innovative software solutions that make a positive impact
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '1.5rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💡</div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Vision</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                Becoming a full-stack engineer who bridges technology and user experience
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '1.5rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🚀</div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Passion</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                Exploring emerging technologies and solving complex challenges
              </p>
            </div>
          </div>

          <p style={heroTextStyles}>
            I'm a Computer Programming student at Algonquin College with a strong interest in building software that’s practical, reliable, and easy to use. I first got into programming out of curiosity; wanting to understand how things work behind the scenes. That interest quickly grew into a passion for creating tools that solve real problems.
          </p>
          <p style={heroTextStyles}>
            I approach development with both technical and user experience in mind. I enjoy writing clean, maintainable code and thinking through how people will actually use what I build. I'm comfortable working in teams, breaking down complex requirements, and learning new technologies as I go.
          </p>
          <p style={heroTextStyles}>
            Beyond academics, I’m building a well-rounded portfolio, contributing to open source, and supporting other students in their learning. I believe good software should be accessible and purposeful, and that principle guides the work I do.
          </p>
          
          {/* Enhanced Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-section) 100%)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'var(--font-bold)', 
                color: 'var(--primary-color)',
                marginBottom: '0.5rem'
              }}>3.98</div>
              <div style={{ 
                fontSize: 'var(--text-sm)', 
                color: 'var(--text-secondary)',
                fontWeight: 'var(--font-medium)'
              }}>Current GPA</div>
              <div style={{ 
                fontSize: 'var(--text-xs)', 
                color: 'var(--text-muted)',
                marginTop: '0.25rem'
              }}>Dean's List</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'var(--font-bold)', 
                color: 'var(--primary-color)',
                marginBottom: '0.5rem'
              }}>6+</div>
              <div style={{ 
                fontSize: 'var(--text-sm)', 
                color: 'var(--text-secondary)',
                fontWeight: 'var(--font-medium)'
              }}>Projects Built</div>
              <div style={{ 
                fontSize: 'var(--text-xs)', 
                color: 'var(--text-muted)',
                marginTop: '0.25rem'
              }}>Full Stack Apps</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'var(--font-bold)', 
                color: 'var(--primary-color)',
                marginBottom: '0.5rem'
              }}>2+</div>
              <div style={{ 
                fontSize: 'var(--text-sm)', 
                color: 'var(--text-secondary)',
                fontWeight: 'var(--font-medium)'
              }}>Years Coding</div>
              <div style={{ 
                fontSize: 'var(--text-xs)', 
                color: 'var(--text-muted)',
                marginTop: '0.25rem'
              }}>& Learning</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'var(--font-bold)', 
                color: 'var(--primary-color)',
                marginBottom: '0.5rem'
              }}>10+</div>
              <div style={{ 
                fontSize: 'var(--text-sm)', 
                color: 'var(--text-secondary)',
                fontWeight: 'var(--font-medium)'
              }}>Technologies</div>
              <div style={{ 
                fontSize: 'var(--text-xs)', 
                color: 'var(--text-muted)',
                marginTop: '0.25rem'
              }}>& Frameworks</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'var(--font-bold)', 
                color: 'var(--primary-color)',
                marginBottom: '0.5rem'
              }}>200+</div>
              <div style={{ 
                fontSize: 'var(--text-sm)', 
                color: 'var(--text-secondary)',
                fontWeight: 'var(--font-medium)'
              }}>GitHub Commits</div>
              <div style={{ 
                fontSize: 'var(--text-xs)', 
                color: 'var(--text-muted)',
                marginTop: '0.25rem'
              }}>This Year</div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section style={sectionStyles}>
          <h2 style={sectionHeadingStyles}>Technical Skills</h2>
          
          <div style={skillsCategoryStyles}>
            <h3 style={skillsCategoryTitleStyles}>Programming Languages</h3>
            <div style={skillsListStyles}>
              <span style={skillTagAdvancedStyles}>Java</span>
              <span style={skillTagAdvancedStyles}>JavaScript (ES6+)</span>
              <span style={skillTagAdvancedStyles}>Dart</span>
              <span style={skillTagAdvancedStyles}>SQL</span>
              <span style={skillTagAdvancedStyles}>HTML5/CSS3</span>
              <span style={skillTagIntermediateStyles}>Python</span>
              <span style={skillTagIntermediateStyles}>PHP</span>
              <span style={skillTagIntermediateStyles}>TypeScript</span>
              <span style={skillTagBeginnerStyles}>C#</span>
            </div>
            <p style={skillDescriptionStyles}>
              Expert in object-oriented programming paradigms, functional programming concepts, and modern web standards. 
              Strong foundation in data structures, algorithms, and design patterns.
            </p>
          </div>

          <div style={skillsCategoryStyles}>
            <h3 style={skillsCategoryTitleStyles}>Frameworks & Libraries</h3>
            <div style={skillsListStyles}>
              <span style={skillTagIntermediateStyles}>React</span>
              <span style={skillTagIntermediateStyles}>Node.js</span>
              <span style={skillTagAdvancedStyles}>Java Swing</span>
              <span style={skillTagAdvancedStyles}>Bootstrap</span>
              <span style={skillTagIntermediateStyles}>Express.js</span>
              <span style={skillTagIntermediateStyles}>jQuery</span>
              <span style={skillTagBeginnerStyles}>Spring Boot</span>
              <span style={skillTagBeginnerStyles}>Vue.js</span>
            </div>
            <p style={skillDescriptionStyles}>
              Experienced in building responsive, interactive user interfaces and robust backend APIs. 
              Familiar with component-based architecture and RESTful service design.
            </p>
          </div>

          <div style={skillsCategoryStyles}>
            <h3 style={skillsCategoryTitleStyles}>Database Technologies</h3>
            <div style={skillsListStyles}>
              <span style={skillTagAdvancedStyles}>Oracle Database</span>
              <span style={skillTagAdvancedStyles}>MySQL</span>
              <span style={skillTagIntermediateStyles}>SQL Server</span>
              <span style={skillTagIntermediateStyles}>PostgreSQL</span>
              <span style={skillTagIntermediateStyles}>Microsoft Access</span>
              <span style={skillTagBeginnerStyles}>MongoDB</span>
              <span style={skillTagBeginnerStyles}>SQLite</span>
            </div>
            <p style={skillDescriptionStyles}>
              Comprehensive experience in database design, normalization, query optimization, and data modeling. 
              Proficient in complex joins, stored procedures, and performance tuning.
            </p>
          </div>

          <div style={skillsCategoryStyles}>
            <h3 style={skillsCategoryTitleStyles}>Development Tools & Environment</h3>
            <div style={skillsListStyles}>
              <span style={skillTagAdvancedStyles}>Visual Studio Code</span>
              <span style={skillTagAdvancedStyles}>Eclipse IDE</span>
              <span style={skillTagAdvancedStyles}>Git & GitHub</span>
              <span style={skillTagAdvancedStyles}>Maven</span>
              <span style={skillTagAdvancedStyles}>XAMPP</span>
              <span style={skillTagAdvancedStyles}>VMware</span>
              <span style={skillTagAdvancedStyles}>IntelliJ IDEA</span>
              <span style={skillTagIntermediateStyles}>Docker</span>
              <span style={skillTagIntermediateStyles}>npm/Yarn</span>
              <span style={skillTagIntermediateStyles}>Postman</span>
              <span style={skillTagBeginnerStyles}>Jenkins</span>
            </div>
            <p style={skillDescriptionStyles}>
              Proficient with modern development workflows, version control systems, containerization, 
              and collaborative development practices. Strong command of debugging and testing tools.
            </p>
          </div>

          <div style={skillsCategoryStyles}>
            <h3 style={skillsCategoryTitleStyles}>Core Competencies</h3>
            <div style={skillsListStyles}>
              <span style={skillTagAdvancedStyles}>Object-Oriented Programming</span>
              <span style={skillTagAdvancedStyles}>Database Design</span>
              <span style={skillTagAdvancedStyles}>Web Development</span>
              <span style={skillTagIntermediateStyles}>API Development</span>
              <span style={skillTagIntermediateStyles}>Software Testing</span>
              <span style={skillTagIntermediateStyles}>Technical Documentation</span>
              <span style={skillTagIntermediateStyles}>Agile Methodology</span>
              <span style={skillTagBeginnerStyles}>DevOps</span>
            </div>
            <p style={skillDescriptionStyles}>
              Strong foundation in software engineering principles and collaborative development practices
            </p>
          </div>

          <div style={{ 
            marginTop: '2rem', 
            padding: '1.5rem', 
            backgroundColor: 'var(--bg-section)', 
            borderRadius: '8px',
            border: '1px solid var(--border-color)'
          }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, textAlign: 'center' }}>
              <strong>Skill Levels:</strong> 
              <span style={{...skillTagAdvancedStyles, margin: '0 0.5rem'}}>Advanced</span>
              <span style={{...skillTagIntermediateStyles, margin: '0 0.5rem'}}>Intermediate</span>
              <span style={{...skillTagBeginnerStyles, margin: '0 0.5rem'}}>Learning</span>
            </p>
          </div>
        </section>

        {/* Education & Achievements */}
        <section style={sectionStyles}>
          <h2 style={sectionHeadingStyles}>🎓 Education & Academic Excellence</h2>
          
          {/* Current Education */}
          <div style={{
            marginBottom: '2rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-section) 100%)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
                fontSize: '2rem',
                marginRight: '1rem',
                padding: '0.5rem',
                backgroundColor: 'var(--primary-color)',
                borderRadius: '50%',
                color: 'white'
              }}>🏫</div>
              <div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  color: 'var(--primary-color)', 
                  margin: 0,
                  fontWeight: 'var(--font-semibold)'
                }}>
                  Computer Programming Diploma
                </h3>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--text-secondary)', 
                  margin: '0.25rem 0',
                  fontWeight: 'var(--font-medium)'
                }}>
                  Algonquin College, Ottawa ON
                </p>
                <p style={{ 
                  fontSize: '1rem', 
                  color: 'var(--text-muted)', 
                  margin: 0 
                }}>
                  September 2024 - Present (Expected: April 2026)
                </p>
              </div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'var(--font-bold)', color: 'var(--primary-color)' }}>3.98</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Current GPA</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'var(--font-bold)', color: 'var(--primary-color)' }}>Dean's</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>List Student</div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'var(--font-bold)', color: 'var(--primary-color)' }}>95%+</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Course Average</div>
              </div>
            </div>
          </div>

          {/* Key Coursework */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            backgroundColor: 'var(--bg-section)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)'
          }}>
            <h3 style={{ 
              fontSize: '1.3rem', 
              color: 'var(--primary-color)', 
              marginBottom: '1rem',
              fontWeight: 'var(--font-semibold)'
            }}>
              📚 Key Coursework & Specializations
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Programming Fundamentals</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                  <li>Advanced Object-Oriented Programming with Java</li>
                  <li>Data Structures & Algorithm Analysis</li>
                  <li>Software Engineering Principles & Design Patterns</li>
                  <li>Unit Testing & Test-Driven Development</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Database & Backend Systems</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                  <li>Advanced Database Design & Normalization</li>
                  <li>Oracle PL/SQL Programming & Optimization</li>
                  <li>System Analysis, Design & Architecture</li>
                  <li>Server-side Programming & API Development</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Web Development & UI/UX</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                  <li>Full-Stack Web Development (MERN Stack)</li>
                  <li>Modern JavaScript (ES6+) & Frameworks</li>
                  <li>Responsive Design & Cross-browser Compatibility</li>
                  <li>User Experience Design & Accessibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements & Recognition */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--gray-200) 100%)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              borderLeft: '4px solid var(--primary-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>🏆</span>
                <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>Academic Excellence</h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>Dean's List Recognition - Fall 2024 (Top 10% of students)</li>
                <li>Perfect 3.98/4.0 GPA maintained across all courses</li>
                <li>Excellence Award for Advanced Java Programming</li>
                <li>Top performer in Database Design & SQL coursework</li>
                <li>Outstanding project presentations and code quality</li>
                <li>Selected for peer tutoring program</li>
              </ul>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--gray-200) 100%)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              borderLeft: '4px solid var(--accent-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>💼</span>
                <h4 style={{ color: 'var(--accent-color)', margin: 0 }}>Project Portfolio</h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>12+ comprehensive software projects completed</li>
                <li>Full-stack web applications with database integration</li>
                <li>Enterprise-level Java applications with GUI</li>
                <li>Interactive development tools and utilities</li>
                <li>Responsive portfolio websites and web apps</li>
                <li>Database management and reporting systems</li>
                <li>API development and third-party integrations</li>
              </ul>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--gray-200) 100%)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              borderLeft: '4px solid var(--accent-secondary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>🌟</span>
                <h4 style={{ color: 'var(--accent-secondary)', margin: 0 }}>Leadership & Impact</h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>Active peer mentor for Java programming concepts</li>
                <li>Code review leadership in team projects</li>
                <li>Study group facilitator for database design</li>
                <li>Technical workshop participant and presenter</li>
                <li>GitHub contributor to educational repositories</li>
                <li>Student ambassador for programming excellence</li>
                <li>Volunteer tutor for struggling students</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Focus & Goals */}
        <section style={sectionStyles}>
          <h2 style={sectionHeadingStyles}>🎯 Professional Roadmap & Growth</h2>
          
          {/* Current Focus */}
          <div style={{
            marginBottom: '2rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, var(--bg-card) 0%, #e8f5e8 100%)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2rem', marginRight: '1rem' }}>🚀</span>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: 'var(--primary-color)', 
                margin: 0,
                fontWeight: 'var(--font-semibold)'
              }}>
                Current Focus Areas
              </h3>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)'
              }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}>📖</span>
                  Academic Excellence
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  <li>Advanced Java programming concepts</li>
                  <li>Database optimization techniques</li>
                  <li>Software architecture patterns</li>
                </ul>
              </div>
              
              <div style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)'
              }}>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}>💻</span>
                  Technical Growth
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  <li>Full-stack JavaScript mastery</li>
                  <li>Cloud computing (AWS/Azure)</li>
                  <li>DevOps practices & CI/CD</li>
                  <li>Modern testing frameworks</li>
                </ul>
              </div>
              
              <div style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)'
              }}>
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}>🤝</span>
                  Community Impact
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  <li>Open-source contributions</li>
                  <li>Peer mentoring programs</li>
                  <li>Tech community involvement</li>
                  <li>Knowledge sharing initiatives</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Goals Timeline */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {/* Short-term Goals */}
            <div style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--gray-200) 100%)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-light)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, var(--accent-color) 0%, var(--primary-color) 100%)'
              }}></div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2rem', marginRight: '1rem' }}>⚡</span>
                <div>
                  <h3 style={{ color: 'var(--accent-color)', margin: 0, fontSize: '1.4rem' }}>6-Month Goals</h3>
                  <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: 'var(--text-sm)' }}>Next Semester Focus</p>
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem' }}>🎓 Academic Milestones</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                  <li>Complete Winter 2025 semester with 4.0 GPA</li>
                  <li>Master advanced Java frameworks</li>
                  <li>Complete capstone project planning</li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem' }}>💼 Professional Development</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                  <li>Launch 3 new portfolio projects</li>
                  <li>Earn AWS Cloud Practitioner certification</li>
                  <li>Secure summer internship opportunity</li>
                </ul>
              </div>
            </div>

            {/* Long-term Vision */}
            <div style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--gray-200) 100%)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-light)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, var(--primary-color) 0%, #4caf50 100%)'
              }}></div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2rem', marginRight: '1rem' }}>🌟</span>
                <div>
                  <h3 style={{ color: 'var(--primary-color)', margin: 0, fontSize: '1.4rem' }}>2-5 Year Vision</h3>
                  <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: 'var(--text-sm)' }}>Career Transformation</p>
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem' }}>🚀 Career Progression</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                  <li>Senior Full-Stack Developer role</li>
                  <li>Technical team leadership experience</li>
                  <li>Expertise in scalable system design</li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem' }}>🌍 Impact & Innovation</h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                  <li>Lead open-source initiatives</li>
                  <li>Mentor next generation developers</li>
                  <li>Build products that solve real problems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Development Path */}
          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            backgroundColor: 'var(--bg-section)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)'
          }}>
            <h3 style={{ 
              color: 'var(--primary-color)', 
              marginBottom: '1.5rem',
              fontSize: '1.3rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '0.5rem' }}>📈</span>
              Continuous Learning Path
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔄</div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', margin: '0 0 0.5rem 0' }}>Currently Learning</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', margin: 0 }}>React, Docker, AWS</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📋</div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', margin: '0 0 0.5rem 0' }}>Next Quarter</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', margin: 0 }}>Kubernetes, GraphQL</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎯</div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', margin: '0 0 0.5rem 0' }}>Future Focus</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', margin: 0 }}>AI/ML, Microservices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interests & Learning */}
        <section style={sectionStyles}>
          <h2 style={sectionHeadingStyles}>🎯 Interests & Continuous Learning</h2>
          <div style={valueListStyles}>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>🤖</div>
              <h3>Artificial Intelligence & Machine Learning</h3>
              <p>Exploring neural networks, natural language processing, and computer vision applications. 
              Currently experimenting with TensorFlow and studying AI ethics and responsible development.</p>
            </div>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>☁️</div>
              <h3>Cloud Computing & DevOps</h3>
              <p>Learning AWS services, containerization with Docker, and CI/CD pipelines. 
              Passionate about scalable architecture and infrastructure automation.</p>
            </div>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>🌐</div>
              <h3>Open Source Contribution</h3>
              <p>Contributing to community projects, maintaining personal repositories, and learning from 
              experienced developers worldwide. Active in coding communities and forums.</p>
            </div>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>🔧</div>
              <h3>Algorithm Optimization</h3>
              <p>Passionate about solving complex algorithmic challenges, code performance optimization, 
              and exploring elegant solutions to computational problems through platforms like LeetCode.</p>
            </div>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>📱</div>
              <h3>Mobile App Development</h3>
              <p>Exploring React Native and Flutter for cross-platform mobile development. 
              Interested in creating intuitive mobile experiences and progressive web applications.</p>
            </div>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>📖</div>
              <h3>Knowledge Sharing & Teaching</h3>
              <p>Documenting my learning journey through technical blogs, creating educational content, 
              and helping fellow students through code reviews and mentoring sessions.</p>
            </div>
          </div>
        </section>

        {/* My Values & Approach */}
        <section style={sectionStyles}>
          <h2 style={sectionHeadingStyles}>💼 Professional Values & Development Philosophy</h2>
          <div style={valueListStyles}>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>🎯</div>
              <h3>User-Centered Innovation</h3>
              <p>Always prioritizing end-user experience while embracing cutting-edge technologies. 
              I believe the best solutions elegantly balance technical excellence with practical usability.</p>
            </div>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>🤝</div>
              <h3>Collaborative Excellence</h3>
              <p>Strong advocate for team collaboration, code reviews, and knowledge sharing. 
              Experienced in Agile methodologies and contributing effectively to cross-functional teams.</p>
            </div>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>⚡</div>
              <h3>Quality & Performance</h3>
              <p>Committed to writing clean, maintainable code with optimal performance. 
              Passionate about test-driven development, code optimization, and best practices.</p>
            </div>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>📚</div>
              <h3>Lifelong Learning</h3>
              <p>Technology evolves rapidly, and I'm committed to continuous skill development. 
              Actively pursuing certifications, attending workshops, and staying current with industry trends.</p>
            </div>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>🌱</div>
              <h3>Growth Mindset</h3>
              <p>Embracing challenges as opportunities to learn and grow. 
              I view failures as valuable learning experiences and am always seeking feedback for improvement.</p>
            </div>
            <div style={valueItemStyles}>
              <div style={valueIconStyles}>🔒</div>
              <h3>Security & Ethics</h3>
              <p>Committed to developing secure, accessible, and ethically responsible software. 
              Considering privacy, inclusivity, and social impact in every project I undertake.</p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section style={sectionStyles}>
          <h2 style={sectionHeadingStyles}>🤝 Let's Connect & Collaborate</h2>
          <div style={{
            ...heroSectionStyles,
            background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--gray-200) 100%)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💼</div>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Professional Opportunities</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Open to internships, co-op positions, and entry-level software development roles
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Project Collaboration</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Interested in collaborating on open-source projects and innovative tech solutions
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎓</div>
                <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Knowledge Exchange</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Always excited to discuss technology trends, share experiences, and learn from others
                </p>
              </div>
            </div>
            
            <p style={{
              ...heroTextStyles,
              fontSize: '1.2rem',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              Whether you're looking for a dedicated team member, a collaborator for your next project, 
              or simply want to connect with a passionate developer, I'd love to hear from you!
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <a 
                href="https://www.linkedin.com/in/louis-bertrand-ntwali-118389312/" 
                style={{
                  ...linkStyles,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  fontWeight: 'var(--font-medium)',
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-md)'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ fontSize: '1.2rem' }}>💼</span>
                LinkedIn Profile
              </a>
              <a 
                href="https://github.com/zepro2004" 
                style={{
                  ...linkStyles,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  backgroundColor: 'var(--accent-color)',
                  color: 'white',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  fontWeight: 'var(--font-medium)',
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-md)'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ fontSize: '1.2rem' }}>💻</span>
                GitHub Portfolio
              </a>
              <a 
                href="mailto:louisbertrandntwali01@gmail.com" 
                style={{
                  ...linkStyles,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  backgroundColor: 'var(--accent-secondary)',
                  color: 'white',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  fontWeight: 'var(--font-medium)',
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>📧</span>
                Send Email
              </a>
            </div>
            
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              backgroundColor: 'var(--bg-section-transparent)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                margin: '0 0 0.5rem 0',
                fontWeight: 'var(--font-medium)'
              }}>
                📍 Located in Ottawa, ON | Available for local and remote opportunities
              </p>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                margin: 0,
                fontStyle: 'italic'
              }}>
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
