import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import projects from "../data/projects";

/**
 * Custom hook to manage all Projects page logic and state
 */
export function useProjectsLogic() {
  const location = useLocation();
  
  // State management
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
  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  // Navigation functions
  const nextProject = useCallback(() => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 250);
  }, [filteredProjects.length]);

  const prevProject = useCallback(() => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 250);
  }, [filteredProjects.length]);

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
  }, [viewMode, filteredProjects.length, nextProject, prevProject]);

  // Filter handling with transition
  const handleFilterChange = (newFilter) => {
    if (filter !== newFilter) {
      setFilterTransition(true);
      setTimeout(() => {
        setFilter(newFilter);
        setCurrentIndex(0);
        setFilterTransition(false);
      }, 150);
    }
  };

  return {
    // State
    currentIndex,
    fade,
    viewMode,
    filter,
    pageLoaded,
    filterTransition,
    
    // Derived state
    filteredProjects,
    currentProject,
    
    // Actions
    setViewMode,
    handleFilterChange,
    nextProject,
    prevProject,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
}
