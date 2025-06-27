import { components, getResponsiveStyle, responsive } from '../../utils/styles';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Reusable Button component with primary and secondary variants
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  disabled = false,
  style = {},
  ...props 
}) {
  const isMobile = useResponsive();
  
  const baseStyle = components.button[variant];
  const responsiveStyle = getResponsiveStyle(
    baseStyle, 
    responsive.mobile.button, 
    isMobile
  );
  
  // Create variant-specific hover handlers
  const handleMouseEnter = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--primary-dark)';
      e.currentTarget.style.boxShadow = 'var(--shadow-brand-hover)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'var(--primary-color)';
      e.currentTarget.style.color = 'white';
      e.currentTarget.style.boxShadow = 'var(--shadow-brand-hover)';
    }
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeave = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--primary-color)';
      e.currentTarget.style.boxShadow = 'var(--shadow-brand)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = 'var(--primary-color)';
      e.currentTarget.style.boxShadow = 'none';
    }
    e.currentTarget.style.transform = 'translateY(0)';
  };
  
  const finalStyle = {
    ...responsiveStyle,
    ...style,
    ...(disabled && { 
      opacity: 0.6, 
      cursor: 'not-allowed',
      pointerEvents: 'none'
    })
  };

  const commonProps = {
    style: finalStyle,
    disabled,
    ...(disabled ? {} : { 
      onMouseEnter: handleMouseEnter, 
      onMouseLeave: handleMouseLeave 
    }),
    ...props
  };

  if (href) {
    return (
      <a href={href} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} {...commonProps}>
      {children}
    </button>
  );
}
