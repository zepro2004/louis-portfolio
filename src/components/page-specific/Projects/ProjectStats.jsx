import { useResponsive } from '../../../hooks/useResponsive';
import { UnifiedStatCard } from '../Projects';
import projects from '../../../data/projects';

/**
 * Project statistics section component
 */
export default function ProjectStats() {
  const isMobile = useResponsive();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '1rem' : '2rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    }}>
      <UnifiedStatCard 
        value={projects.length} 
        label="Total Projects" 
        icon="🚀" 
        delay={100}
      />
      <UnifiedStatCard 
        value="6+" 
        label="Technologies" 
        icon="🌐" 
        delay={300}
      />
      <UnifiedStatCard 
        value="2+" 
        label="Years Building" 
        icon="💻" 
        delay={500}
      />
    </div>
  );
}
