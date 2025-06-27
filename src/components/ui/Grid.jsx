import { components } from '../../utils/styles';
import { useHoverEffects } from '../../hooks/useHoverEffects';
import { useResponsive } from '../../hooks/useResponsive';

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
  const isMobile = useResponsive();
  
  // Handle responsive threeColumn layout
  const getResponsiveColumns = () => {
    if (columns === 'threeColumn' && isMobile) {
      return 'repeat(1, 1fr)'; // Single column on mobile
    }
    return typeof columns === 'string' ? components.grid[columns]?.gridTemplateColumns : columns;
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: getResponsiveColumns(),
    gap,
    ...(typeof columns === 'string' && components.grid[columns] ? {
      ...components.grid[columns],
      gridTemplateColumns: getResponsiveColumns()
    } : {}),
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
