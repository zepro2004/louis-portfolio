import { Link } from "react-router-dom";

export default function DesktopNav({ isMobile, isActiveLink }) {
  const navContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const navLinkBaseStyles = {
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

  const navLinkActiveStyles = {
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    boxShadow: 'var(--shadow-brand)'
  };

  const responsiveHideStyles = isMobile ? {
    display: 'none'
  } : {};

  const handleNavLinkHover = (e) => {
    if (!isActiveLink(e.currentTarget.getAttribute('href'))) {
      e.currentTarget.style.backgroundColor = 'var(--accent-brand-10)';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-brand)';
    }
  };

  const handleNavLinkLeave = (e) => {
    if (!isActiveLink(e.currentTarget.getAttribute('href'))) {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  };

  const navigationLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <div style={{...navContainerStyles, ...responsiveHideStyles}}>
      {navigationLinks.map((link) => (
        <Link 
          key={link.to}
          to={link.to} 
          style={{
            ...navLinkBaseStyles, 
            ...(isActiveLink(link.to) ? navLinkActiveStyles : {})
          }}
          onMouseEnter={handleNavLinkHover}
          onMouseLeave={handleNavLinkLeave}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
