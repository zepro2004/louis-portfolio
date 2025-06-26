import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design detection
 * @param {number} breakpoint - Breakpoint in pixels (default: 768)
 * @returns {boolean} - True if viewport is mobile/tablet
 */
export function useResponsive(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [breakpoint]);

  return isMobile;
}

/**
 * Hook for tablet detection
 */
export function useTablet() {
  return useResponsive(1024);
}

/**
 * Hook for desktop detection
 */
export function useDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    
    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  return isDesktop;
}
