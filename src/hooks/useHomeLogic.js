// Project images
import NotesAppImage from '../assets/images/projects/NotesApp.png';
import EventsWebsiteImage from '../assets/images/projects/EventsWebsite.png';
import PalindromeCheckerImage from '../assets/images/projects/PalindromeChecker.png';
import DecimalConverterImage from '../assets/images/projects/DecimalConverter.png';
import RomanConverterImage from '../assets/images/projects/RomanConverter.png';
import TelephoneValidatorImage from '../assets/images/projects/TelephoneValidator.png';

export const useHomeLogic = () => {
  // Sample featured projects
  const featuredProjects = [
    {
      title: "Notes App",
      description: "Stores Notes and ToDos. Uses Java Swing for the frontend and MySQL for the backend. Maven is used as the build tool.",
      image: NotesAppImage,
      source: "https://github.com/zepro2004/Notes-App",
      technologies: "Java, Maven, and SQL",
      isExternal: true
    },
    {
      title: "Events Management Website", 
      description: "A dynamic website to manage events. Attendees can RSVP to events, whereas admins can create and delete events.",
      image: EventsWebsiteImage,
      source: "https://github.com/zepro2004/Event-Attendees-Management-Website",
      technologies: "JavaScript, PHP, SQL, HTML, CSS",
      isExternal: true
    }
  ];

  // Utility projects collection for slideshow
  const utilityProjects = [
    {
      title: "Palindrome Checker",
      description: "A web utility that checks if a given text is a palindrome, ignoring spaces and punctuation.",
      image: PalindromeCheckerImage,
      source: "/projects?filter=palindrome",
      technologies: "JavaScript, HTML, CSS"
    },
    {
      title: "Decimal to Binary Converter",
      description: "Convert decimal numbers to binary representation with step-by-step breakdown.",
      image: DecimalConverterImage,
      source: "/projects?filter=decimal",
      technologies: "JavaScript, HTML, CSS"
    },
    {
      title: "Roman Numeral Converter",
      description: "Convert numbers to Roman numerals and vice versa with validation.",
      image: RomanConverterImage,
      source: "/projects?filter=roman",
      technologies: "JavaScript, HTML, CSS"
    },
    {
      title: "Telephone Number Validator",
      description: "Validate US phone numbers in various formats with regex patterns.",
      image: TelephoneValidatorImage,
      source: "/projects?filter=telephone",
      technologies: "JavaScript, HTML, CSS"
    }
  ];

  // Skill categories
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"]
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: ["Java", "Node.js", "PHP", "Python"]
    },
    {
      title: "Database Design",
      icon: "🗄️",
      skills: ["MySQL", "Oracle", "SQL", "Database Optimization"]
    }
  ];

  return {
    featuredProjects,
    utilityProjects,
    skillCategories
  };
};
