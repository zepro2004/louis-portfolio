import { usePageTitle } from '../hooks/usePageTitle';
import { useResponsive } from '../hooks/useResponsive';
import { useProjectsLogic } from '../hooks/useProjectsLogic';
import { 
  ProjectStats, 
  ProjectFilters, 
  ViewModeToggle, 
  EmptyState,
  ProjectCarousel,
  ProjectGrid
} from '../components/page-specific/Projects';

export default function ProjectViewer() {
  usePageTitle('My Projects');
  const isMobile = useResponsive();
  
  const {
    viewMode,
    filter,
    pageLoaded,
    filterTransition,
    filteredProjects,
    currentIndex,
    fade,
    currentProject,
    setViewMode,
    handleFilterChange,
    nextProject,
    prevProject,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  } = useProjectsLogic();

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 1rem',
      boxSizing: 'border-box',
      minHeight: '100vh',
      maxWidth: '1200px',
      margin: '0 auto',
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
    }}>
      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 3rem auto',
        padding: '0 1rem'
      }}>
        <h1 style={{ 
          fontSize: isMobile ? '2.2rem' : '3rem',
          fontWeight: 'bold',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem'
        }}>
          My Projects
        </h1>
        <p style={{ 
          fontSize: isMobile ? '1.1rem' : '1.25rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          A showcase of my development journey, featuring full-stack applications,
          web utilities, and database-driven solutions.
        </p>

        {/* Project Statistics */}
        <ProjectStats />
      </div>

      {/* Filter Controls */}
      <ProjectFilters 
        filter={filter} 
        onFilterChange={handleFilterChange} 
      />

      {/* View Mode Toggle */}
      <ViewModeToggle 
        viewMode={viewMode} 
        onViewModeChange={setViewMode} 
      />

      {/* Project Content */}
      <div style={{
        width: '100%',
        opacity: filterTransition ? 0.5 : 1,
        transform: filterTransition ? 'scale(0.98)' : 'scale(1)',
        transition: 'all 0.3s ease'
      }}>
        {filteredProjects.length > 0 ? (
          viewMode === 'carousel' ? (
            <ProjectCarousel 
              currentIndex={currentIndex}
              fade={fade}
              filteredProjects={filteredProjects}
              currentProject={currentProject}
              nextProject={nextProject}
              prevProject={prevProject}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            />
          ) : (
            <ProjectGrid 
              filteredProjects={filteredProjects}
            />
          )
        ) : (
          <EmptyState onShowAll={() => handleFilterChange('all')} />
        )}
      </div>

      {/* GitHub Link */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '3rem',
        opacity: pageLoaded ? 1 : 0,
        transform: pageLoaded ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
        transitionDelay: '0.2s'
      }}>
        <a
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1.5rem 2.5rem',
            backgroundColor: '#2c3e50',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontSize: '1.125rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 16px rgba(44, 62, 80, 0.2)',
            border: '2px solid transparent'
          }}
          href="https://github.com/zepro2004"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#34495e';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 25px rgba(44, 62, 80, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#2c3e50';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 16px rgba(44, 62, 80, 0.2)';
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>🔗</span>
          View More Projects on GitHub
        </a>
      </div>
    </div>
  );
}
