// Import images from organized folders
import passionImage from '../assets/images/about/original/passion.jpg';
import timeImage from '../assets/images/about/original/time.jpg';
import codingImage from '../assets/images/about/original/coding.jpg';
import motivationImage from '../assets/images/about/original/motivation.jpg';

// Import optimized WebP versions from size-specific folders
import passionSmall from '../assets/images/about/small/passion-small.webp';
import passionMedium from '../assets/images/about/medium/passion-medium.webp';
import passionLarge from '../assets/images/about/large/passion-large.webp';
import timeSmall from '../assets/images/about/small/time-small.webp';
import timeMedium from '../assets/images/about/medium/time-medium.webp';
import timeLarge from '../assets/images/about/large/time-large.webp';
import codingSmall from '../assets/images/about/small/coding-small.webp';
import codingMedium from '../assets/images/about/medium/coding-medium.webp';
import codingLarge from '../assets/images/about/large/coding-large.webp';
import motivationSmall from '../assets/images/about/small/motivation-small.webp';
import motivationMedium from '../assets/images/about/medium/motivation-medium.webp';
import motivationLarge from '../assets/images/about/large/motivation-large.webp';

export const useAboutLogic = () => {
  // Skill categories data - reorganized
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML/CSS", "Bootstrap"]
    },
    {
      title: "Backend Development", 
      skills: ["Java", "Node.js", "PHP", "Python"]
    },
    {
      title: "Database & Tools",
      skills: ["MySQL", "Oracle", "Git", "VS Code"]
    }
  ];

  // Quick facts data
  const quickFacts = [
    {
      icon: "🎓",
      title: "Status",
      description: "College Student",
      hasNumericValue: false
    },
    {
      icon: "⌨️",
      title: "Coding Experience",
      description: "2+ Years", 
      hasNumericValue: true
    },
    {
      icon: "🌍",
      title: "Location", 
      description: "Ottawa, ON, Canada",
      hasNumericValue: false
    },
    {
      icon: "🚀",
      title: "Projects Completed",
      description: "10+",
      hasNumericValue: true
    }
  ];

  // Journey images with optimized versions
  const journeyImages = {
    passion: {
      original: passionImage,
      small: passionSmall,
      medium: passionMedium,
      large: passionLarge
    },
    time: {
      original: timeImage,
      small: timeSmall,
      medium: timeMedium,
      large: timeLarge
    },
    coding: {
      original: codingImage,
      small: codingSmall,
      medium: codingMedium,
      large: codingLarge
    },
    motivation: {
      original: motivationImage,
      small: motivationSmall,
      medium: motivationMedium,
      large: motivationLarge
    }
  };

  return {
    skillCategories,
    quickFacts,
    journeyImages
  };
};
