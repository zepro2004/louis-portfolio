/**
 * Empty state component for when no projects match the filter
 */
export default function EmptyState({ onShowAll }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 2rem',
      color: '#7f8c8d',
      fontSize: '1.125rem',
      background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
      borderRadius: '20px',
      border: '2px dashed #ddd',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div style={{ 
        fontSize: '4rem', 
        marginBottom: '1.5rem',
        filter: 'grayscale(20%)'
      }}>🔍</div>
      <h3 style={{ 
        color: '#2c3e50', 
        marginBottom: '1rem',
        fontSize: '1.5rem',
        fontWeight: '600'
      }}>No projects found</h3>
      <p style={{
        lineHeight: '1.6',
        marginBottom: '1.5rem'
      }}>No projects match the current filter. Try selecting a different category or view all projects.</p>
      <button
        onClick={onShowAll}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#2980b9';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#3498db';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        🚀 Show All Projects
      </button>
    </div>
  );
}
