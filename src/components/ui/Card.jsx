import { useHoverEffects } from '../../hooks/useHoverEffects';
import { components, getResponsiveStyle, responsive } from '../../utils/styles';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Reusable Card component for content sections
 */
export default function Card({ 
  children, 
  hover = true,
  style = {},
  className = '',
  ...props 
}) {
  const isMobile = useResponsive();
  const { card: hoverProps } = useHoverEffects();
  
  const baseStyle = components.card;
  const responsiveStyle = getResponsiveStyle(
    baseStyle, 
    responsive.mobile.card, 
    isMobile
  );
  
  const finalStyle = {
    ...responsiveStyle,
    ...style
  };

  return (
    <div 
      style={finalStyle}
      className={className}
      {...(hover ? hoverProps : {})}
      {...props}
    >
      {children}
    </div>
  );
}
