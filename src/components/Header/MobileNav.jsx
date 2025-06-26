import { Link } from "react-router-dom";

export default function MobileNav({ isActiveLink, closeMobileMenu, handleOverlayClick }) {
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
    transform: 'translateY(0) scale(1)',
    opacity: '1',
    visibility: 'visible',
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

  const mobileNavLinkActiveStyles = {
    backgroundColor: 'rgba(164, 118, 107, 0.2)',
    borderLeftColor: 'var(--primary-color)',
    color: 'var(--primary-color)'
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

  const getNavIcon = (path) => {
    switch(path) {
      case '/': return '🏠';
      case '/about': return '👤';
      case '/projects': return '💼';
      case '/contact': return '📧';
      default: return '';
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Overlay for clicking outside */}
      <div style={mobileOverlayStyles} onClick={handleOverlayClick}></div>
      
      {/* Mobile Navigation Dropdown */}
      <div style={mobileNavStyles}>
        {navLinks.map((link) => (
          <Link 
            key={link.to}
            to={link.to} 
            style={{
              ...mobileNavLinkStyles,
              ...(isActiveLink(link.to) ? mobileNavLinkActiveStyles : {})
            }}
            onClick={closeMobileMenu}
            onMouseEnter={handleMobileNavLinkHover}
            onMouseLeave={handleMobileNavLinkLeave}
          >
            <span>{getNavIcon(link.to)}</span>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
