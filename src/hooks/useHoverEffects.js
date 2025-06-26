import { useCallback } from 'react';

/**
 * Common hover effects for interactive elements
 */
export function useHoverEffects() {
  // Card hover effect
  const cardHover = useCallback((e) => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
  }, []);

  const cardLeave = useCallback((e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
  }, []);

  // Button hover effect
  const buttonHover = useCallback((e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-dark)';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-brand-hover)';
  }, []);

  const buttonLeave = useCallback((e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-brand)';
  }, []);

  // Link hover effect
  const linkHover = useCallback((e) => {
    e.currentTarget.style.color = 'var(--primary-color)';
    e.currentTarget.style.transform = 'translateX(5px)';
  }, []);

  const linkLeave = useCallback((e) => {
    e.currentTarget.style.color = 'var(--text-secondary)';
    e.currentTarget.style.transform = 'translateX(0)';
  }, []);

  // Image hover effect
  const imageHover = useCallback((e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  }, []);

  const imageLeave = useCallback((e) => {
    e.currentTarget.style.transform = 'scale(1)';
  }, []);

  // Tag/chip hover effect
  const tagHover = useCallback((e) => {
    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
    e.currentTarget.style.backgroundColor = 'var(--primary-light)';
  }, []);

  const tagLeave = useCallback((e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
  }, []);

  return {
    card: { onMouseEnter: cardHover, onMouseLeave: cardLeave },
    button: { onMouseEnter: buttonHover, onMouseLeave: buttonLeave },
    link: { onMouseEnter: linkHover, onMouseLeave: linkLeave },
    image: { onMouseEnter: imageHover, onMouseLeave: imageLeave },
    tag: { onMouseEnter: tagHover, onMouseLeave: tagLeave }
  };
}
