import { useResponsive } from '../../../hooks/useResponsive';
import { OptimizedImage } from '../../ui';
import { BodyText } from '../../ui';

export default function PhilosophySection({ journeyImages }) {
  const isMobile = useResponsive();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '3rem',
      alignItems: 'center',
      marginBottom: '3rem'
    }}>
      <div>
        <h3 style={{
          fontSize: '2rem',
          color: 'var(--primary-color)',
          marginBottom: '1.5rem',
          fontWeight: '600'
        }}>
          Code with Purpose
        </h3>
        <BodyText style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.7',
          marginBottom: '1.5rem'
        }}>
          Beyond writing functional code, I architect solutions that solve genuine problems 
          and create lasting impact. Each project is an opportunity to push boundaries, 
          challenge conventional thinking, and deliver experiences that truly matter.
        </BodyText>
        <BodyText style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.7',
          color: 'var(--text-secondary)'
        }}>
          From elegant user interfaces to robust backend systems, I believe exceptional 
          software emerges when technical expertise meets creative problem-solving and 
          an unwavering commitment to quality.
        </BodyText>
      </div>
      
      <div style={{
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
          src={journeyImages.coding.original} 
          srcSet={{
            small: journeyImages.coding.small,
            medium: journeyImages.coding.medium,
            large: journeyImages.coding.large
          }}
          alt="Development motivation" 
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
            💡 Inspired by Innovation
          </h4>
        </div>
      </div>
    </div>
  );
}
