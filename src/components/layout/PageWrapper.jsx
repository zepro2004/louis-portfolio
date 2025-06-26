import { layoutStyles } from '../../utils/styles';

/**
 * Page wrapper component for consistent page layout
 */
export default function PageWrapper({ children, style = {}, ...props }) {
  const pageStyle = {
    ...layoutStyles.page,
    ...style
  };

  return (
    <div style={pageStyle} {...props}>
      {children}
    </div>
  );
}
