import { useResponsive } from '../../../hooks/useResponsive';
import { OptimizedImage } from '../../ui';
import { BodyText } from '../../ui';

export default function JourneySection({ journeyImages }) {
  const isMobile = useResponsive();

  const journeyCards = [
    {
      image: journeyImages.passion,
      title: "💡 Passion for Innovation",
      description: "My programming journey started with curiosity and evolved into a deep passion for creating solutions that make a difference."
    },
    {
      image: journeyImages.time,
      title: "⏰ Continuous Learning",
      description: "Technology evolves rapidly, and I embrace staying current with emerging trends and best practices."
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '2rem'
    }}>
      {journeyCards.map((card, index) => (
        <div key={index} style={{
          background: 'var(--bg-card)',
          borderRadius: '15px',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        }}
        >
          <OptimizedImage 
            src={card.image.original} 
            srcSet={{
              small: card.image.small,
              medium: card.image.medium,
              large: card.image.large
            }}
            alt={card.title} 
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }}
          />
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{
              color: 'var(--primary-color)',
              marginBottom: '1rem',
              fontSize: '1.2rem'
            }}>
              {card.title}
            </h3>
            <BodyText>
              {card.description}
            </BodyText>
          </div>
        </div>
      ))}
    </div>
  );
}
