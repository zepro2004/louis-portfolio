import { usePageTitle } from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('About Me');
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
    maxWidth: 'var(--container-md)',
    width: '100%'
  };

  const heroSectionStyles = {
    textAlign: 'center',
    marginBottom: '4rem',
    padding: '3rem 2rem',
    background: 'var(--bg-section)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-lg)',
    transition: 'var(--transition-base)',
    cursor: 'pointer'
  };

  const sectionStyles = {
    marginBottom: '4rem'
  };

  const sectionHeadingStyles = {
    fontSize: '1.8rem',
    color: 'var(--primary-color)',
    marginBottom: '1.5rem',
    textAlign: 'center'
  };

  const skillsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  };

  const skillCategoryStyles = {
    padding: '1.5rem',
    background: 'var(--bg-card)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-md)',
    transition: 'var(--transition-base)',
    cursor: 'pointer'
  };

  const categoryTitleStyles = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--primary-color)',
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const skillsListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center'
  };

  const skillTagStyles = {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--bg-primary)',
    padding: '0.4rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '500',
    transition: 'var(--transition-base)',
    cursor: 'pointer'
  };

  const quickFactsStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '3rem'
  };

  const factCardStyles = {
    textAlign: 'center',
    padding: '1.5rem',
    background: 'var(--bg-section)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-md)',
    transition: 'var(--transition-base)',
    cursor: 'pointer'
  };

  const factIconStyles = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    display: 'block'
  };

  const factTitleStyles = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--primary-color)',
    marginBottom: '0.5rem'
  };

  const factTextStyles = {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4'
  };

  // Hover handlers
  const handleHeroSectionHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
  };

  const handleHeroSectionLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };

  const handleSkillCategoryHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
  };

  const handleSkillCategoryLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
  };

  const handleSkillTagHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
    e.currentTarget.style.backgroundColor = 'var(--primary-light)';
  };

  const handleSkillTagLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
  };

  const handleFactCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };

  const handleFactCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
  };

  return (
    <div style={aboutPageStyles}>
      <h1 style={aboutHeaderStyles}>About Me</h1>
      
      <div style={aboutContentStyles}>
        {/* Hero Section */}
        <section 
          style={heroSectionStyles}
          onMouseEnter={handleHeroSectionHover}
          onMouseLeave={handleHeroSectionLeave}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              boxShadow: 'var(--shadow-brand)'
            }}>
              👋
            </div>
            <div style={{ textAlign: 'left', flex: '1', minWidth: '300px' }}>
              <h2 style={{ 
                color: 'var(--primary-color)', 
                margin: '0 0 0.5rem 0',
                fontSize: '1.8rem'
              }}>
                Hi, I'm Louis!
              </h2>
              <p style={{ 
                color: 'var(--text-secondary)', 
                margin: 0,
                fontSize: '1.1rem',
                lineHeight: '1.5'
              }}>
                Computer Science Student & Aspiring Full-Stack Developer
              </p>
            </div>
          </div>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            I'm passionate about creating efficient, user-friendly software solutions. 
            Currently pursuing my Computer Science degree while building real-world projects 
            and gaining hands-on experience in full-stack development.
          </p>
        </section>

        {/* Core Skills - Simplified */}
        <section style={sectionStyles}>
          <h2 style={sectionHeadingStyles}>💻 Core Skills</h2>
          <div style={skillsGridStyles}>
            <div 
              style={skillCategoryStyles}
              onMouseEnter={handleSkillCategoryHover}
              onMouseLeave={handleSkillCategoryLeave}
            >
              <h3 style={categoryTitleStyles}>Programming</h3>
              <div style={skillsListStyles}>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >Java</span>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >JavaScript</span>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >Python</span>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >SQL</span>
              </div>
            </div>

            <div 
              style={skillCategoryStyles}
              onMouseEnter={handleSkillCategoryHover}
              onMouseLeave={handleSkillCategoryLeave}
            >
              <h3 style={categoryTitleStyles}>Web Development</h3>
              <div style={skillsListStyles}>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >React</span>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >Node.js</span>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >HTML/CSS</span>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >Bootstrap</span>
              </div>
            </div>

            <div 
              style={skillCategoryStyles}
              onMouseEnter={handleSkillCategoryHover}
              onMouseLeave={handleSkillCategoryLeave}
            >
              <h3 style={categoryTitleStyles}>Database & Tools</h3>
              <div style={skillsListStyles}>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >MySQL</span>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >Oracle</span>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >Git</span>
                <span 
                  style={skillTagStyles}
                  onMouseEnter={handleSkillTagHover}
                  onMouseLeave={handleSkillTagLeave}
                >VS Code</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section style={sectionStyles}>
          <h2 style={sectionHeadingStyles}>📊 Quick Facts</h2>
          <div style={quickFactsStyles}>
            <div 
              style={factCardStyles}
              onMouseEnter={handleFactCardHover}
              onMouseLeave={handleFactCardLeave}
            >
              <span style={factIconStyles}>🎓</span>
              <div style={factTitleStyles}>Education</div>
              <div style={factTextStyles}>Computer Science Student<br/>3.98 GPA</div>
            </div>

            <div 
              style={factCardStyles}
              onMouseEnter={handleFactCardHover}
              onMouseLeave={handleFactCardLeave}
            >
              <span style={factIconStyles}>💼</span>
              <div style={factTitleStyles}>Experience</div>
              <div style={factTextStyles}>2+ Years Building<br/>Personal Projects</div>
            </div>

            <div 
              style={factCardStyles}
              onMouseEnter={handleFactCardHover}
              onMouseLeave={handleFactCardLeave}
            >
              <span style={factIconStyles}>🚀</span>
              <div style={factTitleStyles}>Focus</div>
              <div style={factTextStyles}>Full-Stack Development<br/>& Problem Solving</div>
            </div>

            <div 
              style={factCardStyles}
              onMouseEnter={handleFactCardHover}
              onMouseLeave={handleFactCardLeave}
            >
              <span style={factIconStyles}>🎯</span>
              <div style={factTitleStyles}>Goal</div>
              <div style={factTextStyles}>Software Engineer<br/>Building Great UX</div>
            </div>
          </div>
        </section>

        {/* Simple Call to Action */}
        <section style={{
          textAlign: 'center',
          padding: '2rem',
          background: 'var(--bg-section)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
          e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        }}
        >
          <h3 style={{
            color: 'var(--primary-color)',
            marginBottom: '1rem'
          }}>
            Let's Connect!
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            fontSize: '1.1rem'
          }}>
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or just chat about technology and development.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/contact"
              style={{
                padding: '0.8rem 1.5rem',
                backgroundColor: 'var(--primary-color)',
                color: 'var(--white)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-full)',
                fontWeight: '600',
                transition: 'var(--transition-base)',
                boxShadow: 'var(--shadow-brand)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-dark)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              style={{
                padding: '0.8rem 1.5rem',
                backgroundColor: 'transparent',
                color: 'var(--primary-color)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-full)',
                fontWeight: '600',
                transition: 'var(--transition-base)',
                border: '2px solid var(--primary-color)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                e.currentTarget.style.color = 'var(--white)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--primary-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View My Work
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
