import { useState, useRef, useEffect } from 'react';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * Optimized Image Component with Lazy Loading and WebP Support
 */
export default function OptimizedImage({ 
  src, 
  srcSet = {}, // Object with small, medium, large WebP sources
  alt, 
  style = {}, 
  placeholder = true,
  className = '',
  onLoad,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [_hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const isMobile = useResponsive(768);
  const isTablet = useResponsive(1024);

  // Determine the best image source based on device and WebP support
  useEffect(() => {
    const getOptimalImageSrc = () => {
      // Check if we have WebP sources provided
      if (srcSet.small || srcSet.medium || srcSet.large) {
        const supportsWebP = () => {
          const canvas = document.createElement('canvas');
          return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        };

        if (supportsWebP()) {
          // Use WebP with appropriate size
          if (isMobile && srcSet.small) return srcSet.small;
          if (isTablet && srcSet.medium) return srcSet.medium;
          if (srcSet.large) return srcSet.large;
          // Fallback to best available size
          return srcSet.medium || srcSet.small || srcSet.large || src;
        }
      }
      
      // Fallback to original image
      return src;
    };

    setImageSrc(getOptimalImageSrc());
  }, [src, srcSet, isMobile, isTablet]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading 50px before the image is visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original image if WebP fails
    if (imageSrc !== src) {
      setImageSrc(src);
      setHasError(false);
    }
  };

  const placeholderStyle = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#999',
    fontSize: '2rem',
    ...style
  };

  const imageStyle = {
    ...style,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div ref={imgRef} style={{ position: 'relative', ...style }}>
      {/* Placeholder */}
      {(!isInView || !isLoaded) && placeholder && (
        <div style={placeholderStyle}>
          📸
        </div>
      )}
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={imageSrc}
          alt={alt}
          style={imageStyle}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy" // Native lazy loading as fallback
          className={className}
          {...props}
        />
      )}
      
      {/* Add shimmer animation CSS */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
