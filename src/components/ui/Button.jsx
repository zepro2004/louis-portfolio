import { useHoverEffects } from '../../hooks/useHoverEffects';
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
  const { button: hoverProps } = useHoverEffects();
  
  const baseStyle = components.button[variant];
  const responsiveStyle = getResponsiveStyle(
    baseStyle, 
    responsive.mobile.button, 
    isMobile
  );
  
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
    ...(disabled ? {} : hoverProps),
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
