import { getResponsiveStyle, responsive } from '../../utils/styles';
import { useResponsive } from '../../hooks/useResponsive';
import { useHoverEffects } from '../../hooks/useHoverEffects';

/**
 * Reusable Section component with consistent spacing and styling
 */
export default function Section({ 
  children, 
  title,
  subtitle,
  wide = false, // Add wide prop for 3-column layouts
  hover = false, // Add hover prop for card-like sections
  style = {},
  titleStyle = {},
  contentStyle = {},
  className = '',
  ...props 
}) {
  const isMobile = useResponsive();
  const { card: hoverProps } = useHoverEffects();
  
  const baseStyle = {
    marginBottom: '4rem',
    maxWidth: wide ? 'var(--container-xl)' : 'var(--container-md)',
    width: '100%',
    padding: wide ? '0 2rem' : '0'
  };

  // Add card-like styling when hover is enabled
  const sectionStyle = hover ? {
    ...baseStyle,
    padding: '3rem 2rem',
    background: 'var(--bg-section)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-lg)',
    transition: 'all 0.3s ease',
    ...style
  } : {
    ...baseStyle,
    ...style
  };

  const titleBaseStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: subtitle ? '1rem' : '2rem'
  };

  const titleResponsiveStyle = getResponsiveStyle(
    titleBaseStyle,
    responsive.mobile.sectionTitle,
    isMobile
  );

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    textAlign: 'center',
    marginBottom: '2rem',
    lineHeight: '1.5'
  };

  return (
    <section 
      style={sectionStyle} 
      className={className} 
      {...(hover ? hoverProps : {})}
      {...props}
    >
      {title && (
        <h2 style={{...titleResponsiveStyle, ...titleStyle}}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p style={subtitleStyle}>
          {subtitle}
        </p>
      )}
      <div style={contentStyle}>
        {children}
      </div>
    </section>
  );
}
