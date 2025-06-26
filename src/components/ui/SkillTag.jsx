import { useHoverEffects } from '../../hooks/useHoverEffects';
import { components } from '../../utils/styles';

/**
 * Reusable Skill Tag component
 */
export default function SkillTag({ 
  children, 
  style = {},
  hover = true,
  ...props 
}) {
  const { tag: hoverProps } = useHoverEffects();
  
  const finalStyle = {
    ...components.skillTag,
    ...style
  };

  return (
    <span 
      style={finalStyle}
      {...(hover ? hoverProps : {})}
      {...props}
    >
      {children}
    </span>
  );
}

/**
 * Skill Tags Container
 */
export function SkillTagContainer({ children, style = {}, ...props }) {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center',
    ...style
  };

  return (
    <div style={containerStyle} {...props}>
      {children}
    </div>
  );
}
