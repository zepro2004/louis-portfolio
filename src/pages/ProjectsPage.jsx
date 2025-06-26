import projects from "../components/Projects";
import { useState, useEffect } from "react";

export default function ProjectViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'
  const [filter, setFilter] = useState('all'); // 'all', 'web', 'desktop', 'utility'
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Filter projects based on selected filter
  const getFilteredProjects = () => {
    if (filter === 'all') return projects;
    if (filter === 'web') return projects.filter(p =>
      p.technologies.toLowerCase().includes('javascript') ||
      p.technologies.toLowerCase().includes('php') ||
      p.technologies.toLowerCase().includes('html')
    );
    if (filter === 'desktop') return projects.filter(p =>
      p.technologies.toLowerCase().includes('java') &&
      !p.technologies.toLowerCase().includes('javascript')
    );
    if (filter === 'utility') return projects.filter(p =>
      p.title.toLowerCase().includes('converter') ||
      p.title.toLowerCase().includes('checker') ||
      p.title.toLowerCase().includes('validator')
    );
    return projects;
  };

  const filteredProjects = getFilteredProjects();
  const project = filteredProjects[currentIndex] || filteredProjects[0];

  // Navigation functions
  const nextProject = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 250);
  };

  const prevProject = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 250);
  };

  // Minimum distance required to trigger swipe
  const minSwipeDistance = 50;

  // Touch handlers for mobile swipe navigation
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && viewMode === 'carousel') {
      nextProject();
    }
    if (isRightSwipe && viewMode === 'carousel') {
      prevProject();
    }
  };

  // Handle URL parameters for filtering
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam && ['web', 'desktop', 'utility'].includes(filterParam)) {
      setFilter(filterParam);
    }
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (viewMode === 'carousel') {
        if (e.key === 'ArrowLeft') {
          prevProject();
        } else if (e.key === 'ArrowRight') {
          nextProject();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [viewMode, prevProject, nextProject]);

  // Reset currentIndex when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const projectPageStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 'var(--spacing-2xl) var(--spacing-lg)',
    boxSizing: 'border-box',
    minHeight: '100vh'
  };

  const projectHeaderStyles = {
    textAlign: 'center',
    marginBottom: 'var(--spacing-2xl)',
    maxWidth: 'var(--container-md)'
  };

  const projectIntroStyles = {
    fontSize: 'var(--text-3xl)',
    fontWeight: 'var(--font-semibold)',
    color: 'var(--primary-color)',
    marginBottom: 'var(--spacing-lg)'
  };

  const projectSubtitleStyles = {
    fontSize: 'var(--text-lg)',
    color: 'var(--text-secondary)',
    lineHeight: 'var(--leading-relaxed)',
    marginBottom: 'var(--spacing-lg)'
  };

  const projectStatsStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: 'var(--spacing-xl)',
    marginBottom: 'var(--spacing-xl)',
    flexWrap: 'wrap'
  };

  const statItemStyles = {
    textAlign: 'center',
    padding: 'var(--spacing-lg)',
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
    minWidth: '100px',
    border: '1px solid var(--border-light)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const statNumberStyles = {
    fontSize: 'var(--text-2xl)',
    fontWeight: 'var(--font-bold)',
    color: 'var(--primary-color)',
    display: 'block'
  };

  const statLabelStyles = {
    fontSize: 'var(--text-sm)',
    color: 'var(--text-secondary)',
    marginTop: 'var(--spacing-xs)'
  };

  const viewToggleStyles = {
    display: 'flex',
    gap: 'var(--spacing-lg)',
    marginBottom: 'var(--spacing-2xl)',
    padding: 'var(--spacing-md)',
    backgroundColor: 'var(--bg-section)',
    borderRadius: 'var(--radius-full)',
    boxShadow: 'var(--shadow-sm)',
    justifyContent: 'center',
    border: '1px solid var(--border-light)',
    transition: 'all 0.3s ease'
  };

  const filterSectionStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: 'var(--spacing-lg)',
    marginBottom: 'var(--spacing-xl)',
    flexWrap: 'wrap'
  };

  const filterButtonStyles = {
    padding: 'var(--spacing-md) var(--spacing-lg)',
    border: '1px solid var(--primary-color)',
    borderRadius: 'var(--radius-full)',
    backgroundColor: 'transparent',
    color: 'var(--primary-color)',
    fontSize: 'var(--text-sm)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: 'var(--font-medium)'
  };

  const activeFilterStyles = {
    backgroundColor: 'var(--primary-color)',
    color: 'white'
  };

  const toggleButtonStyles = {
    padding: 'var(--spacing-md) var(--spacing-xl)',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-medium)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const activeToggleStyles = {
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    boxShadow: 'var(--shadow-brand)'
  };

  const inactiveToggleStyles = {
    backgroundColor: 'transparent',
    color: 'var(--text-secondary)'
  };

  // Grid View Styles
  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: 'var(--spacing-lg)',
    width: '100%',
    maxWidth: 'var(--container-xl)',
    marginBottom: 'var(--spacing-xl)',
    justifyItems: 'center'
  };

  const gridProjectCardStyles = {
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-xl)',
    boxShadow: 'var(--shadow-lg)',
    overflow: 'hidden',
    transition: 'var(--transition-base)',
    border: '1px solid var(--border-light)',
    width: '100%',
    maxWidth: '400px'
  };

  const gridProjectImageStyles = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const gridProjectContentStyles = {
    padding: 'var(--spacing-lg)'
  };

  const gridProjectTitleStyles = {
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--font-semibold)',
    color: 'var(--text-primary)',
    marginBottom: 'var(--spacing-md)'
  };

  const gridProjectDateStyles = {
    fontSize: 'var(--text-sm)',
    color: 'var(--primary-color)',
    marginBottom: 'var(--spacing-lg)',
    fontWeight: 'var(--font-medium)'
  };

  const gridProjectDescriptionStyles = {
    fontSize: 'var(--text-base)',
    color: 'var(--text-secondary)',
    lineHeight: 'var(--leading-relaxed)',
    marginBottom: 'var(--spacing-lg)'
  };

  const gridProjectTechStyles = {
    fontSize: 'var(--text-sm)',
    color: 'var(--primary-color)',
    fontWeight: 'var(--font-medium)',
    marginBottom: 'var(--spacing-lg)'
  };

  const gridProjectLinkStyles = {
    display: 'inline-block',
    padding: 'var(--spacing-md) var(--spacing-lg)',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-medium)',
    transition: 'var(--transition-base)'
  };

  // Carousel View Styles (Enhanced)
  const carouselContainerStyles = {
    width: '100%',
    maxWidth: 'var(--container-md)',
    marginBottom: 'var(--spacing-2xl)'
  };

  const projectTileStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 'var(--spacing-2xl)',
    backgroundColor: 'var(--bg-card)',
    borderRadius: 'var(--radius-2xl)',
    boxShadow: 'var(--shadow-xl)',
    transition: 'all 0.5s ease',
    marginBottom: 'var(--spacing-xl)',
    border: '1px solid var(--border-light)',
    cursor: 'pointer'
  };

  const fadeOutStyles = {
    opacity: 0
  };

  const projectTitleStyles = {
    fontSize: 'var(--text-2xl)',
    fontWeight: 'var(--font-bold)',
    color: 'var(--primary-color)',
    marginBottom: 'var(--spacing-lg)',
    textAlign: 'center'
  };

  const projectDescriptionStyles = {
    fontSize: 'var(--text-lg)',
    textAlign: 'center',
    color: 'var(--text-secondary)',
    lineHeight: 'var(--leading-relaxed)',
    marginBottom: 'var(--spacing-lg)',
    maxWidth: '600px'
  };

  const projectDateStyles = {
    fontSize: 'var(--text-base)',
    color: 'var(--primary-color)',
    fontWeight: 'var(--font-medium)',
    marginBottom: 'var(--spacing-lg)'
  };

  const projectTilePStyles = {
    fontSize: 'var(--text-lg)',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--spacing-xl)'
  };

  const imgStyles = {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: 'var(--radius-xl)',
    margin: 'var(--spacing-xl) 0',
    boxShadow: 'var(--shadow-lg)',
    transition: 'var(--transition-base)'
  };

  const projectNavigationStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--spacing-xl)',
    marginBottom: 'var(--spacing-xl)',
    width: '100%',
    maxWidth: 'var(--container-md)',
    margin: '0 auto var(--spacing-xl) auto'
  };

  const navButtonStyles = {
    padding: 'var(--spacing-lg) var(--spacing-xl)',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--text-lg)',
    fontWeight: 'var(--font-semibold)',
    cursor: 'pointer',
    transition: 'var(--transition-base)',
    boxShadow: 'var(--shadow-brand)',
    minWidth: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-md)'
  };

  const navButtonHoverStyles = {
    backgroundColor: 'var(--primary-dark)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-brand-hover)'
  };

  const projectCounterStyles = {
    fontSize: 'var(--text-base)',
    color: 'var(--text-secondary)',
    fontWeight: 'var(--font-medium)',
    padding: 'var(--spacing-md) var(--spacing-lg)',
    backgroundColor: 'var(--bg-section)',
    borderRadius: 'var(--radius-full)',
    border: '1px solid var(--border-light)',
    minWidth: '100px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'default'
  };

  const githubLinkStyles = {
    display: 'inline-block',
    padding: 'var(--spacing-lg) var(--spacing-xl)',
    backgroundColor: 'var(--text-primary)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: 'var(--radius-full)',
    fontSize: 'var(--text-lg)',
    fontWeight: 'var(--font-semibold)',
    transition: 'var(--transition-base)',
    boxShadow: 'var(--shadow-lg)',
    marginTop: 'var(--spacing-xl)'
  };

  const handleButtonHover = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-dark)';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-brand-hover)';
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-brand)';
  };

  const handleImageHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.02)';
  };

  const handleImageLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleGridCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
  };

  const handleGridCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };

  const handleGithubLinkHover = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--gray-900)';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
  };

  const handleGithubLinkLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--text-primary)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };

  // New hover handlers for interactive elements
  const handleStatItemHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
    e.currentTarget.style.borderColor = 'var(--primary-color)';
  };

  const handleStatItemLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    e.currentTarget.style.borderColor = 'var(--border-light)';
  };

  const handleFilterButtonHover = (e) => {
    if (e.currentTarget.style.backgroundColor !== 'var(--primary-color)') {
      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
      e.currentTarget.style.boxShadow = 'var(--shadow-brand)';
      e.currentTarget.style.backgroundColor = 'var(--accent-brand-10)';
    }
  };

  const handleFilterButtonLeave = (e) => {
    if (e.currentTarget.style.backgroundColor !== 'var(--primary-color)') {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  const handleToggleButtonHover = (e) => {
    if (e.currentTarget.style.backgroundColor !== 'var(--primary-color)') {
      e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
      e.currentTarget.style.backgroundColor = 'var(--accent-brand-10)';
    }
  };

  const handleToggleButtonLeave = (e) => {
    if (e.currentTarget.style.backgroundColor !== 'var(--primary-color)') {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  const handleProjectTileHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
  };

  const handleProjectTileLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
  };

  const handleCounterHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.backgroundColor = 'var(--accent-brand-10)';
  };

  const handleCounterLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.backgroundColor = 'var(--bg-section)';
  };

  // Media query styles for responsive design
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const responsivePageStyles = isMobile ? {
    padding: '1rem'
  } : {};

  const responsiveProjectTileStyles = isMobile ? {
    padding: '2rem 1rem'
  } : {};

  const responsiveNavButtonStyles = isMobile ? {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    minWidth: '100px'
  } : {};

  const responsiveGridStyles = isMobile ? {
    gridTemplateColumns: '1fr',
    gap: 'var(--spacing-lg)'
  } : {};

  const responsiveProjectTitleStyles = isMobile ? {
    fontSize: '2rem'
  } : {};

  const responsiveProjectIntroStyles = isMobile ? {
    fontSize: '2.2rem'
  } : {};

  return (
    <div style={{...projectPageStyles, ...responsivePageStyles}}>
      <div style={projectHeaderStyles}>
        <h1 style={{...projectIntroStyles, ...responsiveProjectIntroStyles}}>My Projects</h1>
        <p style={projectSubtitleStyles}>
          A showcase of my development journey, featuring full-stack applications,
          web utilities, and database-driven solutions.
        </p>

        {/* Project Statistics */}
        <div style={projectStatsStyles}>
          <div 
            style={statItemStyles}
            onMouseEnter={handleStatItemHover}
            onMouseLeave={handleStatItemLeave}
          >
            <span style={statNumberStyles}>{projects.length}</span>
            <div style={statLabelStyles}>Total Projects</div>
          </div>
          <div 
            style={statItemStyles}
            onMouseEnter={handleStatItemHover}
            onMouseLeave={handleStatItemLeave}
          >
            <span style={statNumberStyles}>6+</span>
            <div style={statLabelStyles}>Technologies</div>
          </div>
          <div 
            style={statItemStyles}
            onMouseEnter={handleStatItemHover}
            onMouseLeave={handleStatItemLeave}
          >
            <span style={statNumberStyles}>2+</span>
            <div style={statLabelStyles}>Years Building</div>
          </div>
        </div>
      </div>

      {/* Project Filter */}
      <div style={filterSectionStyles}>
        <button
          style={{
            ...filterButtonStyles,
            ...(filter === 'all' ? activeFilterStyles : {})
          }}
          onClick={() => setFilter('all')}
          onMouseEnter={handleFilterButtonHover}
          onMouseLeave={handleFilterButtonLeave}
        >
          All Projects
        </button>
        <button
          style={{
            ...filterButtonStyles,
            ...(filter === 'web' ? activeFilterStyles : {})
          }}
          onClick={() => setFilter('web')}
          onMouseEnter={handleFilterButtonHover}
          onMouseLeave={handleFilterButtonLeave}
        >
          Web Apps
        </button>
        <button
          style={{
            ...filterButtonStyles,
            ...(filter === 'desktop' ? activeFilterStyles : {})
          }}
          onClick={() => setFilter('desktop')}
          onMouseEnter={handleFilterButtonHover}
          onMouseLeave={handleFilterButtonLeave}
        >
          Desktop Apps
        </button>
        <button
          style={{
            ...filterButtonStyles,
            ...(filter === 'utility' ? activeFilterStyles : {})
          }}
          onClick={() => setFilter('utility')}
          onMouseEnter={handleFilterButtonHover}
          onMouseLeave={handleFilterButtonLeave}
        >
          Utilities
        </button>
      </div>

      {/* View Toggle */}
      <div style={viewToggleStyles}>
        <button
          style={{
            ...toggleButtonStyles,
            ...(viewMode === 'carousel' ? activeToggleStyles : inactiveToggleStyles)
          }}
          onClick={() => setViewMode('carousel')}
          onMouseEnter={handleToggleButtonHover}
          onMouseLeave={handleToggleButtonLeave}
        >
          📖 Carousel View
        </button>
        <button
          style={{
            ...toggleButtonStyles,
            ...(viewMode === 'grid' ? activeToggleStyles : inactiveToggleStyles)
          }}
          onClick={() => setViewMode('grid')}
          onMouseEnter={handleToggleButtonHover}
          onMouseLeave={handleToggleButtonLeave}
        >
          📋 Grid View
        </button>
      </div>

      {viewMode === 'carousel' ? (
        /* Carousel View */
        <div style={carouselContainerStyles}>
          {filteredProjects.length > 0 ? (
            <>
              {/* Navigation hints */}
              <div style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--spacing-lg)',
                fontStyle: 'italic'
              }}>
                💡 Use arrow keys or swipe to navigate between projects
              </div>

              <div
                style={{
                  ...projectTileStyles,
                  ...responsiveProjectTileStyles,
                  ...(fade ? fadeOutStyles : {})
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseEnter={handleProjectTileHover}
                onMouseLeave={handleProjectTileLeave}
              >
                <h2 style={{...projectTitleStyles, ...responsiveProjectTitleStyles}}>{project.title}</h2>
                <p style={{...projectDateStyles, ...projectTilePStyles}}>📅 {project.date}</p>
                <p style={{...projectDescriptionStyles, ...projectTilePStyles}}>{project.description}</p>
                <p style={projectTilePStyles}>
                  <strong>🛠️ Technologies: </strong>
                  {project.technologies}
                </p>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={imgStyles}
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                  />
                </a>
              </div>

              <div style={projectNavigationStyles}>
                <button
                  style={{...navButtonStyles, ...responsiveNavButtonStyles}}
                  onClick={prevProject}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                  disabled={filteredProjects.length === 0}
                  title="View previous project"
                >
                  <span>←</span> Previous
                </button>
                <div 
                  style={projectCounterStyles}
                  onMouseEnter={handleCounterHover}
                  onMouseLeave={handleCounterLeave}
                >
                  {currentIndex + 1} of {filteredProjects.length}
                </div>
                <button
                  style={{...navButtonStyles, ...responsiveNavButtonStyles}}
                  onClick={nextProject}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                  disabled={filteredProjects.length === 0}
                  title="View next project"
                >
                  Next <span>→</span>
                </button>
              </div>

              {/* Progress indicator */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                {filteredProjects.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: index === currentIndex ? 'var(--primary-color)' : 'var(--border-color)',
                      transition: 'var(--transition-base)',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      setFade(true);
                      setTimeout(() => {
                        setCurrentIndex(index);
                        setFade(false);
                      }, 250);
                    }}
                    title={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            /* Empty state for carousel */
            <div style={{
              textAlign: 'center',
              padding: 'var(--spacing-3xl) var(--spacing-xl)',
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-lg)',
              backgroundColor: 'var(--bg-section)',
              borderRadius: 'var(--radius-xl)',
              border: '2px dashed var(--border-color)'
            }}>
              <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-lg)' }}>🔍</div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>No projects found</h3>
              <p>No projects match the selected filter. Try selecting a different category.</p>
            </div>
          )}
        </div>
      ) : (
        /* Grid View */
        <div style={{...gridContainerStyles, ...responsiveGridStyles}}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              style={gridProjectCardStyles}
              onMouseEnter={handleGridCardHover}
              onMouseLeave={handleGridCardLeave}
            >
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={gridProjectImageStyles}
                />
              </a>
              <div style={gridProjectContentStyles}>
                <h3 style={gridProjectTitleStyles}>{project.title}</h3>
                <p style={gridProjectDateStyles}>📅 {project.date}</p>
                <p style={gridProjectDescriptionStyles}>{project.description}</p>
                <p style={gridProjectTechStyles}>🛠️ {project.technologies}</p>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={gridProjectLinkStyles}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: 'var(--spacing-3xl) var(--spacing-xl)',
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-lg)',
              backgroundColor: 'var(--bg-section)',
              borderRadius: 'var(--radius-xl)',
              border: '2px dashed var(--border-color)'
            }}>
              <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-lg)' }}>🔍</div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>No projects found</h3>
              <p>No projects match the selected filter. Try selecting a different category.</p>
            </div>
          )}
        </div>
      )}

      {/* GitHub Link */}
      <a
        style={githubLinkStyles}
        href="https://github.com/zepro2004"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleGithubLinkHover}
        onMouseLeave={handleGithubLinkLeave}
      >
        🔗 View More on GitHub
      </a>
    </div>
  );
}