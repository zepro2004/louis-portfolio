import { Card, Grid } from '../ui';
import { useHoverEffects } from '../../hooks/useHoverEffects';

/**
 * Project Card component for displaying project information
 */
export default function ProjectCard({ 
  project, 
  variant = 'default', // 'default', 'featured', 'grid'
  style = {},
  ...props 
}) {
  const { image: imageHover } = useHoverEffects();

  const cardStyles = {
    default: {
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '1px solid var(--border-light)'
    },
    featured: {
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid var(--primary-color)'
    },
    grid: {
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      transition: 'var(--transition-base)',
      border: '1px solid var(--border-light)',
      width: '100%',
      maxWidth: '400px'
    }
  };

  const imageStyle = {
    width: '100%',
    height: variant === 'grid' ? '200px' : '200px',
    objectFit: 'cover',
    transition: 'all 0.3s ease'
  };

  const contentStyle = {
    padding: variant === 'grid' ? 'var(--spacing-lg)' : '1.5rem',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: variant === 'grid' ? 'var(--text-xl)' : '1.2rem',
    fontWeight: '600',
    color: variant === 'featured' ? 'var(--primary-color)' : 'var(--text-primary)',
    marginBottom: '0.5rem'
  };

  const descriptionStyle = {
    fontSize: variant === 'grid' ? 'var(--text-base)' : '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '1rem'
  };

  const techStyle = {
    fontSize: variant === 'grid' ? 'var(--text-sm)' : '0.8rem',
    color: 'var(--primary-color)',
    fontWeight: '500',
    marginBottom: '1rem'
  };

  const dateStyle = {
    fontSize: variant === 'grid' ? 'var(--text-sm)' : '0.8rem',
    color: 'var(--primary-color)',
    marginBottom: 'var(--spacing-lg)',
    fontWeight: 'var(--font-medium)'
  };

  const linkStyle = {
    display: 'inline-block',
    padding: variant === 'grid' ? 'var(--spacing-md) var(--spacing-lg)' : '0.5rem 1rem',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: 'var(--radius-full)',
    fontSize: variant === 'grid' ? 'var(--text-sm)' : '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  };

  return (
    <Card 
      style={{...cardStyles[variant], ...style}} 
      {...props}
    >
      <a
        href={project.source}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={project.image}
          alt={project.title}
          style={imageStyle}
          loading="lazy"
          {...imageHover}
        />
      </a>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{project.title}</h3>
        {variant === 'grid' && (
          <p style={dateStyle}>📅 {project.date}</p>
        )}
        <p style={descriptionStyle}>
          {project.description}
        </p>
        <p style={techStyle}>
          🛠️ {project.technologies}
        </p>
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          {variant === 'grid' ? 'View Project →' : 'View on GitHub →'}
        </a>
      </div>
    </Card>
  );
}
