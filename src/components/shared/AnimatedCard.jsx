import { useState, useEffect } from 'react';

/**
 * Unified Animated Card Component
 * Provides consistent hover effects, animations, and styling across all pages
 */
export default function AnimatedCard({ 
  children,
  icon,
  className = '',
  delay = 0,
  variant = 'default', // 'default', 'stat', 'contact', 'skill'
  onClick,
  href,
  style = {},
  ...props 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Unified animation timing and easing
  const ANIMATION_TIMING = {
    duration: '0.4s',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    fast: '0.3s ease'
  };

  // Unified color scheme using CSS custom properties
  const COLORS = {
    primary: 'var(--primary-color, #3498db)',
    secondary: 'var(--text-secondary, #7f8c8d)',
    background: 'var(--bg-card, #ffffff)',
    border: 'var(--border-light, #e1e1e1)',
    shadow: 'var(--shadow-md, 0 2px 8px rgba(0,0,0,0.1))',
    shadowHover: '0 8px 25px rgba(52, 152, 219, 0.15)'
  };

  // Variant-specific styling
  const variantStyles = {
    default: {
      padding: '1.5rem',
      borderRadius: '12px',
      backgroundColor: COLORS.background,
      border: `1px solid ${COLORS.border}`,
      boxShadow: isHovered ? COLORS.shadowHover : COLORS.shadow,
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      transition: `all ${ANIMATION_TIMING.duration} ${ANIMATION_TIMING.easing}`
    },
    stat: {
      padding: '1.5rem',
      borderRadius: '12px',
      backgroundColor: COLORS.background,
      border: `1px solid ${COLORS.border}`,
      boxShadow: isHovered ? COLORS.shadowHover : COLORS.shadow,
      minWidth: '100px',
      textAlign: 'center',
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      transition: `all ${ANIMATION_TIMING.duration} ${ANIMATION_TIMING.easing}`
    },
    contact: {
      padding: '1rem 1.5rem',
      borderRadius: '25px',
      backgroundColor: COLORS.background,
      border: `1px solid ${COLORS.border}`,
      boxShadow: isHovered ? COLORS.shadowHover : COLORS.shadow,
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      transition: `all ${ANIMATION_TIMING.duration} ${ANIMATION_TIMING.easing}`,
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    skill: {
      padding: '1.5rem',
      borderRadius: '12px',
      backgroundColor: COLORS.background,
      border: `1px solid ${COLORS.border}`,
      boxShadow: isHovered ? COLORS.shadowHover : COLORS.shadow,
      textAlign: 'center',
      transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
      transition: `all ${ANIMATION_TIMING.duration} ${ANIMATION_TIMING.easing}`
    }
  };

  const baseStyle = {
    position: 'relative',
    cursor: onClick || href ? 'pointer' : 'default',
    overflow: 'hidden',
    opacity: isVisible ? 1 : 0.7,
    ...variantStyles[variant],
    ...style
  };

  // Animated background gradient on hover
  const backgroundOverlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.05), rgba(155, 89, 182, 0.05))',
    opacity: isHovered ? 1 : 0,
    transition: `opacity ${ANIMATION_TIMING.fast}`,
    zIndex: 0,
    pointerEvents: 'none'
  };

  // Icon styling with hover animation
  const iconStyle = icon ? {
    fontSize: variant === 'contact' ? '1.5rem' : variant === 'stat' ? '1.5rem' : '3rem',
    marginBottom: variant === 'contact' ? '0' : '0.5rem',
    display: variant === 'contact' ? 'inline' : 'block',
    transform: isHovered ? 
      (variant === 'contact' ? 'scale(1.1)' : 'scale(1.1) rotate(5deg)') : 
      'scale(1) rotate(0deg)',
    transition: `transform ${ANIMATION_TIMING.fast}`,
    position: 'relative',
    zIndex: 1
  } : {};

  // Content wrapper to ensure proper z-index
  const contentStyle = {
    position: 'relative',
    zIndex: 1
  };

  // Initialize visibility animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleClick = (e) => {
    if (href) {
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        window.open(href, href.startsWith('http') ? '_blank' : '_self');
      } else {
        // Internal navigation
        if (typeof window !== 'undefined' && window.location) {
          window.location.href = href;
        }
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  const CardComponent = href ? 'a' : 'div';
  const additionalProps = href ? {
    href,
    target: href.startsWith('http') ? '_blank' : '_self',
    rel: href.startsWith('http') ? 'noopener noreferrer' : '',
    style: { ...baseStyle, textDecoration: 'none', color: 'inherit' }
  } : { style: baseStyle };

  return (
    <CardComponent
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      {...additionalProps}
      {...props}
    >
      {/* Animated background overlay */}
      <div style={backgroundOverlay} />
      
      {/* Icon with animation */}
      {icon && (
        <span style={iconStyle}>
          {icon}
        </span>
      )}
      
      {/* Content wrapper */}
      <div style={contentStyle}>
        {children}
      </div>
    </CardComponent>
  );
}
