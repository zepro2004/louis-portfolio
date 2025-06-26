import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu on escape key and manage focus
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Disable body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isMobileMenuOpen]);

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
    color: 'var(--primary-color)',
    textDecoration: 'none',
    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
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
    width: '2.5rem',
    height: '2.5rem',
    background: isMobileMenuOpen 
      ? 'rgba(164, 118, 107, 0.2)' 
      : 'rgba(164, 118, 107, 0.1)',
    border: '2px solid var(--primary-color)',
    borderRadius: '8px',
    cursor: 'pointer',
    padding: '0.25rem',
    zIndex: 1001,
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    boxShadow: isMobileMenuOpen 
      ? '0 6px 20px rgba(164, 118, 107, 0.3)' 
      : '0 4px 12px rgba(0, 0, 0, 0.15)',
    transform: isMobileMenuOpen ? 'scale(1.05)' : 'scale(1)'
  };

  const hamburgerLineStyles = {
    width: '100%',
    height: '0.2rem',
    background: 'var(--primary-color)',
    borderRadius: '10px',
    transition: 'all 0.3s linear',
    position: 'relative',
    transformOrigin: 'center'
  };

  const mobileNavStyles = {
    position: 'fixed',
    top: '5rem',
    right: '1rem',
    width: '280px',
    maxHeight: 'calc(100vh - 6rem)',
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(164, 118, 107, 0.3)',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem 0',
    gap: '0.5rem',
    transform: isMobileMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
    opacity: isMobileMenuOpen ? '1' : '0',
    visibility: isMobileMenuOpen ? 'visible' : 'hidden',
    transition: 'all 0.3s ease-in-out',
    zIndex: 1000,
    overflowY: 'auto'
  };

  const mobileNavLinkStyles = {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    padding: '0.75rem 1.5rem',
    margin: '0 0.5rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    borderLeft: '3px solid transparent',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const closeMobileMenuStyles = {
    display: 'none' // Remove close button since we're using a dropdown style
  };

  const mobileNavLinkActiveStyles = {
    backgroundColor: 'rgba(164, 118, 107, 0.2)',
    borderLeftColor: 'var(--primary-color)',
    color: 'var(--primary-color)'
  };

  // Add overlay to close menu when clicking outside
  const mobileOverlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 999,
    backdropFilter: 'blur(2px)'
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
    if (!isActiveLink(e.currentTarget.getAttribute('href'))) {
      e.currentTarget.style.backgroundColor = 'rgba(164, 118, 107, 0.15)';
      e.currentTarget.style.borderLeftColor = 'rgba(164, 118, 107, 0.5)';
      e.currentTarget.style.transform = 'translateX(5px)';
    }
  };

  const handleMobileNavLinkLeave = (e) => {
    if (!isActiveLink(e.currentTarget.getAttribute('href'))) {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.borderLeftColor = 'transparent';
      e.currentTarget.style.transform = 'translateX(0)';
    }
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

  // Close mobile menu when clicking outside
  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Add icons for mobile nav links
  const getNavIcon = (path) => {
    switch(path) {
      case '/': return '🏠';
      case '/about': return '👤';
      case '/projects': return '💼';
      case '/contact': return '📧';
      default: return '';
    }
  };

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

        {/* Mobile Menu Button - Always visible on mobile */}
        <button 
          style={{...mobileMenuButtonStyles, ...responsiveMobileMenuButtonStyles}}
          onClick={toggleMobileMenu}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleMobileMenu();
            }
          }}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div style={{
            ...hamburgerLineStyles,
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)',
          }}></div>
          <div style={{
            ...hamburgerLineStyles,
            opacity: isMobileMenuOpen ? '0' : '1',
            transform: isMobileMenuOpen ? 'translateX(20px)' : 'translateX(0)'
          }}></div>
          <div style={{
            ...hamburgerLineStyles,
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'rotate(0)',
          }}></div>
        </button>
      </nav>

      {/* Mobile Navigation Overlay and Menu - Rendered as Portal */}
      {isMobile && isMobileMenuOpen && createPortal(
        <>
          {/* Overlay for clicking outside */}
          <div style={mobileOverlayStyles} onClick={handleOverlayClick}></div>
          
          {/* Mobile Navigation Dropdown */}
          <div style={mobileNavStyles}>
            <Link 
              to="/" 
              style={{
                ...mobileNavLinkStyles,
                ...(isActiveLink('/') ? mobileNavLinkActiveStyles : {})
              }}
              onClick={closeMobileMenu}
              onMouseEnter={handleMobileNavLinkHover}
              onMouseLeave={handleMobileNavLinkLeave}
            >
              <span>{getNavIcon('/')}</span>
              Home
            </Link>
            <Link 
              to="/about" 
              style={{
                ...mobileNavLinkStyles,
                ...(isActiveLink('/about') ? mobileNavLinkActiveStyles : {})
              }}
              onClick={closeMobileMenu}
              onMouseEnter={handleMobileNavLinkHover}
              onMouseLeave={handleMobileNavLinkLeave}
            >
              <span>{getNavIcon('/about')}</span>
              About
            </Link>
            <Link 
              to="/projects" 
              style={{
                ...mobileNavLinkStyles,
                ...(isActiveLink('/projects') ? mobileNavLinkActiveStyles : {})
              }}
              onClick={closeMobileMenu}
              onMouseEnter={handleMobileNavLinkHover}
              onMouseLeave={handleMobileNavLinkLeave}
            >
              <span>{getNavIcon('/projects')}</span>
              Projects
            </Link>
            <Link 
              to="/contact" 
              style={{
                ...mobileNavLinkStyles,
                ...(isActiveLink('/contact') ? mobileNavLinkActiveStyles : {})
              }}
              onClick={closeMobileMenu}
              onMouseEnter={handleMobileNavLinkHover}
              onMouseLeave={handleMobileNavLinkLeave}
            >
              <span>{getNavIcon('/contact')}</span>
              Contact
            </Link>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
