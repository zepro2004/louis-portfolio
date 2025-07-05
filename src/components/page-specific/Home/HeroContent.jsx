import { useResponsive } from '../../../hooks/useResponsive';
import { Button } from '../../ui';
import { BodyText } from '../../ui';

export default function HeroContent() {
  const isMobile = useResponsive();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '4rem',
      alignItems: 'center',
      minHeight: '60vh',
      marginBottom: '2rem'
    }}>
      <div style={{
        order: isMobile ? 2 : 1
      }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: isMobile ? '2.5rem' : '3.5rem',
          fontWeight: 'bold',
          lineHeight: '1.2',
          marginBottom: '1rem'
        }}>
          Crafting Digital Solutions
        </div>
        <h2 style={{
          fontSize: isMobile ? '1.3rem' : '1.8rem',
          color: 'var(--text-secondary)',
          fontWeight: '400',
          marginBottom: '2rem',
          lineHeight: '1.4'
        }}>
          Louis Bertrand Ntwali - Full-Stack Developer & Tech Innovator
        </h2>
        <BodyText style={{ 
          fontSize: '1.1rem',
          lineHeight: '1.7',
          marginBottom: '3rem',
          color: 'var(--text-primary)'
        }}>
          Transforming complex challenges into digital experiences through 
          modern web and desktop technologies. With a passion for clean architecture and scalable 
          solutions, I bridge the gap between innovative ideas and real-world applications.
        </BodyText>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          ...(isMobile && { justifyContent: 'center' })
        }}>
          <Button href="/about" style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem'
          }}>
            Discover My Story
          </Button>
          <Button href="/projects" variant="secondary" style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem'
          }}>
            View My Work
          </Button>
        </div>      </div>
      
      <div style={{
        order: isMobile ? 1 : 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'relative',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '8rem',
          color: 'white',
          boxShadow: '0 20px 40px rgba(52, 152, 219, 0.3)',
          animation: 'float 3s ease-in-out infinite'
        }}>
          💻
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
