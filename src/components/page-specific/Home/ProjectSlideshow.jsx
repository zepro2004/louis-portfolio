import { useState, useEffect } from 'react';

const ProjectSlideshow = ({ projects, onProjectClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const handleProjectClick = (project) => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  if (!projects || projects.length === 0) return null;

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: '15px',
      overflow: 'hidden',
      cursor: 'pointer'
    }}
    onClick={() => handleProjectClick(projects[currentIndex])}
    >
      {/* Current Project Display */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'all 0.5s ease-in-out'
      }}>
        <img 
          src={projects[currentIndex].image} 
          alt={projects[currentIndex].title}
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover'
          }}
        />
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{
            color: 'var(--primary-color)',
            fontSize: '1.5rem',
            marginBottom: '1rem',
            fontWeight: '700',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(52, 152, 219, 0.1)'
          }}>
            {projects[currentIndex].title}
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            lineHeight: '1.5',
            marginBottom: '1rem'
          }}>
            {projects[currentIndex].description}
          </p>
          <div style={{
            fontSize: '0.8rem',
            color: 'var(--primary-color)',
            fontWeight: '500'
          }}>
            {projects[currentIndex].technologies}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 10
      }}>
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleIndicatorClick(index);
            }}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentIndex 
                ? 'var(--primary-color)' 
                : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '0.7rem',
        fontWeight: '500'
      }}>
        {currentIndex + 1} / {projects.length}
      </div>
    </div>
  );
};

export default ProjectSlideshow;
