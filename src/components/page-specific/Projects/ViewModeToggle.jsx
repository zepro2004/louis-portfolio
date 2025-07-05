/**
 * View mode toggle component for switching between carousel and grid views
 */
export default function ViewModeToggle({ viewMode, onViewModeChange }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      <button
        style={{
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          border: 'none',
          fontSize: '0.875rem',
          fontWeight: 'medium',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backgroundColor: viewMode === 'carousel' ? 'var(--primary-color)' : 'var(--bg-section)',
          color: viewMode === 'carousel' ? 'white' : 'var(--text-primary)',
          boxShadow: viewMode === 'carousel' ? 'var(--shadow-brand)' : 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
        onClick={() => onViewModeChange('carousel')}
        onMouseEnter={(e) => {
          if (viewMode !== 'carousel') {
            e.target.style.backgroundColor = 'var(--accent-brand-10, #e3f2fd)';
            e.target.style.transform = 'translateY(-2px)';
          }
        }}
        onMouseLeave={(e) => {
          if (viewMode !== 'carousel') {
            e.target.style.backgroundColor = 'var(--bg-section, #f8f9fa)';
            e.target.style.transform = 'translateY(0)';
          }
        }}
        title="Switch to carousel view"
      >
        🎠 Carousel View
      </button>
      <button
        style={{
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          border: 'none',
          fontSize: '0.875rem',
          fontWeight: 'medium',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backgroundColor: viewMode === 'grid' ? 'var(--primary-color)' : 'var(--bg-section)',
          color: viewMode === 'grid' ? 'white' : 'var(--text-primary)',
          boxShadow: viewMode === 'grid' ? 'var(--shadow-brand)' : 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
        onClick={() => onViewModeChange('grid')}
        onMouseEnter={(e) => {
          if (viewMode !== 'grid') {
            e.target.style.backgroundColor = 'var(--accent-brand-10, #e3f2fd)';
            e.target.style.transform = 'translateY(-2px)';
          }
        }}
        onMouseLeave={(e) => {
          if (viewMode !== 'grid') {
            e.target.style.backgroundColor = 'var(--bg-section, #f8f9fa)';
            e.target.style.transform = 'translateY(0)';
          }
        }}
        title="Switch to grid view"
      >
        📱 Grid View
      </button>
    </div>
  );
}
