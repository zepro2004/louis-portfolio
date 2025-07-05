import { useResponsive } from '../../../hooks/useResponsive';

export default function ProjectGrid({ filteredProjects }) {
  const isMobile = useResponsive();

  if (filteredProjects.length === 0) {
    return null;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      justifyItems: 'center'
    }}>
      {filteredProjects.map((proj, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '1px solid var(--border-light)',
            width: '100%',
            maxWidth: '400px',
            cursor: 'pointer',
            transform: 'translateY(0) scale(1)',
            transformOrigin: 'center',
            willChange: 'transform, box-shadow',
            backfaceVisibility: 'hidden',
            isolation: 'isolate'
          }}
          onMouseEnter={(e) => {
            const card = e.currentTarget;
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.boxShadow = 'var(--shadow-lg)';
            card.style.borderColor = 'var(--border-color)';
            
            // Image scale effect
            const img = card.querySelector('img');
            if (img) img.style.transform = 'scale(1.05)';
            
            // Overlay effect
            const overlay = card.querySelector('[data-overlay]');
            if (overlay) overlay.style.opacity = '1';
            
            // Title color effect
            const title = card.querySelector('[data-title]');
            if (title) title.style.color = 'var(--primary-color)';
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget;
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'var(--shadow-md)';
            card.style.borderColor = 'var(--border-light)';
            
            // Reset image scale
            const img = card.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
            
            // Reset overlay
            const overlay = card.querySelector('[data-overlay]');
            if (overlay) overlay.style.opacity = '0';
            
            // Reset title color
            const title = card.querySelector('[data-title]');
            if (title) title.style.color = 'var(--text-primary)';
          }}
        >
          <div 
            style={{
              width: '100%',
              height: '200px',
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={() => window.open(proj.source, '_blank')}
          >
            <img
              src={proj.image}
              alt={`Screenshot of ${proj.title}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            <div 
              data-overlay
              style={{
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
                transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: 'none'
              }}
            >
            </div>
          </div>

          <div style={{ padding: '1.5rem' }}>
            <h3 
              data-title
              style={{ 
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
                cursor: 'pointer',
                transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onClick={() => window.open(proj.source, '_blank')}
            >
              {proj.title}
            </h3>
            <p style={{ 
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.5',
              marginBottom: '1rem'
            }}>
              {proj.description}
            </p>
            <div style={{
              fontSize: '0.8rem',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              padding: '0.75rem',
              backgroundColor: 'var(--bg-section)',
              borderRadius: '6px',
              border: '1px solid var(--border-light)'
            }}>
              <strong>Tech:</strong> {proj.technologies}
            </div>
            
            <a
              href={proj.source}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: 'medium',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                width: '100%',
                justifyContent: 'center',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                e.stopPropagation();
                e.target.style.backgroundColor = 'var(--primary-dark)';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = 'var(--shadow-brand)';
              }}
              onMouseLeave={(e) => {
                e.stopPropagation();
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
      ))}
    </div>
  );
}
