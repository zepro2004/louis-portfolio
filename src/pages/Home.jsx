import TodoAppImage from '../assets/images/Projects/TodoApp.png';
import NotesAppImage from '../assets/images/Projects/NotesApp.png';
import EventsWebsiteImage from '../assets/images/Projects/EventsWebsite.png';
import PalindromeCheckerImage from '../assets/images/Projects/PalindromeChecker.png';

export default function Home() {
  const homePageStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1rem',
    boxSizing: 'border-box',
    minHeight: '100vh'
  };

  const heroSectionStyles = {
    textAlign: 'center',
    marginBottom: '4rem',
    padding: '4rem 2rem',
    background: 'var(--bg-section)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-lg)',
    maxWidth: 'var(--container-md)',
    width: '100%',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const heroTitleStyles = {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: 'var(--primary-color)',
    marginBottom: '1rem',
    lineHeight: '1.2'
  };

  const heroSubtitleStyles = {
    fontSize: '1.5rem',
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
    lineHeight: '1.4'
  };

  const heroDescriptionStyles = {
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
    marginBottom: '2rem',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto 2rem auto'
  };

  const ctaButtonStyles = {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: 'var(--shadow-brand)',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const skillsSectionStyles = {
    marginBottom: '4rem',
    maxWidth: 'var(--container-lg)',
    width: '100%'
  };

  const sectionTitleStyles = {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const skillsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  };

  const skillCategoryStyles = {
    padding: '2rem',
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-md)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const categoryIconStyles = {
    fontSize: '3rem',
    marginBottom: '1rem',
    display: 'block'
  };

  const categoryTitleStyles = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'var(--primary-color)',
    marginBottom: '1rem'
  };

  const categoryDescriptionStyles = {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5'
  };

  const gallerySectionStyles = {
    marginBottom: '4rem',
    maxWidth: 'var(--container-lg)',
    width: '100%'
  };

  const projectCardStyles = {
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-xl)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-md)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '1px solid var(--border-light)'
  };

  const projectImageStyles = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'all 0.3s ease'
  };

  const projectContentStyles = {
    padding: '1.5rem',
    textAlign: 'center'
  };

  const projectTitleStyles = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'var(--primary-color)',
    marginBottom: '0.5rem'
  };

  const projectDescriptionStyles = {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '1rem'
  };

  const projectTechStyles = {
    fontSize: '0.8rem',
    color: 'var(--primary-color)',
    fontWeight: '500',
    marginBottom: '1rem'
  };

  const projectLinkStyles = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  };

  const galleryGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  };

  const galleryItemStyles = {
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-md)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const galleryImageStyles = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'all 0.3s ease'
  };

  // Hover handlers
  const handleHeroSectionHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
  };

  const handleHeroSectionLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };

  const handleButtonHover = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-dark)';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-brand-hover)';
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-brand)';
  };

  const handleSkillCategoryHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
  };

  const handleSkillCategoryLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
  };

  const handleProjectCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = 'scale(1.05)';
  };

  const handleProjectCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = 'scale(1)';
  };

  const handleProjectLinkHover = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-dark)';
    e.currentTarget.style.transform = 'translateY(-1px)';
  };

  const handleProjectLinkLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleGalleryItemHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = 'scale(1.1)';
  };

  const handleGalleryItemLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = 'scale(1)';
  };

  // Responsive styles
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const responsiveHeroTitleStyles = isMobile ? {
    fontSize: '2.5rem'
  } : {};

  const responsiveHeroSubtitleStyles = isMobile ? {
    fontSize: '1.2rem'
  } : {};

  const responsiveSectionTitleStyles = isMobile ? {
    fontSize: '2rem'
  } : {};

  return (
    <div style={homePageStyles}>
      {/* Hero Section */}
      <section 
        style={heroSectionStyles}
        onMouseEnter={handleHeroSectionHover}
        onMouseLeave={handleHeroSectionLeave}
      >
        <h1 style={{...heroTitleStyles, ...responsiveHeroTitleStyles}}>
          Hi, I'm Louis
        </h1>
        <p style={{...heroSubtitleStyles, ...responsiveHeroSubtitleStyles}}>
          Computer Science Student & Aspiring Full-Stack Developer
        </p>
        <p style={heroDescriptionStyles}>
          Welcome to my portfolio! I'm passionate about creating innovative software solutions 
          and building amazing user experiences. Currently pursuing my Computer Science degree 
          while developing real-world projects and gaining hands-on experience in full-stack development.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/about"
            style={ctaButtonStyles}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Learn More About Me
          </a>
          <a
            href="/projects"
            style={{
              ...ctaButtonStyles,
              backgroundColor: 'transparent',
              color: 'var(--primary-color)',
              border: '2px solid var(--primary-color)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-color)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--primary-color)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View My Projects
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section style={skillsSectionStyles}>
        <h2 style={{...sectionTitleStyles, ...responsiveSectionTitleStyles}}>
          What I Do
        </h2>
        <div style={skillsGridStyles}>
          <div 
            style={skillCategoryStyles}
            onMouseEnter={handleSkillCategoryHover}
            onMouseLeave={handleSkillCategoryLeave}
          >
            <span style={categoryIconStyles}>💻</span>
            <h3 style={categoryTitleStyles}>Frontend Development</h3>
            <p style={categoryDescriptionStyles}>
              Creating responsive and interactive user interfaces using React, JavaScript, HTML, and CSS.
            </p>
          </div>

          <div 
            style={skillCategoryStyles}
            onMouseEnter={handleSkillCategoryHover}
            onMouseLeave={handleSkillCategoryLeave}
          >
            <span style={categoryIconStyles}>⚙️</span>
            <h3 style={categoryTitleStyles}>Backend Development</h3>
            <p style={categoryDescriptionStyles}>
              Building robust server-side applications with Node.js, Java, and database management.
            </p>
          </div>

          <div 
            style={skillCategoryStyles}
            onMouseEnter={handleSkillCategoryHover}
            onMouseLeave={handleSkillCategoryLeave}
          >
            <span style={categoryIconStyles}>🗄️</span>
            <h3 style={categoryTitleStyles}>Database Design</h3>
            <p style={categoryDescriptionStyles}>
              Designing and optimizing databases using MySQL, Oracle, and SQL for efficient data management.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section style={gallerySectionStyles}>
        <h2 style={{...sectionTitleStyles, ...responsiveSectionTitleStyles}}>
          Featured Projects
        </h2>
        <div style={galleryGridStyles}>
          <div 
            style={projectCardStyles}
            onMouseEnter={handleProjectCardHover}
            onMouseLeave={handleProjectCardLeave}
          >
            <img 
              src={NotesAppImage} 
              alt="Notes Application" 
              style={projectImageStyles}
            />
            <div style={projectContentStyles}>
              <h3 style={projectTitleStyles}>Notes App</h3>
              <p style={projectDescriptionStyles}>
                Stores Notes and ToDos. Uses Java Swing for the frontend and MySQL for the backend. Maven is used as the build tool.
              </p>
              <p style={projectTechStyles}>
                🛠️ Java, Maven, and SQL
              </p>
              <a
                href="https://github.com/zepro2004/Notes-App"
                target="_blank"
                rel="noopener noreferrer"
                style={projectLinkStyles}
                onMouseEnter={handleProjectLinkHover}
                onMouseLeave={handleProjectLinkLeave}
              >
                View on GitHub →
              </a>
            </div>
          </div>

          <div 
            style={projectCardStyles}
            onMouseEnter={handleProjectCardHover}
            onMouseLeave={handleProjectCardLeave}
          >
            <img 
              src={EventsWebsiteImage} 
              alt="Events Website" 
              style={projectImageStyles}
            />
            <div style={projectContentStyles}>
              <h3 style={projectTitleStyles}>Events Management Website</h3>
              <p style={projectDescriptionStyles}>
                A dynamic website to manage events. Attendees can RSVP to events, whereas admins can create and delete events.
              </p>
              <p style={projectTechStyles}>
                🛠️ JavaScript, PHP, SQL, HTML, CSS
              </p>
              <a
                href="https://github.com/zepro2004/Event-Attendees-Management-Website"
                target="_blank"
                rel="noopener noreferrer"
                style={projectLinkStyles}
                onMouseEnter={handleProjectLinkHover}
                onMouseLeave={handleProjectLinkLeave}
              >
                View on GitHub →
              </a>
            </div>
          </div>

          <div 
            style={projectCardStyles}
            onMouseEnter={handleProjectCardHover}
            onMouseLeave={handleProjectCardLeave}
          >
            <img 
              src={PalindromeCheckerImage} 
              alt="Web Utilities Collection" 
              style={projectImageStyles}
            />
            <div style={projectContentStyles}>
              <h3 style={projectTitleStyles}>Web Utilities Collection</h3>
              <p style={projectDescriptionStyles}>
                A collection of utility tools including decimal to binary converter, palindrome checker, telephone validator, and roman numeral converter.
              </p>
              <p style={projectTechStyles}>
                🛠️ JavaScript, HTML, CSS
              </p>
              <a
                href="/projects?filter=utility"
                style={projectLinkStyles}
                onMouseEnter={handleProjectLinkHover}
                onMouseLeave={handleProjectLinkLeave}
              >
                View Utilities →
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="/projects"
            style={{
              ...ctaButtonStyles,
              backgroundColor: 'transparent',
              color: 'var(--primary-color)',
              border: '2px solid var(--primary-color)',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-color)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--primary-color)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            🚀 View All Projects
          </a>
        </div>
      </section>
    </div>
  );
}
