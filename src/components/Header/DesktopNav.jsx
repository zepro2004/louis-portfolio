import { Link } from "react-router-dom";
import { useHoverEffects } from "../../hooks/useHoverEffects";

export default function DesktopNav({ isMobile, isActiveLink }) {
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

  const responsiveNavLinksContainerStyles = isMobile ? {
    display: 'none'
  } : {};

  const handleLinkHover = (e) => {
    if (!isActiveLink(e.currentTarget.getAttribute('href'))) {
      e.currentTarget.style.backgroundColor = 'var(--accent-brand-10)';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-brand)';
    }
  };

  const handleLinkLeave = (e) => {
    if (!isActiveLink(e.currentTarget.getAttribute('href'))) {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <div style={{...navLinksContainerStyles, ...responsiveNavLinksContainerStyles}}>
      {navLinks.map((link) => (
        <Link 
          key={link.to}
          to={link.to} 
          style={{
            ...navLinkStyles, 
            ...(isActiveLink(link.to) ? activeNavLinkStyles : {})
          }}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
