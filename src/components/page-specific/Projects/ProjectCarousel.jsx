import { useResponsive } from '../../../hooks/useResponsive';

export default function ProjectCarousel({ 
  currentIndex,
  fade,
  filteredProjects,
  currentProject,
  nextProject,
  prevProject,
  onTouchStart,
  onTouchMove,
  onTouchEnd
}) {
  const isMobile = useResponsive();

  if (filteredProjects.length === 0) {
    return null;
  }

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Navigation hint */}
      <div style={{
        textAlign: 'center',
        color: '#95a5a6',
        fontSize: '0.875rem',
        marginBottom: '2rem',
        fontStyle: 'italic'
      }}>
        💡 Use arrow keys or swipe to navigate between projects
      </div>

      {/* Main project display */}
      <div
        style={{
          width: '100%',
          opacity: fade ? 0.7 : 1,
          transform: fade ? 'scale(0.95)' : 'scale(1)',
          transition: 'all 0.25s ease-in-out'
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Project Card */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          marginBottom: '2rem'
        }}>
          {/* Project Image */}
          <div style={{
            width: '100%',
            height: isMobile ? '200px' : '300px',
            overflow: 'hidden',
            cursor: 'pointer',
            position: 'relative'
          }}
          onClick={() => window.open(currentProject.source, '_blank')}
          >
            <img
              src={currentProject.image}
              alt={`Screenshot of ${currentProject.title}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
            {/* Overlay on hover */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(52, 152, 219, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = 1}
            onMouseLeave={(e) => e.target.style.opacity = 0}
            >
            </div>
          </div>

          {/* Project Details */}
          <div style={{ padding: '2rem' }}>
            <h2 
              style={{ 
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onClick={() => window.open(currentProject.source, '_blank')}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
            >
              {currentProject.title}
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              {currentProject.description}
            </p>
            <div style={{
              fontSize: '0.95rem',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              padding: '1rem',
              backgroundColor: 'var(--bg-section)',
              borderRadius: '8px',
              border: '1px solid var(--border-light)'
            }}>
              <strong>Technologies:</strong> {currentProject.technologies}
            </div>
            
            {/* Action Button */}
            <a
              href={currentProject.source}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 'medium',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--primary-dark)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = 'var(--shadow-brand-hover)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--primary-color)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <span>🔗</span>
              View Project
            </a>
          </div>
        </div>

        {/* Navigation Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '2rem'
        }}>
          {/* Previous Button */}
          <button
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '50%',
              border: 'none',
              fontSize: '1.5rem',
              backgroundColor: filteredProjects.length <= 1 ? 'var(--text-muted)' : 'var(--primary-color)',
              color: 'white',
              transition: 'all 0.3s ease',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: filteredProjects.length <= 1 ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              opacity: filteredProjects.length <= 1 ? 0.6 : 1
            }}
            disabled={filteredProjects.length <= 1}
            onClick={() => {
              if (filteredProjects.length > 1) {
                prevProject();
              }
            }}
            onMouseEnter={(e) => {
              if (filteredProjects.length > 1) {
                e.target.style.backgroundColor = 'var(--primary-dark)';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (filteredProjects.length > 1) {
                e.target.style.backgroundColor = 'var(--primary-color)';
                e.target.style.transform = 'translateY(0)';
              }
            }}
            title="Previous project"
          >
            ←
          </button>

          {/* Progress indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '1rem',
            color: 'var(--text-secondary)'
          }}>
            <span>
              {currentIndex + 1} of {filteredProjects.length}
            </span>
          </div>

          {/* Next Button */}
          <button
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '50%',
              border: 'none',
              fontSize: '1.5rem',
              backgroundColor: filteredProjects.length <= 1 ? 'var(--text-muted)' : 'var(--primary-color)',
              color: 'white',
              transition: 'all 0.3s ease',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: filteredProjects.length <= 1 ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              opacity: filteredProjects.length <= 1 ? 0.6 : 1
            }}
            disabled={filteredProjects.length <= 1}
            onClick={() => {
              if (filteredProjects.length > 1) {
                nextProject();
              }
            }}
            onMouseEnter={(e) => {
              if (filteredProjects.length > 1) {
                e.target.style.backgroundColor = 'var(--primary-dark)';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (filteredProjects.length > 1) {
                e.target.style.backgroundColor = 'var(--primary-color)';
                e.target.style.transform = 'translateY(0)';
              }
            }}
            title="Next project"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
