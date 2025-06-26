import { components, getResponsiveStyle, responsive } from '../../utils/styles';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Reusable Section component with consistent spacing and styling
 */
export default function Section({ 
  children, 
  title,
  subtitle,
  style = {},
  titleStyle = {},
  contentStyle = {},
  className = '',
  ...props 
}) {
  const isMobile = useResponsive();
  
  const sectionStyle = {
    marginBottom: '4rem',
    maxWidth: 'var(--container-md)',
    width: '100%',
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
    <section style={sectionStyle} className={className} {...props}>
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
