import { useResponsive } from '../../../hooks/useResponsive';
import { Button } from '../../ui';
import ProjectSlideshow from './ProjectSlideshow';

export default function FeaturedWork({ featuredProjects, utilityProjects }) {
  const isMobile = useResponsive();

  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--bg-card), #f8f9fa)',
      borderRadius: '25px',
      padding: '3rem 2rem',
      border: '1px solid var(--border-light)',
      marginBottom: '3rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: '2rem'
      }}>
        {featuredProjects.map((project, index) => (
          <a 
            key={index} 
            href={project.source}
            target={project.isExternal ? "_blank" : "_self"}
            rel={project.isExternal ? "noopener noreferrer" : ""}
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img 
                src={project.image} 
                alt={project.title}
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
                  {project.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  marginBottom: '1rem'
                }}>
                  {project.description}
                </p>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--primary-color)',
                  fontWeight: '500'
                }}>
                  {project.technologies}
                </div>
                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {project.isExternal ? (
                    <>
                      <span>🔗</span>
                      <span>View on GitHub</span>
                    </>
                  ) : (
                    <>
                      <span>👁️</span>
                      <span>View in Projects</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
        
        <div style={{
          background: 'white',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease',
          height: '100%'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ProjectSlideshow 
            projects={utilityProjects}
            onProjectClick={() => {
              window.location.href = '/projects?filter=utility';
            }}
          />
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Button href="/projects" variant="secondary" style={{
          padding: '1rem 2.5rem',
          fontSize: '1.1rem'
        }}>
          🚀 Explore All Projects
        </Button>
      </div>
    </div>
  );
}
