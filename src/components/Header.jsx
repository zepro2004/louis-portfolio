import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerStyles = {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'var(--header-gradient)',
    backdropFilter: 'blur(15px)',
    borderBottom: '2px solid var(--border-brand)',
    boxShadow: 'var(--shadow-lg)',
    width: '100%'
  };

  const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    maxWidth: 'var(--container-xl, 1200px)',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  };

  const logoStyles = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'var(--primary-color, #a4766b)',
    textDecoration: 'none',
    background: 'linear-gradient(135deg, var(--primary-color, #a4766b) 0%, var(--primary-dark, #8b5a52) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const navLinksContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const navLinkStyles = {
    position: 'relative',
    textDecoration: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
    fontWeight: '500',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    overflow: 'hidden'
  };

  const activeNavLinkStyles = {
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    boxShadow: 'var(--shadow-brand)'
  };

  const navLinkHoverStyles = {
    backgroundColor: 'var(--accent-brand-10)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-brand)'
  };

  const mobileMenuButtonStyles = {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '2rem',
    height: '2rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 10
  };

  const hamburgerLineStyles = {
    width: '2rem',
    height: '0.25rem',
    background: 'var(--primary-color)',
    borderRadius: '10px',
    transition: 'all 0.3s linear',
    position: 'relative',
    transformOrigin: '1px'
  };

  const mobileNavStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'var(--bg-overlay)',
    backdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 999
  };

  const mobileNavLinkStyles = {
    fontSize: '2rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    padding: '1rem',
    borderRadius: '15px',
    transition: 'all 0.3s ease'
  };

  const closeMobileMenuStyles = {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    background: 'none',
    border: 'none',
    fontSize: '2.5rem',
    color: 'var(--primary-color)',
    cursor: 'pointer'
  };

  const handleLinkHover = (e) => {
    if (!isActiveLink(e.currentTarget.getAttribute('href'))) {
      Object.assign(e.currentTarget.style, navLinkHoverStyles);
    }
  };

  const handleLinkLeave = (e) => {
    if (!isActiveLink(e.currentTarget.getAttribute('href'))) {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  };

  const handleMobileNavLinkHover = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--accent-brand-10)';
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMobileNavLinkLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.transform = 'scale(1)';
  };

  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Media query styles for responsive design
  const isMobile = window.innerWidth <= 768;
  
  const responsiveNavbarStyles = isMobile ? {
    padding: '1rem'
  } : {};

  const responsiveNavLinksContainerStyles = isMobile ? {
    display: 'none'
  } : {};

  const responsiveMobileMenuButtonStyles = isMobile ? {
    display: 'flex'
  } : {};

  const responsiveLogoStyles = isMobile ? {
    fontSize: '1.5rem'
  } : {};

  return (
    <header style={headerStyles}>
      <nav style={{...navbarStyles, ...responsiveNavbarStyles}}>
        <Link to="/" style={{...logoStyles, ...responsiveLogoStyles}}>
          LBN
        </Link>
        
        {/* Desktop Navigation */}
        <div style={{...navLinksContainerStyles, ...responsiveNavLinksContainerStyles}}>
          <Link 
            to="/" 
            style={{
              ...navLinkStyles, 
              ...(isActiveLink('/') ? activeNavLinkStyles : {})
            }}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{
              ...navLinkStyles, 
              ...(isActiveLink('/about') ? activeNavLinkStyles : {})
            }}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            style={{
              ...navLinkStyles, 
              ...(isActiveLink('/projects') ? activeNavLinkStyles : {})
            }}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            style={{
              ...navLinkStyles, 
              ...(isActiveLink('/contact') ? activeNavLinkStyles : {})
            }}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          style={{...mobileMenuButtonStyles, ...responsiveMobileMenuButtonStyles}}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div style={{
            ...hamburgerLineStyles,
            transform: isMobileMenuOpen ? 'rotate(45deg)' : 'rotate(0)',
            transformOrigin: '1px'
          }}></div>
          <div style={{
            ...hamburgerLineStyles,
            opacity: isMobileMenuOpen ? '0' : '1',
            transform: isMobileMenuOpen ? 'translateX(20px)' : 'translateX(0)'
          }}></div>
          <div style={{
            ...hamburgerLineStyles,
            transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0)',
            transformOrigin: '1px'
          }}></div>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobile && (
        <div style={mobileNavStyles}>
          <button 
            style={closeMobileMenuStyles}
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            ×
          </button>
          <Link 
            to="/" 
            style={{
              ...mobileNavLinkStyles,
              ...(isActiveLink('/') ? { color: 'var(--primary-color)' } : {})
            }}
            onClick={closeMobileMenu}
            onMouseEnter={handleMobileNavLinkHover}
            onMouseLeave={handleMobileNavLinkLeave}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{
              ...mobileNavLinkStyles,
              ...(isActiveLink('/about') ? { color: 'var(--primary-color)' } : {})
            }}
            onClick={closeMobileMenu}
            onMouseEnter={handleMobileNavLinkHover}
            onMouseLeave={handleMobileNavLinkLeave}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            style={{
              ...mobileNavLinkStyles,
              ...(isActiveLink('/projects') ? { color: 'var(--primary-color)' } : {})
            }}
            onClick={closeMobileMenu}
            onMouseEnter={handleMobileNavLinkHover}
            onMouseLeave={handleMobileNavLinkLeave}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            style={{
              ...mobileNavLinkStyles,
              ...(isActiveLink('/contact') ? { color: 'var(--primary-color)' } : {})
            }}
            onClick={closeMobileMenu}
            onMouseEnter={handleMobileNavLinkHover}
            onMouseLeave={handleMobileNavLinkLeave}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
