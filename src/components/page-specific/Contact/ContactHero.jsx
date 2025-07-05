import { useResponsive } from '../../../hooks/useResponsive';
import { PageTitle, HeroSubtitle } from '../../ui';
import { AnimatedCard } from '../../shared';

export default function ContactHero({ contactMethods }) {
  const isMobile = useResponsive();

  const contactMethodsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile 
      ? '1fr' 
      : 'repeat(2, 1fr)',
    gap: '1.5rem',
    marginBottom: '3rem',
    maxWidth: '800px',
    margin: '0 auto 3rem auto'
  };

  return (
    <>
      <PageTitle style={{ fontSize: isMobile ? '2.5rem' : '3.5rem' }}>
        Get In Touch
      </PageTitle>
      <HeroSubtitle style={{ fontSize: isMobile ? '1.1rem' : '1.3rem' }}>
        I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
        or just want to say hello, feel free to reach out.
      </HeroSubtitle>

      {/* Contact Methods */}
      <div style={contactMethodsGridStyle}>
        {contactMethods.map((method, index) => (
          <AnimatedCard
            key={index}
            variant="contact"
            icon={method.icon}
            href={method.href}
            delay={index * 100}
          >
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-start', 
              textAlign: 'left',
              gap: '0.5rem',
              width: '100%'
            }}>
              <div style={{ 
                fontWeight: '600', 
                fontSize: '1.1rem',
                color: 'var(--text-primary)'
              }}>
                {method.label}
              </div>
              <div style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.95rem',
                lineHeight: '1.4',
                wordBreak: 'break-word'
              }}>
                {method.value}
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </>
  );
}
