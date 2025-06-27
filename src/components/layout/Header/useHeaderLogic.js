import { useEffect } from 'react';

export default function useHeaderLogic(isMobile, isMobileMenuOpen, setIsMobileMenuOpen, location) {
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
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

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

  // Media query styles for responsive design
  const responsiveNavbarStyles = isMobile ? {
    padding: '1rem'
  } : {};

  const responsiveLogoStyles = isMobile ? {
    fontSize: '1.5rem'
  } : {};

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return {
    headerStyles,
    navbarStyles,
    logoStyles,
    responsiveNavbarStyles,
    responsiveLogoStyles,
    toggleMobileMenu,
    closeMobileMenu,
    handleOverlayClick,
    isActiveLink
  };
}
