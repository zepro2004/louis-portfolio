/**
 * Project filter buttons component
 */
export default function ProjectFilters({ filter, onFilterChange }) {
  const filterOptions = [
    { key: 'all', label: 'All Projects', icon: '🚀' },
    { key: 'web', label: 'Web Apps', icon: '🌐' },
    { key: 'desktop', label: 'Desktop Apps', icon: '💻' },
    { key: 'utility', label: 'Utilities', icon: '🛠️' }
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    }}>
      {filterOptions.map(({ key, label, icon }) => (
        <button
          key={key}
          style={{
            padding: '0.75rem 1.5rem',
            border: filter === key ? 'none' : `2px solid var(--primary-color)`,
            borderRadius: '25px',
            backgroundColor: filter === key ? 'var(--primary-color)' : 'transparent',
            color: filter === key ? 'white' : 'var(--primary-color)',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: 'medium',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: filter === key ? 'var(--shadow-brand)' : 'none'
          }}
          onClick={() => onFilterChange(key)}
          onMouseEnter={(e) => {
            if (filter !== key) {
              e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.2)';
            }
          }}
          onMouseLeave={(e) => {
            if (filter !== key) {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }
          }}
          title={`Filter projects by ${label.toLowerCase()}`}
          aria-label={`Filter projects by ${label.toLowerCase()}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onFilterChange(key);
            }
          }}
        >
          <span>{icon}</span>
          {label}
        </button>
      ))}
    </div>
  );
}
