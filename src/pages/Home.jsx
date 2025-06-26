import { usePageTitle } from '../hooks/usePageTitle';
import { useResponsive } from '../hooks/useResponsive';
import { PageWrapper } from '../components/layout';
import { HeroSection, Section, Grid, Button } from '../components/ui';
import { HeroTitle, HeroSubtitle, BodyText, SectionTitle } from '../components/ui';
import { ProjectCard, SkillCategory } from '../components/specialized';
import { mergeStyles } from '../utils/styles';
import NotesAppImage from '../assets/images/Projects/NotesApp.png';
import EventsWebsiteImage from '../assets/images/Projects/EventsWebsite.png';
import PalindromeCheckerImage from '../assets/images/Projects/PalindromeChecker.png';

export default function Home() {
  usePageTitle(''); // Home page uses the default title
  const isMobile = useResponsive();

  // Sample featured projects
  const featuredProjects = [
    {
      title: "Notes App",
      description: "Stores Notes and ToDos. Uses Java Swing for the frontend and MySQL for the backend. Maven is used as the build tool.",
      image: NotesAppImage,
      source: "https://github.com/zepro2004/Notes-App",
      technologies: "Java, Maven, and SQL"
    },
    {
      title: "Events Management Website", 
      description: "A dynamic website to manage events. Attendees can RSVP to events, whereas admins can create and delete events.",
      image: EventsWebsiteImage,
      source: "https://github.com/zepro2004/Event-Attendees-Management-Website",
      technologies: "JavaScript, PHP, SQL, HTML, CSS"
    },
    {
      title: "Web Utilities Collection",
      description: "A collection of utility tools including decimal to binary converter, palindrome checker, telephone validator, and roman numeral converter.",
      image: PalindromeCheckerImage,
      source: "/projects?filter=utility",
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

  const ctaButtonsStyle = {
    display: 'flex', 
    gap: '1rem', 
    justifyContent: 'center', 
    flexWrap: 'wrap',
    ...(isMobile && { flexDirection: 'column', alignItems: 'center' })
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>Hi, I'm Louis</HeroTitle>
        <HeroSubtitle>
          Computer Science Student & Aspiring Full-Stack Developer
        </HeroSubtitle>
        <BodyText style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem auto',
          textAlign: 'center'
        }}>
          Welcome to my portfolio! I'm passionate about creating innovative software solutions 
          and building amazing user experiences. Currently pursuing my Computer Science degree 
          while developing real-world projects and gaining hands-on experience in full-stack development.
        </BodyText>
        <div style={ctaButtonsStyle}>
          <Button href="/about">
            Learn More About Me
          </Button>
          <Button href="/projects" variant="secondary">
            View My Projects
          </Button>
        </div>
      </HeroSection>

      {/* Skills Section */}
      <Section title="What I Do">
        <Grid columns="threeColumn">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </Grid>
      </Section>

      {/* Featured Projects Section */}
      <Section title="Featured Projects">
        <Grid columns="twoColumn">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              variant={index === 0 ? "featured" : "default"}
            />
          ))}
        </Grid>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Button href="/projects" variant="secondary">
            🚀 View All Projects
          </Button>
        </div>
      </Section>
    </PageWrapper>
  );
}

