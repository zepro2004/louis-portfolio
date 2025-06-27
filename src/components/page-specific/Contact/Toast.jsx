import { useState, useEffect } from 'react';

const Toast = ({ message, type = 'success', isVisible, onClose, duration = 4000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    const baseStyles = {
      position: 'fixed',
      top: '2rem',
      right: '2rem',
      padding: '1rem 1.5rem',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '1rem',
      fontWeight: '500',
      zIndex: 1000,
      transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
      transition: 'all 0.3s ease-in-out',
      maxWidth: '400px',
      minWidth: '300px',
      border: '1px solid',
      backdropFilter: 'blur(10px)'
    };

    if (type === 'success') {
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, #10b981, #059669)',
        color: 'white',
        borderColor: '#047857'
      };
    } else if (type === 'error') {
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
        color: 'white',
        borderColor: '#b91c1c'
      };
    }

    return baseStyles;
  };

  const getIcon = () => {
    if (type === 'success') return '✅';
    if (type === 'error') return '❌';
    return 'ℹ️';
  };

  return (
    <div style={getToastStyles()}>
      <span style={{ fontSize: '1.2rem' }}>{getIcon()}</span>
      <span style={{ flex: 1 }}>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'inherit',
          cursor: 'pointer',
          fontSize: '1.2rem',
          padding: '0.25rem',
          borderRadius: '4px',
          transition: 'background-color 0.2s ease',
          opacity: 0.8
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
