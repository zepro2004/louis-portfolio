import passionImage from "../assets/images/Others/Passion.jpg";
import motivationImage from "../assets/images/Others/motivation.jpg";
import screensImage from "../assets/images/Others/screens.jpg";
import codingImage from "../assets/images/Others/coding.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [imageLoadStates, setImageLoadStates] = useState({
    motivation: false,
    screens: false,
    coding: false
  });
  const [imagesInView, setImagesInView] = useState(false);
  const galleryRef = useRef(null);

  const handleImageLoad = (imageName) => {
    setImageLoadStates(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImagesInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);
  const homePageStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1rem',
    boxSizing: 'border-box'
  };

  const welcomeSectionStyles = {
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '800px',
    margin: '0 auto 4rem auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 2rem'
  };

  const introSentenceStyles = {
    fontSize: '3.5rem',
    color: 'var(--primary-color, #a4766b)',
    fontWeight: '300',
    marginBottom: '1rem'
  };

  const welcomeH1Styles = {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    background: 'linear-gradient(135deg, var(--accent-color, #667eea) 0%, var(--accent-secondary, #764ba2) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const welcomePStyles = {
    fontSize: '1.8rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary, #555)',
    marginBottom: '2rem'
  };

  const specialtyTextStyles = {
    fontSize: '1.5rem',
    color: 'var(--primary-color, #a4766b)',
    fontWeight: '600',
    marginBottom: '3rem'
  };

  const heroImageStyles = {
    maxWidth: '600px',
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: 'var(--shadow-lg)',
    marginBottom: '3rem'
  };

  const skillsSectionStyles = {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto 4rem auto',
    padding: '3rem 2rem',
    background: 'var(--bg-section)',
    borderRadius: 'var(--radius-2xl, 20px)',
    boxShadow: 'var(--shadow-lg)',
    border: '1px solid var(--border-light)'
  };

  const skillsHeaderStyles = {
    textAlign: 'center',
    fontSize: 'var(--text-3xl, 2.5rem)',
    color: 'var(--primary-color, #a4766b)',
    marginBottom: 'var(--spacing-lg, 1.5rem)',
    fontWeight: 'var(--font-semibold, 600)'
  };

  const skillsSubtitleStyles = {
    textAlign: 'center',
    fontSize: 'var(--text-lg, 1.2rem)',
    color: 'var(--text-secondary, #666)',
    marginBottom: 'var(--spacing-2xl, 3rem)',
    maxWidth: '600px',
    margin: '0 auto var(--spacing-2xl, 3rem) auto',
    lineHeight: 'var(--leading-relaxed, 1.6)'
  };

  const skillsCategoriesStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 'var(--spacing-xl, 2rem)',
    marginBottom: 'var(--spacing-2xl, 3rem)'
  };

  const skillCategoryStyles = {
    textAlign: 'center',
    padding: 'var(--spacing-xl, 2rem)',
    backgroundColor: 'var(--bg-card, white)',
    borderRadius: 'var(--radius-xl, 15px)',
    boxShadow: 'var(--shadow-md)',
    border: '1px solid var(--border-light, #f0f0f0)',
    transition: 'var(--transition-base, all 0.3s ease)'
  };

  const categoryTitleStyles = {
    fontSize: 'var(--text-xl, 1.3rem)',
    fontWeight: 'var(--font-semibold, bold)',
    color: 'var(--text-primary, #333)',
    marginBottom: 'var(--spacing-lg, 1.5rem)'
  };

  const skillsListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 'var(--spacing-sm, 0.75rem)'
  };

  const skillTagStyles = {
    padding: 'var(--spacing-sm, 0.5rem) var(--spacing-md, 1rem)',
    borderRadius: 'var(--radius-full, 20px)',
    fontSize: 'var(--text-sm, 0.9rem)',
    fontWeight: 'var(--font-medium, 500)',
    transition: 'var(--transition-base, all 0.3s ease)',
    cursor: 'default',
    border: '1px solid transparent'
  };

  const primarySkillStyles = {
    backgroundColor: 'var(--primary-color, #a4766b)',
    color: 'white',
    border: '1px solid var(--primary-color, #a4766b)'
  };

  const secondarySkillStyles = {
    backgroundColor: '#e3f2fd',
    color: '#1565c0',
    border: '1px solid #bbdefb'
  };

  const skillLegendStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: 'var(--spacing-xl, 2rem)',
    marginTop: 'var(--spacing-xl, 2rem)',
    padding: 'var(--spacing-lg, 1.5rem)',
    backgroundColor: 'var(--bg-card, white)',
    borderRadius: 'var(--radius-lg, 12px)',
    border: '1px solid var(--border-light, #f0f0f0)'
  };

  const legendItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md, 1rem)'
  };

  const legendTextStyles = {
    fontSize: 'var(--text-sm, 0.9rem)',
    color: 'var(--text-secondary, #666)',
    fontWeight: 'var(--font-medium, 500)'
  };

  const featuredProjectsStyles = {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto 4rem auto'
  };

  const featuredHeaderStyles = {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: 'var(--primary-color, #a4766b)',
    marginBottom: '2.5rem',
    fontWeight: '600'
  };

  const projectsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  };

  const projectCardStyles = {
    padding: '2rem',
    background: 'var(--bg-card)',
    borderRadius: 'var(--radius-xl, 15px)',
    boxShadow: 'var(--shadow-lg)',
    textAlign: 'center',
    transition: 'var(--transition-base, all 0.3s ease)',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    cursor: 'pointer',
    border: '1px solid var(--border-light)'
  };

  const projectTitleStyles = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: 'var(--text-primary, #333)',
    marginBottom: '1rem'
  };

  const projectDescriptionStyles = {
    fontSize: '1rem',
    color: 'var(--text-secondary, #666)',
    lineHeight: '1.5',
    marginBottom: '1rem'
  };

  const projectTechStyles = {
    fontSize: '0.85rem',
    color: 'var(--primary-color, #a4766b)',
    fontWeight: '500'
  };

  const imagesHolderStyles = {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '1rem 2rem',
    marginBottom: '3rem',
    gap: '1rem'
  };

  const imagesStyles = {
    width: '100%',
    height: '250px',
    borderRadius: '15px',
    objectFit: 'cover',
    boxShadow: 'var(--shadow-xl)',
    transition: 'transform 0.3s ease, opacity 0.3s ease'
  };

  const imageContainerStyles = {
    position: 'relative',
    flex: '1',
    height: '250px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-xl)',
    transition: 'transform 0.3s ease'
  };

  const imagePlaceholderStyles = {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '15px',
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'loading 1.5s infinite'
  };

  const imageLoadedStyles = {
    opacity: 1
  };

  const imageLoadingStyles = {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0
  };

  const buttonContainerStyles = {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    marginTop: '2rem',
    flexWrap: 'wrap'
  };

  const projectBtnsStyles = {
    padding: '1rem 2rem',
    backgroundColor: 'var(--primary-color, #a4766b)',
    color: 'var(--white, white)',
    fontSize: '1.2rem',
    borderRadius: 'var(--radius-full, 25px)',
    border: 'none',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'var(--transition-base, all 0.3s ease)',
    boxShadow: 'var(--shadow-brand)'
  };

  const projectBtnsHoverStyles = {
    backgroundColor: 'var(--primary-dark, #8b5a52)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-brand-hover)'
  };

  const handleButtonHover = (e) => {
    Object.assign(e.currentTarget.style, projectBtnsHoverStyles);
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-color, #a4766b)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-brand)';
  };

  const handleImageHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.parentElement.style.transform = 'translateY(-5px)';
  };

  const handleImageLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.parentElement.style.transform = 'translateY(0)';
  };

  const handleProjectCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
  };

  const handleProjectCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };

  const handleSkillCategoryHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };

  const handleSkillCategoryLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
  };

  // Media query styles for responsive design
  const isMobile = window.innerWidth <= 768;
  
  const responsiveImagesHolderStyles = isMobile ? {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '1.5rem',
    padding: '1rem'
  } : {};

  const responsiveImagesStyles = isMobile ? {
    width: '100%',
    height: '220px'
  } : {};

  const responsiveImageContainerStyles = isMobile ? {
    flex: 'none',
    height: '220px'
  } : {};

  const responsiveIntroStyles = isMobile ? {
    fontSize: '2.5rem'
  } : {};

  const responsiveH1Styles = isMobile ? {
    fontSize: '2.8rem'
  } : {};

  const responsivePStyles = isMobile ? {
    fontSize: '1.4rem'
  } : {};

  const responsiveHeroImageStyles = isMobile ? {
    maxWidth: '90%'
  } : {};

  const responsiveSkillsSectionStyles = isMobile ? {
    padding: 'var(--spacing-xl, 2rem) var(--spacing-lg, 1.5rem)'
  } : {};

  const responsiveSkillsCategoriesStyles = isMobile ? {
    gridTemplateColumns: '1fr',
    gap: 'var(--spacing-lg, 1.5rem)'
  } : {};

  const responsiveProjectsGridStyles = isMobile ? {
    gridTemplateColumns: '1fr',
    gap: '1.5rem'
  } : {};

  // Add CSS animation for loading placeholder
  const loadingAnimation = `
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;

  // Create an optimized image component with WebP support
  const OptimizedImage = ({ src, alt, imageName, containerStyle, imageStyle }) => (
    <div style={containerStyle}>
      {!imageLoadStates[imageName] && (
        <div style={imagePlaceholderStyles}>
          <span>📸 Loading...</span>
        </div>
      )}
      {imagesInView && (
        <picture>
          <img
            src={src}
            alt={alt}
            style={{
              ...imageStyle,
              ...(imageLoadStates[imageName] ? imageLoadedStyles : imageLoadingStyles)
            }}
            onLoad={() => handleImageLoad(imageName)}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
            loading="lazy"
            decoding="async"
            fetchPriority={imageName === 'motivation' ? 'high' : 'low'}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; background: var(--bg-section); display: flex; align-items: center; justify-content: center; color: var(--text-secondary); border-radius: var(--radius-lg); font-size: 2rem;">🖼️</div>';
            }}
          />
        </picture>
      )}
    </div>
  );

  return (
    <div style={homePageStyles}>
      {/* Preload critical images */}
      <link rel="preload" as="image" href={motivationImage} />
      
      {/* Add CSS animation */}
      <style>
        {loadingAnimation}
      </style>
      
      <main>
        <section id="welcome-section" style={welcomeSectionStyles}>
          {/* Introduction section */}
          <p style={{...introSentenceStyles, ...responsiveIntroStyles}}>Hello, I'm</p>
          <h1 style={{...welcomeH1Styles, ...responsiveH1Styles}}>Louis Bertrand Ntwali</h1>
          <p style={{...welcomePStyles, ...responsivePStyles}}>
            Computer Programming Student at <strong>Algonquin College</strong>
          </p>
          <p style={{...specialtyTextStyles, ...responsivePStyles}}>
            Building efficient software solutions • Database design • Full-stack development
          </p>
          <img
            src={passionImage}
            alt="Passion for programming and technology"
            style={{...heroImageStyles, ...responsiveHeroImageStyles}}
          />
        </section>

        {/* Skills Highlights Section */}
        <section style={{...skillsSectionStyles, ...responsiveSkillsSectionStyles}}>
          <h2 style={skillsHeaderStyles}>Core Technical Skills</h2>
          <p style={skillsSubtitleStyles}>
            My primary technology stack and key competencies - 
            <Link to="/about" style={{color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 'bold'}}>
              {' '}view complete skills breakdown →
            </Link>
          </p>
          
          <div style={{...skillsCategoriesStyles, ...responsiveSkillsCategoriesStyles}}>
            <div 
              style={skillCategoryStyles}
              onMouseEnter={handleSkillCategoryHover}
              onMouseLeave={handleSkillCategoryLeave}
            >
              <h3 style={categoryTitleStyles}>💻 Programming</h3>
              <div style={skillsListStyles}>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>Java</span>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>JavaScript</span>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>Python</span>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>SQL</span>
              </div>
            </div>
            
            <div style={skillCategoryStyles}>
              <h3 style={categoryTitleStyles}>🌐 Web Development</h3>
              <div style={skillsListStyles}>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>React</span>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>Node.js</span>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>HTML/CSS</span>
                <span style={{...skillTagStyles, ...secondarySkillStyles}}>Bootstrap</span>
              </div>
            </div>
            
            <div style={skillCategoryStyles}>
              <h3 style={categoryTitleStyles}>🗄️ Database</h3>
              <div style={skillsListStyles}>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>Oracle</span>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>MySQL</span>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>PostgreSQL</span>
                <span style={{...skillTagStyles, ...secondarySkillStyles}}>MongoDB</span>
              </div>
            </div>
            
            <div style={skillCategoryStyles}>
              <h3 style={categoryTitleStyles}>🛠️ Development Tools</h3>
              <div style={skillsListStyles}>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>Git & GitHub</span>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>VS Code</span>
                <span style={{...skillTagStyles, ...primarySkillStyles}}>Maven</span>
                <span style={{...skillTagStyles, ...secondarySkillStyles}}>Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section style={featuredProjectsStyles}>
          <h2 style={featuredHeaderStyles}>Featured Projects</h2>
          <div style={{...projectsGridStyles, ...responsiveProjectsGridStyles}}>
            <a
              href="https://github.com/zepro2004/Notes-App"
              target="_blank"
              rel="noopener noreferrer"
              style={projectCardStyles}
              onMouseEnter={handleProjectCardHover}
              onMouseLeave={handleProjectCardLeave}
            >
              <h3 style={projectTitleStyles}>Notes App</h3>
              <p style={projectDescriptionStyles}>
                Full-stack application for managing notes and todos with Java Swing frontend and MySQL backend.
              </p>
              <p style={projectTechStyles}>Java • Maven • SQL</p>
            </a>
            <a
              href="https://github.com/zepro2004/Event-Attendees-Management-Website"
              target="_blank"
              rel="noopener noreferrer"
              style={projectCardStyles}
              onMouseEnter={handleProjectCardHover}
              onMouseLeave={handleProjectCardLeave}
            >
              <h3 style={projectTitleStyles}>Events Website</h3>
              <p style={projectDescriptionStyles}>
                Dynamic event management system with RSVP functionality and admin controls.
              </p>
              <p style={projectTechStyles}>JavaScript • PHP • SQL • HTML/CSS</p>
            </a>
            <a
              href="https://jsfiddle.net/bcbzepro/bhLc2a3p/1/"
              target="_blank"
              rel="noopener noreferrer"
              style={projectCardStyles}
              onMouseEnter={handleProjectCardHover}
              onMouseLeave={handleProjectCardLeave}
            >
              <h3 style={projectTitleStyles}>Palindrome Checker</h3>
              <p style={projectDescriptionStyles}>
                Interactive web utility that checks if words or sentences are palindromes, ignoring spaces and special characters.
              </p>
              <p style={projectTechStyles}>JavaScript • HTML • CSS</p>
            </a>
          </div>
        </section>

        {/* Visual Gallery - Optimized with Lazy Loading */}
        <div ref={galleryRef} style={{...imagesHolderStyles, ...responsiveImagesHolderStyles}}>
          <OptimizedImage
            src={motivationImage}
            alt="Motivation and inspiration"
            imageName="motivation"
            containerStyle={{...imageContainerStyles, ...responsiveImageContainerStyles}}
            imageStyle={{...imagesStyles, ...responsiveImagesStyles}}
          />
          <OptimizedImage
            src={screensImage}
            alt="Multiple programming environments and screens"
            imageName="screens"
            containerStyle={{...imageContainerStyles, ...responsiveImageContainerStyles}}
            imageStyle={{...imagesStyles, ...responsiveImagesStyles}}
          />
          <OptimizedImage
            src={codingImage}
            alt="Programming and development"
            imageName="coding"
            containerStyle={{...imageContainerStyles, ...responsiveImageContainerStyles}}
            imageStyle={{...imagesStyles, ...responsiveImagesStyles}}
          />
        </div>

        <div style={buttonContainerStyles}>
          <Link
            to="/projects"
            style={projectBtnsStyles}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            View All Projects
          </Link>
          <Link
            to="/about"
            style={projectBtnsStyles}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Learn More About Me
          </Link>
        </div>
      </main>
    </div>
  );
}
