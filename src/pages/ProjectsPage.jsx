import projects from "../components/Projects";
import { useState, useEffect } from "react";
import { usePageTitle } from '../hooks/usePageTitle';
import { useResponsive } from '../hooks/useResponsive';
import { useHoverEffects } from '../hooks/useHoverEffects';
import { PageWrapper } from '../components/layout';
import { Section, Grid, Button, Card, HeroSection, PageTitle, SectionTitle, BodyText } from '../components/ui';
import { ProjectCard, StatItem } from '../components/specialized';

export default function ProjectViewer() {
  usePageTitle('My Projects');
  const isMobile = useResponsive();
  const { button: buttonHover, card: cardHover } = useHoverEffects();
  
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
    }, 150);
  };

  const prevProject = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 150);
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
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === 'ArrowRight') nextProject();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [filteredProjects.length]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // View mode renderers
  const renderCarouselView = () => {
    if (filteredProjects.length === 0) {
      return (
        <Card style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <SectionTitle style={{ marginBottom: '1rem' }}>
            No projects found
          </SectionTitle>
          <BodyText>
            No projects match the selected filter. Try selecting a different category.
          </BodyText>
        </Card>
      );
    }

    return (
      <Section maxWidth="md">
        {/* Navigation hint */}
        <BodyText 
          style={{ 
            textAlign: 'center', 
            display: 'block',
            marginBottom: '2rem', 
            fontStyle: 'italic',
            opacity: 0.7
          }}
        >
          💡 Use arrow keys or swipe to navigate between projects
        </BodyText>

        {/* Main project card */}
        <Card
          style={{
            opacity: fade ? 0.5 : 1,
            transition: 'opacity 0.15s ease-in-out',
            padding: '2rem',
            ...cardHover
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '2rem' }}>
            {/* Project Image */}
            <div style={{ 
              flex: isMobile ? 'none' : '0 0 300px',
              width: isMobile ? '100%' : '300px'
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  border: '1px solid #e1e1e1'
                }}
              />
            </div>

            {/* Project Details */}
            <div style={{ flex: 1 }}>
              <SectionTitle 
                style={{ 
                  marginBottom: '1rem',
                  color: '#2c3e50'
                }}
              >
                {project.title}
              </SectionTitle>

              <BodyText style={{ marginBottom: '1.5rem' }}>
                {project.description}
              </BodyText>

              <BodyText 
                style={{ 
                  marginBottom: '2rem',
                  fontWeight: 'bold',
                  color: '#7f8c8d'
                }}
              >
                <strong>Technologies:</strong> {project.technologies}
              </BodyText>

              <BodyText style={{ marginBottom: '2rem' }}>
                <strong>Key Features:</strong>
                <br />
                {project.features}
              </BodyText>

              {/* Links */}
              <div style={{ 
                display: 'flex', 
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}>
                {project.github && (
                  <Button
                    variant="primary"
                    onClick={() => window.open(project.github, '_blank')}
                    style={buttonHover}
                  >
                    View Code
                  </Button>
                )}
                {project.demo && (
                  <Button
                    variant="secondary"
                    onClick={() => window.open(project.demo, '_blank')}
                    style={buttonHover}
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid #e1e1e1'
          }}>
            <Button
              variant="outline"
              onClick={prevProject}
              disabled={filteredProjects.length <= 1}
              style={buttonHover}
            >
              ← Previous
            </Button>

            <span style={{ 
              color: '#7f8c8d',
              fontSize: '0.9rem'
            }}>
              {currentIndex + 1} of {filteredProjects.length}
            </span>

            <Button
              variant="outline"
              onClick={nextProject}
              disabled={filteredProjects.length <= 1}
              style={buttonHover}
            >
              Next →
            </Button>
          </div>
        </Card>
      </Section>
    );
  };

  const renderGridView = () => {
    if (filteredProjects.length === 0) {
      return (
        <Card style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <SectionTitle style={{ marginBottom: '1rem' }}>
            No projects found
          </SectionTitle>
          <BodyText>
            No projects match the selected filter. Try selecting a different category.
          </BodyText>
        </Card>
      );
    }

    return (
      <Grid columns={isMobile ? 1 : 2} gap="2rem">
        {filteredProjects.map((proj, index) => (
          <ProjectCard 
            key={index} 
            project={proj} 
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Grid>
    );
  };

  return (
    <PageWrapper>
      <HeroSection
        title="My Projects"
        subtitle="Explore my coding journey through various projects and applications"
        backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />

      <Section maxWidth="lg">
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
            <Button
              key={key}
              variant={filter === key ? 'primary' : 'outline'}
              onClick={() => setFilter(key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                ...buttonHover
              }}
            >
              <span>{icon}</span>
              {label}
            </Button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <Button
            variant={viewMode === 'carousel' ? 'primary' : 'outline'}
            onClick={() => setViewMode('carousel')}
            style={buttonHover}
          >
            📖 Carousel View
          </Button>
          <Button
            variant={viewMode === 'grid' ? 'primary' : 'outline'}
            onClick={() => setViewMode('grid')}
            style={buttonHover}
          >
            📱 Grid View
          </Button>
        </div>

        {/* Project Stats */}
        <Section maxWidth="md" style={{ marginBottom: '3rem' }}>
          <Grid columns={isMobile ? 2 : 4} gap="1rem">
            <StatItem 
              label="Total Projects" 
              value={projects.length}
              icon="🚀"
            />
            <StatItem 
              label="Web Apps" 
              value={projects.filter(p => 
                p.technologies.toLowerCase().includes('javascript') ||
                p.technologies.toLowerCase().includes('php') ||
                p.technologies.toLowerCase().includes('html')
              ).length}
              icon="🌐"
            />
            <StatItem 
              label="Desktop Apps" 
              value={projects.filter(p => 
                p.technologies.toLowerCase().includes('java') &&
                !p.technologies.toLowerCase().includes('javascript')
              ).length}
              icon="💻"
            />
            <StatItem 
              label="Utilities" 
              value={projects.filter(p => 
                p.title.toLowerCase().includes('converter') ||
                p.title.toLowerCase().includes('checker') ||
                p.title.toLowerCase().includes('validator')
              ).length}
              icon="🛠️"
            />
          </Grid>
        </Section>

        {/* Render selected view */}
        {viewMode === 'carousel' ? renderCarouselView() : renderGridView()}
      </Section>
    </PageWrapper>
  );
}
