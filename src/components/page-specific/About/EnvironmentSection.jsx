import { useResponsive } from '../../../hooks/useResponsive';
import { OptimizedImage } from '../../ui';
import { BodyText } from '../../ui';

export default function EnvironmentSection({ journeyImages }) {
  const isMobile = useResponsive();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '3rem',
      alignItems: 'center'
    }}>
      <div style={{
        order: isMobile ? 2 : 1,
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
      }}
      >
        <OptimizedImage 
          src={journeyImages.motivation.original} 
          srcSet={{
            small: journeyImages.motivation.small,
            medium: journeyImages.motivation.medium,
            large: journeyImages.motivation.large
          }}
          alt="Creative inspiration and motivation" 
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          color: 'white',
          padding: '2rem 1.5rem 1.5rem',
          textAlign: 'center'
        }}>
          <h4 style={{
            margin: '0',
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            💻 Always Creating
          </h4>
        </div>
      </div>
      
      <div style={{
        order: isMobile ? 1 : 2
      }}>
        <h3 style={{
          fontSize: '2rem',
          color: 'var(--primary-color)',
          marginBottom: '1.5rem',
          fontWeight: '600'
        }}>
          Continuous Learning Journey
        </h3>
        <BodyText style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.7',
          marginBottom: '1.5rem'
        }}>
          Within my development environment, abstract concepts crystallize into tangible 
          solutions. Each coding session—whether debugging complex algorithms or architecting 
          new features—represents another step in my evolution as a software engineer.
        </BodyText>
        <BodyText style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.7',
          color: 'var(--text-secondary)'
        }}>
          The technology landscape evolves at lightning speed, and I thrive on mastering 
          emerging frameworks, adopting cutting-edge methodologies, and exploring innovative 
          tools that define tomorrow's development standards.
        </BodyText>
      </div>
    </div>
  );
}
