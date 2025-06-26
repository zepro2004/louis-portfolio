import { components } from '../../utils/styles';
import { useHoverEffects } from '../../hooks/useHoverEffects';

/**
 * Hero Section component with consistent styling
 */
export default function HeroSection({ 
  children, 
  style = {},
  hover = true,
  ...props 
}) {
  const { card: hoverProps } = useHoverEffects();
  
  const finalStyle = {
    ...components.heroSection,
    ...style
  };

  return (
    <section 
      style={finalStyle}
      {...(hover ? hoverProps : {})}
      {...props}
    >
      {children}
    </section>
  );
}
