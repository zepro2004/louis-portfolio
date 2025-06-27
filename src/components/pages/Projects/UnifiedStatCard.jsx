import { useState, useEffect } from 'react';
import { AnimatedCard } from '../../shared';

// Enhanced animated counter hook for statistics
const useAnimatedCounter = (value, duration = 1200, delay = 0) => {
  const [count, setCount] = useState(0);
  const [suffix, setSuffix] = useState('');
  
  useEffect(() => {
    // Parse the value to extract number and suffix
    const isString = typeof value === 'string';
    let targetNumber = 0;
    let targetSuffix = '';
    
    if (isString) {
      const match = value.match(/^(\d+)(.*)$/);
      if (match) {
        targetNumber = parseInt(match[1]);
        targetSuffix = match[2];
      } else {
        // If no number found, treat as 0
        targetNumber = 0;
        targetSuffix = value;
      }
    } else {
      targetNumber = value;
    }
    
    const timer = setTimeout(() => {
      const start = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (targetNumber - startValue) * easeOutCubic);
        
        setCount(currentValue);
        
        // Set suffix after animation starts
        if (progress > 0.2 && targetSuffix) {
          setSuffix(targetSuffix);
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);
    
    return () => {
      clearTimeout(timer);
      setCount(0);
      setSuffix('');
    };
  }, [value, duration, delay]);
  
  return { count, suffix };
};

/**
 * Unified Statistics Card Component
 * Used across Projects and About pages for consistency
 */
export default function UnifiedStatCard({ value, label, icon, delay = 0, ...props }) {
  const { count, suffix } = useAnimatedCounter(value, 1200, delay);
  
  return (
    <AnimatedCard 
      variant="stat" 
      icon={icon} 
      delay={delay}
      {...props}
    >
      <span style={{ 
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'var(--primary-color, #3498db)',
        display: 'block',
        transition: 'color 0.3s ease'
      }}>
        {count}{suffix}
      </span>
      <div style={{ 
        fontSize: '0.875rem',
        color: 'var(--text-secondary, #7f8c8d)',
        marginTop: '0.5rem',
        fontWeight: '500'
      }}>
        {label}
      </div>
    </AnimatedCard>
  );
}
