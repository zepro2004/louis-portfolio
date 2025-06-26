import { components } from '../../utils/styles';
import { useHoverEffects } from '../../hooks/useHoverEffects';

/**
 * Reusable Grid component with predefined layouts
 */
export default function Grid({ 
  children, 
  columns = 'autoFit', // 'twoColumn', 'threeColumn', 'autoFit', or custom
  gap = '1.5rem',
  style = {},
  ...props 
}) {
  const gridStyle = {
    ...(typeof columns === 'string' ? components.grid[columns] : {}),
    ...(typeof columns === 'string' ? {} : { gridTemplateColumns: columns }),
    gap,
    ...style
  };

  return (
    <div style={gridStyle} {...props}>
      {children}
    </div>
  );
}

/**
 * Grid Item wrapper
 */
export function GridItem({ children, style = {}, hover = false, ...props }) {
  const { card: hoverProps } = useHoverEffects();
  
  return (
    <div 
      style={style} 
      {...(hover ? hoverProps : {})}
      {...props}
    >
      {children}
    </div>
  );
}
