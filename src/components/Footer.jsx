import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive design with proper effect
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  const footerStyles = {
    width: '100%',
    background: 'var(--footer-gradient)',
    color: 'var(--text-primary)',
    marginTop: 'auto',
    padding: '4rem 2rem 2rem',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    borderTop: '2px solid var(--border-brand)'
  };

  const backgroundPatternStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
      radial-gradient(circle at 25% 25%, var(--accent-brand-10) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, var(--accent-secondary-10) 0%, transparent 50%)
    `,
    pointerEvents: 'none'
  };

  const footerContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    position: 'relative',
    zIndex: 1
  };

  const footerContentStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    alignItems: 'start'
  };

  const brandSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const brandNameStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    background: 'var(--primary-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0
  };

  const brandTaglineStyles = {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    margin: 0,
    lineHeight: '1.5'
  };

  const skillsTagsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem'
  };

  const skillTagStyles = {
    backgroundColor: 'var(--accent-brand-20)',
    color: 'var(--primary-color)',
    padding: '0.3rem 0.8rem',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '500',
    border: '1px solid var(--border-brand-hover)'
  };

  const socialSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const sectionHeaderStyles = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'white',
    margin: 0,
    marginBottom: '0.5rem'
  };

  const socialLinksStyles = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  };

  const socialLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.8rem 1.2rem',
    borderRadius: '25px',
    backgroundColor: 'var(--border-light)',
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    border: '1px solid var(--border-light)',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  };

  const quickLinksStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const quickLinkListStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const quickLinkStyles = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    position: 'relative',
    display: 'inline-block'
  };

  const contactInfoStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const contactItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    color: 'var(--text-secondary)',
    fontSize: '0.95rem'
  };

  const dividerStyles = {
    width: '100%',
    height: '1px',
    background: 'var(--divider-gradient)',
    margin: '2rem 0 1rem'
  };

  const copyrightSectionStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    paddingTop: '2rem',
    borderTop: '1px solid var(--border-light)'
  };

  const copyrightStyles = {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    margin: 0
  };

  const builtWithStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: 'var(--text-muted)'
  };

  const techStackStyles = {
    display: 'flex',
    gap: '0.3rem'
  };

  const techIconStyles = {
    fontSize: '1rem'
  };

  // Event handlers
  const handleSocialHover = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--accent-brand-80)';
    e.currentTarget.style.borderColor = 'var(--primary-color)';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-brand-hover)';
  };

  const handleSocialLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--border-light)';
    e.currentTarget.style.borderColor = 'var(--border-light)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  const handleQuickLinkHover = (e) => {
    e.currentTarget.style.color = 'var(--primary-color)';
    e.currentTarget.style.transform = 'translateX(5px)';
  };

  const handleQuickLinkLeave = (e) => {
    e.currentTarget.style.color = 'var(--text-secondary)';
    e.currentTarget.style.transform = 'translateX(0)';
  };

  // Media query styles for responsive design  
  const responsiveFooterContentStyles = isMobile ? {
    gridTemplateColumns: '1fr',
    textAlign: 'center',
    gap: '2rem'
  } : {};

  const responsiveCopyrightStyles = isMobile ? {
    flexDirection: 'column',
    textAlign: 'center',
    gap: '1rem'
  } : {};

  const responsiveSocialLinksStyles = isMobile ? {
    justifyContent: 'center'
  } : {};

  return (
    <footer style={footerStyles}>
      <div style={backgroundPatternStyles}></div>
      <div style={footerContainerStyles}>
        <div style={{...footerContentStyles, ...responsiveFooterContentStyles}}>
          {/* Brand Section */}
          <div style={brandSectionStyles}>
            <h3 style={brandNameStyles}>Louis Bertrand</h3>
            <p style={brandTaglineStyles}>
              Computer Programming Student passionate about creating efficient software solutions 
              and building meaningful digital experiences.
            </p>
            <div style={skillsTagsStyles}>
              <span style={skillTagStyles}>React</span>
              <span style={skillTagStyles}>Java</span>
              <span style={skillTagStyles}>JavaScript</span>
              <span style={skillTagStyles}>SQL</span>
            </div>
          </div>

          {/* Quick Links */}
          <div style={quickLinksStyles}>
            <h4 style={sectionHeaderStyles}>Navigation</h4>
            <div style={quickLinkListStyles}>
              <Link 
                to="/" 
                style={quickLinkStyles}
                onMouseEnter={handleQuickLinkHover}
                onMouseLeave={handleQuickLinkLeave}
              >
                🏠 Home
              </Link>
              <Link 
                to="/about" 
                style={quickLinkStyles}
                onMouseEnter={handleQuickLinkHover}
                onMouseLeave={handleQuickLinkLeave}
              >
                👨‍💻 About
              </Link>
              <Link 
                to="/projects" 
                style={quickLinkStyles}
                onMouseEnter={handleQuickLinkHover}
                onMouseLeave={handleQuickLinkLeave}
              >
                � Projects
              </Link>
              <Link 
                to="/contact" 
                style={quickLinkStyles}
                onMouseEnter={handleQuickLinkHover}
                onMouseLeave={handleQuickLinkLeave}
              >
                � Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div style={socialSectionStyles}>
            <h4 style={sectionHeaderStyles}>Connect With Me</h4>
            <div style={{...socialLinksStyles, ...responsiveSocialLinksStyles}}>
              <a
                href="https://github.com/zepro2004"
                style={socialLinkStyles}
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                🔗 GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/louis-bertrand-ntwali-118389312/"
                style={socialLinkStyles}
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div style={contactInfoStyles}>
            <h4 style={sectionHeaderStyles}>Get In Touch</h4>
            <div style={contactItemStyles}>
              <span>📧</span>
              <a 
                href="mailto:louisbertrandntwali01@gmail.com"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                louisbertrandntwali01@gmail.com
              </a>
            </div>
            <div style={contactItemStyles}>
              <span>📞</span>
              <a 
                href="tel:3435586673"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                (343) 558-6673
              </a>
            </div>
            <div style={contactItemStyles}>
              <span>📍</span>
              <span>Ottawa, ON, Canada</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={dividerStyles}></div>

        {/* Copyright Section */}
        <div style={{...copyrightSectionStyles, ...responsiveCopyrightStyles}}>
          <p style={copyrightStyles}>
            © {new Date().getFullYear()} Louis Bertrand Ntwali. All rights reserved.
          </p>
          <div style={builtWithStyles}>
            <span>Built with</span>
            <div style={techStackStyles}>
              <span style={techIconStyles}>⚛️</span>
              <span style={techIconStyles}>⚡</span>
              <span style={techIconStyles}>💙</span>
            </div>
            <span>React & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
