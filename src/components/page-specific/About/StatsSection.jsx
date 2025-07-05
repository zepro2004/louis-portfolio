export default function StatsSection({ quickFacts }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '2rem',
      background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
      borderRadius: '20px',
      padding: '2.5rem 1rem',
      color: 'white',
      boxShadow: '0 8px 25px rgba(52, 152, 219, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {quickFacts.map((fact, index) => (
        <div key={index} style={{
          textAlign: 'center',
          minWidth: '120px',
          transition: 'transform 0.3s ease',
          cursor: 'default'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        >
          <div style={{
            fontSize: '2.5rem',
            marginBottom: '0.5rem'
          }}>
            {fact.icon}
          </div>
          <div style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginBottom: '0.3rem'
          }}>
            {fact.hasNumericValue ? fact.description : '✓'}
          </div>
          <div style={{
            fontSize: '1rem',
            opacity: '0.9'
          }}>
            {fact.hasNumericValue ? fact.title : fact.description}
          </div>
        </div>
      ))}
    </div>
  );
}
