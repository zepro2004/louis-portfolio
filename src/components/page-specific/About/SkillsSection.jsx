export default function SkillsSection({ skillCategories }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: '15px',
      padding: '2rem',
      border: '1px solid var(--border-light)',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} style={{
          marginBottom: categoryIndex === skillCategories.length - 1 ? '0' : '2rem'
        }}>
          <h3 style={{
            color: 'var(--primary-color)',
            fontSize: '1.3rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>{categoryIndex === 0 ? '🌐' : categoryIndex === 1 ? '⚙️' : '🗄️'}</span>
            {category.title}
          </h3>
          <div style={{
            display: 'flex',
            gap: '0.8rem',
            flexWrap: 'wrap'
          }}>
            {category.skills.map((skill, skillIndex) => (
              <span key={skillIndex} style={{
                background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '500',
                boxShadow: '0 2px 8px rgba(52, 152, 219, 0.3)',
                transition: 'transform 0.2s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
