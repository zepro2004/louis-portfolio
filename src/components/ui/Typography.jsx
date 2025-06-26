import { typography, getResponsiveStyle, responsive } from '../../utils/styles';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Reusable Typography components
 */

export function PageTitle({ children, style = {}, ...props }) {
  const isMobile = useResponsive();
  const responsiveStyle = getResponsiveStyle(
    typography.pageTitle,
    responsive.mobile.pageTitle,
    isMobile
  );
  
  return (
    <h1 style={{...responsiveStyle, ...style}} {...props}>
      {children}
    </h1>
  );
}

export function SectionTitle({ children, style = {}, ...props }) {
  const isMobile = useResponsive();
  const responsiveStyle = getResponsiveStyle(
    typography.sectionTitle,
    responsive.mobile.sectionTitle,
    isMobile
  );
  
  return (
    <h2 style={{...responsiveStyle, ...style}} {...props}>
      {children}
    </h2>
  );
}

export function HeroTitle({ children, style = {}, ...props }) {
  const isMobile = useResponsive();
  const responsiveStyle = getResponsiveStyle(
    typography.heroTitle,
    responsive.mobile.heroTitle,
    isMobile
  );
  
  return (
    <h1 style={{...responsiveStyle, ...style}} {...props}>
      {children}
    </h1>
  );
}

export function HeroSubtitle({ children, style = {}, ...props }) {
  const isMobile = useResponsive();
  const responsiveStyle = getResponsiveStyle(
    typography.heroSubtitle,
    responsive.mobile.heroSubtitle,
    isMobile
  );
  
  return (
    <p style={{...responsiveStyle, ...style}} {...props}>
      {children}
    </p>
  );
}

export function BodyText({ children, style = {}, ...props }) {
  return (
    <p style={{...typography.bodyText, ...style}} {...props}>
      {children}
    </p>
  );
}

export function Description({ children, style = {}, ...props }) {
  return (
    <p style={{...typography.description, ...style}} {...props}>
      {children}
    </p>
  );
}
