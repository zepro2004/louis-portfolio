import { useResponsive } from '../../../hooks/useResponsive';
import { useEntranceAnimation } from '../../../hooks/useEntranceAnimation';

function SkillCategoryCard({ category, index }) {
  const entranceAnimation = useEntranceAnimation(index * 200);

  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: '20px',
      padding: '2.5rem 2rem',
      textAlign: 'center',
      border: '1px solid var(--border-light)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      ...entranceAnimation
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 15px 35px rgba(52, 152, 219, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
    }}>
      <div style={{
        fontSize: '3rem',
        marginBottom: '1.5rem'
      }}>
        {category.icon}
      </div>
      <h3 style={{
        color: 'var(--primary-color)',
        fontSize: '1.4rem',
        marginBottom: '1rem',
        fontWeight: '600'
      }}>
        {category.title}
      </h3>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        justifyContent: 'center'
      }}>
        {category.skills.map((skill, skillIndex) => (
          <span key={skillIndex} style={{
            background: 'var(--primary-color)',
            color: 'white',
            padding: '0.3rem 0.8rem',
            borderRadius: '15px',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ExpertiseSection({ skillCategories }) {
  const isMobile = useResponsive();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '2rem',
      marginBottom: '3rem'
    }}>
      {skillCategories.map((category, index) => (
        <SkillCategoryCard key={index} category={category} index={index} />
      ))}
    </div>
  );
}
