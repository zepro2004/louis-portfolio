import projects from "../data/projects";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageTitle } from '../hooks/usePageTitle';
import { useResponsive } from '../hooks/useResponsive';
import { UnifiedStatCard } from '../components/page-specific/Projects';

export default function ProjectViewer() {
  usePageTitle('My Projects');
  const isMobile = useResponsive();
  const location = useLocation();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [viewMode, setViewMode] = useState('carousel');
  const [filter, setFilter] = useState('all');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [filterTransition, setFilterTransition] = useState(false);

  // Read URL parameters and set filter on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get('filter');
    
    if (filterParam) {
      // Map specific project names to filter categories
      const filterMap = {
        'palindrome': 'utility',
        'decimal': 'utility', 
        'roman': 'utility',
        'telephone': 'utility',
        'web': 'web',
        'desktop': 'desktop',
        'utility': 'utility'
      };
      
      const mappedFilter = filterMap[filterParam.toLowerCase()] || filterParam.toLowerCase();
      if (['all', 'web', 'desktop', 'utility'].includes(mappedFilter)) {
        setFilter(mappedFilter);
      }
    }
  }, [location.search]);

  // Page entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Reset current index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

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

  // Touch handlers for mobile swiping
  const minSwipeDistance = 50;

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

    if (isLeftSwipe) nextProject();
    if (isRightSwipe) prevProject();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (viewMode === 'carousel' && filteredProjects.length > 1) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevProject();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextProject();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [viewMode, filteredProjects.length]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

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
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '1rem' : '2rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <UnifiedStatCard 
            value={projects.length} 
            label="Total Projects" 
            icon="🚀" 
            delay={100}
          />
          <UnifiedStatCard 
            value="6+" 
            label="Technologies" 
            icon="🌐" 
            delay={300}
          />
          <UnifiedStatCard 
            value="2+" 
            label="Years Building" 
            icon="💻" 
            delay={500}
          />
        </div>
      </div>

      {/* Filter Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {[
          { key: 'all', label: 'All Projects', icon: '🚀' },
          { key: 'web', label: 'Web Apps', icon: '🌐' },
          { key: 'desktop', label: 'Desktop Apps', icon: '💻' },
          { key: 'utility', label: 'Utilities', icon: '🛠️' }
        ].map(({ key, label, icon }) => (
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
            onClick={() => {
              if (filter !== key) {
                setFilterTransition(true);
                setTimeout(() => {
                  setFilter(key);
                  setCurrentIndex(0);
                  setFilterTransition(false);
                }, 150);
              }
            }}
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
                if (filter !== key) {
                  setFilterTransition(true);
                  setTimeout(() => {
                    setFilter(key);
                    setCurrentIndex(0);
                    setFilterTransition(false);
                  }, 150);
                }
              }
            }}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
      </div>

      {/* View Mode Toggle */}
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
          onClick={() => setViewMode('carousel')}            onMouseEnter={(e) => {
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
          onClick={() => setViewMode('grid')}
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

      {/* Project Content */}
      {viewMode === 'carousel' ? (
        /* Carousel View */
        <div style={{ 
          width: '100%', 
          maxWidth: '800px',
          opacity: filterTransition ? 0.5 : 1,
          transform: filterTransition ? 'scale(0.98)' : 'scale(1)',
          transition: 'all 0.3s ease'
        }}>
          {filteredProjects.length > 0 ? (
            <>
              {/* Navigation hint */}
              <div style={{
                textAlign: 'center',
                color: '#95a5a6',
                fontSize: '0.875rem',
                marginBottom: '2rem',
                fontStyle: 'italic'
              }}>
                💡 Use arrow keys or swipe to navigate between projects
              </div>

              {/* Main project display */}
              <div
                style={{
                  width: '100%',
                  opacity: fade ? 0.7 : 1,
                  transform: fade ? 'scale(0.95)' : 'scale(1)',
                  transition: 'all 0.25s ease-in-out'
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Project Card */}
                <div style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  marginBottom: '2rem'
                }}>
                  {/* Project Image */}
                  <div style={{
                    width: '100%',
                    height: isMobile ? '200px' : '300px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onClick={() => window.open(project.source, '_blank')}
                  >
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    {/* Overlay on hover */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'var(--accent-brand-20)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = 1}
                    onMouseLeave={(e) => e.target.style.opacity = 0}
                    >
                    </div>
                  </div>

                  {/* Project Details */}
                  <div style={{ padding: '2rem' }}>
                    <h2 
                      style={{ 
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease'
                      }}
                      onClick={() => window.open(project.source, '_blank')}
                      onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                    >
                      {project.title}
                    </h2>
                    <p style={{ 
                      fontSize: '1.1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}>
                      {project.description}
                    </p>
                    <div style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                      marginBottom: '1.5rem',
                      padding: '1rem',
                      backgroundColor: 'var(--bg-section)',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)'
                    }}>
                      <strong>Technologies:</strong> {project.technologies}
                    </div>
                    
                    {/* Action Button */}
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.875rem 1.5rem',
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: 'medium',
                        transition: 'all 0.3s ease',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--primary-dark)';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = 'var(--shadow-brand-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'var(--primary-color)';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <span>🔗</span>
                    </a>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '2rem'
                }}>
                  {/* Previous Button */}
                  <button
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '50%',
                      border: 'none',
                      fontSize: '1.5rem',
                      backgroundColor: filteredProjects.length <= 1 ? 'var(--text-muted)' : 'var(--primary-color)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: filteredProjects.length <= 1 ? 'not-allowed' : 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      opacity: filteredProjects.length <= 1 ? 0.6 : 1
                    }}
                    disabled={filteredProjects.length <= 1}
                    onClick={() => {
                      if (filteredProjects.length > 1) {
                        prevProject();
                      }
                    }}
                    onMouseEnter={(e) => {
                      if (filteredProjects.length > 1) {
                        e.target.style.backgroundColor = '#2980b9';
                        e.target.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (filteredProjects.length > 1) {
                        e.target.style.backgroundColor = '#3498db';
                        e.target.style.transform = 'translateY(0)';
                      }
                    }}
                    title="Previous project"
                  >
                    ←
                  </button>

                  {/* Progress indicator */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '1rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <span>
                      {currentIndex + 1} of {filteredProjects.length}
                    </span>
                  </div>

                  {/* Next Button */}
                  <button
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '50%',
                      border: 'none',
                      fontSize: '1.5rem',
                      backgroundColor: filteredProjects.length <= 1 ? 'var(--text-muted)' : 'var(--primary-color)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: filteredProjects.length <= 1 ? 'not-allowed' : 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      opacity: filteredProjects.length <= 1 ? 0.6 : 1
                    }}
                    disabled={filteredProjects.length <= 1}
                    onClick={() => {
                      if (filteredProjects.length > 1) {
                        nextProject();
                      }
                    }}
                    onMouseEnter={(e) => {
                      if (filteredProjects.length > 1) {
                        e.target.style.backgroundColor = '#2980b9';
                        e.target.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (filteredProjects.length > 1) {
                        e.target.style.backgroundColor = '#3498db';
                        e.target.style.transform = 'translateY(0)';
                      }
                    }}
                    title="Next project"
                  >
                    →
                  </button>
                </div>
              </div>
            </>
          ) : (
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
                onClick={() => setFilter('all')}
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
          )}
        </div>
      ) : (
        /* Grid View */
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          justifyItems: 'center',
          opacity: filterTransition ? 0.5 : 1,
          transform: filterTransition ? 'scale(0.98)' : 'scale(1)',
          transition: 'all 0.3s ease'
        }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid var(--border-light)',
                  width: '100%',
                  maxWidth: '400px',
                  cursor: 'pointer',
                  transform: 'translateY(0) scale(1)',
                  transformOrigin: 'center',
                  willChange: 'transform, box-shadow',
                  backfaceVisibility: 'hidden',
                  isolation: 'isolate'
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = 'translateY(-8px) scale(1.02)';
                  card.style.boxShadow = 'var(--shadow-lg)';
                  card.style.borderColor = 'var(--border-color)';
                  
                  // Image scale effect
                  const img = card.querySelector('img');
                  if (img) img.style.transform = 'scale(1.05)';
                  
                  // Overlay effect
                  const overlay = card.querySelector('[data-overlay]');
                  if (overlay) overlay.style.opacity = '1';
                  
                  // Title color effect
                  const title = card.querySelector('[data-title]');
                  if (title) title.style.color = 'var(--primary-color)';
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = 'translateY(0) scale(1)';
                  card.style.boxShadow = 'var(--shadow-md)';
                  card.style.borderColor = 'var(--border-light)';
                  
                  // Reset image scale
                  const img = card.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  
                  // Reset overlay
                  const overlay = card.querySelector('[data-overlay]');
                  if (overlay) overlay.style.opacity = '0';
                  
                  // Reset title color
                  const title = card.querySelector('[data-title]');
                  if (title) title.style.color = 'var(--text-primary)';
                }}
              >
                {/* Project Image */}
                <div 
                  style={{
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                  onClick={() => window.open(proj.source, '_blank')}
                >
                  <img
                    src={proj.image}
                    alt={`Screenshot of ${proj.title}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                  {/* Overlay */}
                  <div 
                    data-overlay
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'var(--accent-brand-20)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      pointerEvents: 'none'
                    }}
                  >
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 
                    data-title
                    style={{ 
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                      cursor: 'pointer',
                      transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => window.open(proj.source, '_blank')}
                  >
                    {proj.title}
                  </h3>
                  <p style={{ 
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {proj.description}
                  </p>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                    padding: '0.75rem',
                    backgroundColor: 'var(--bg-section)',
                    borderRadius: '6px',
                    border: '1px solid var(--border-light)'
                  }}>
                    <strong>Tech:</strong> {proj.technologies}
                  </div>
                  
                  {/* Action Button */}
                  <a
                    href={proj.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: 'medium',
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      width: '100%',
                      justifyContent: 'center',
                      boxSizing: 'border-box'
                    }}
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      e.target.style.backgroundColor = 'var(--primary-dark)';
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = 'var(--shadow-brand)';
                    }}
                    onMouseLeave={(e) => {
                      e.stopPropagation();
                      e.target.style.backgroundColor = 'var(--primary-color)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <span>🔗</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div style={{
              gridColumn: '1 / -1',
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
                onClick={() => setFilter('all')}
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
          )}
        </div>
      )}

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
