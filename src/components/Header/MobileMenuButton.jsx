export default function MobileMenuButton({ isMobile, isMobileMenuOpen, toggleMobileMenu }) {
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

  const responsiveMobileMenuButtonStyles = isMobile ? {
    display: 'flex'
  } : {};

  return (
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
  );
}
