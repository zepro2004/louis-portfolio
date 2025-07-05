import { useResponsive } from '../../../hooks/useResponsive';
import { Button } from '../../ui';

export default function HeroActions() {
  const isMobile = useResponsive();
  
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '2rem',
      ...(isMobile && { flexDirection: 'column', alignItems: 'center' })
    }}>
      <Button href="/contact">
        Get In Touch
      </Button>
      <Button href="/projects" variant="secondary">
        View My Work
      </Button>
    </div>
  );
}
