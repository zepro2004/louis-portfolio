/**
 * Common style utilities and style objects
 */

// Base layout styles
export const layoutStyles = {
  page: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1rem',
    boxSizing: 'border-box',
    minHeight: '100vh'
  },
  
  container: {
    maxWidth: 'var(--container-lg)',
    width: '100%',
    margin: '0 auto'
  },

  section: {
    marginBottom: '4rem',
    maxWidth: 'var(--container-md)',
    width: '100%'
  },

  centered: {
    textAlign: 'center'
  }
};

// Typography styles
export const typography = {
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '2rem'
  },

  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '600',
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '2rem'
  },

  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: 'var(--primary-color)',
    marginBottom: '1rem',
    lineHeight: '1.2'
  },

  heroSubtitle: {
    fontSize: '1.5rem',
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
    lineHeight: '1.4'
  },

  bodyText: {
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
    lineHeight: '1.6'
  },

  description: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5'
  }
};

// Component base styles
export const components = {
  card: {
    padding: '2rem',
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-md)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },

  button: {
    primary: {
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
    },
    
    secondary: {
      padding: '1rem 2rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      backgroundColor: 'transparent',
      color: 'var(--primary-color)',
      border: '2px solid var(--primary-color)',
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    }
  },

  heroSection: {
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
  },

  grid: {
    twoColumn: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    
    threeColumn: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem'
    },

    autoFit: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem'
    }
  },

  skillTag: {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--bg-primary)',
    padding: '0.4rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '500',
    transition: 'var(--transition-base)',
    cursor: 'pointer'
  }
};

// Responsive utilities
export const responsive = {
  mobile: {
    pageTitle: {
      fontSize: '2rem'
    },
    heroTitle: {
      fontSize: '2.5rem'
    },
    heroSubtitle: {
      fontSize: '1.2rem'
    },
    sectionTitle: {
      fontSize: '1.8rem'
    },
    card: {
      padding: '1.5rem'
    },
    button: {
      padding: '0.8rem 1.5rem',
      fontSize: '1rem'
    }
  }
};

// Animation utilities
export const animations = {
  fadeInUp: {
    animation: 'fadeInUp 0.6s ease-out'
  },
  
  slideInLeft: {
    animation: 'slideInFromLeft 0.8s ease-out'
  },

  gentleFloat: {
    animation: 'gentle-float 3s ease-in-out infinite'
  },

  bounce: {
    animation: 'bounce 2s infinite'
  }
};

// Utility functions
export function mergeStyles(...styles) {
  return Object.assign({}, ...styles);
}

export function getResponsiveStyle(baseStyle, mobileStyle, isMobile) {
  return isMobile ? mergeStyles(baseStyle, mobileStyle) : baseStyle;
}
