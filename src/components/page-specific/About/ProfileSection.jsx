import { useResponsive } from '../../../hooks/useResponsive';
import { Button } from '../../ui';

export default function ProfileSection() {
  const isMobile = useResponsive();
  
  const profileImageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: 'var(--primary-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: 'white',
    border: '4px solid var(--primary-color)',
    boxShadow: '0 8px 25px rgba(52, 152, 219, 0.2)'
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      ...(isMobile && { flexDirection: 'column', textAlign: 'center', gap: '2rem' })
    }}>
      <div style={profileImageStyle}>👨‍💻</div>
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: 'var(--primary-color)',
          marginBottom: '1rem',
          ...(isMobile && { fontSize: '2rem', textAlign: 'center' })
        }}>
          Louis Bertrand Ntwali
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          margin: '0 0 1.5rem 0',
          ...(isMobile && { fontSize: '1.1rem', textAlign: 'center' })
        }}>
          Computer Science student with a belief in technology's potential 
          to create meaningful change. My journey combines academic studies with practical 
          innovation, driven by curiosity and a commitment to excellence in every project I undertake.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          ...(isMobile && { justifyContent: 'center' })
        }}>
          <span style={{
            background: 'var(--primary-color)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}>
            🎓 Computer Science Student
          </span>
          <span style={{
            background: 'var(--bg-card)',
            color: 'var(--primary-color)',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            fontSize: '0.9rem',
            fontWeight: '500',
            border: '1px solid var(--primary-color)'
          }}>
            📍 Ottawa, ON
          </span>
        </div>
      </div>
    </div>
  );
}
