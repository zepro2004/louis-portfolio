import { usePageTitle } from '../hooks/usePageTitle';
import { useResponsive } from '../hooks/useResponsive';
import { PageWrapper } from '../components/layout';
import { HeroSection, Section, Grid, Button } from '../components/ui';
import { PageTitle, BodyText } from '../components/ui';
import { SkillCategory, StatItem } from '../components/specialized';

export default function About() {
  usePageTitle('About Me');
  const isMobile = useResponsive();

  // Skill categories data
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "JavaScript", "Python", "SQL"]
    },
    {
      title: "Web Development", 
      skills: ["React", "Node.js", "HTML/CSS", "Bootstrap"]
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
      title: "Education",
      description: "Computer Programming Diploma"
    },
    {
      icon: "💼",
      title: "Focus",
      description: "Full-Stack Development"
    },
    {
      icon: "🌍",
      title: "Location", 
      description: "Ottawa, ON, Canada"
    },
    {
      icon: "🚀",
      title: "Experience",
      description: "2+ Years Coding"
    }
  ];

  const profileImageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'var(--primary-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: 'white',
    margin: '0 auto 1rem'
  };

  const ctaButtonsStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
    ...(isMobile && { flexDirection: 'column', alignItems: 'center' })
  };

  return (
    <PageWrapper>
      <PageTitle>About Me</PageTitle>
      
      {/* Hero Section */}
      <HeroSection>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          ...(isMobile && { flexDirection: 'column', textAlign: 'center' })
        }}>
          <div style={profileImageStyle}>
            👨‍💻
          </div>
          <div>
            <h1 style={{
              fontSize: '2.5rem',
              color: 'var(--primary-color)',
              marginBottom: '1rem'
            }}>
              Louis Bertrand Ntwali
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              marginBottom: '0'
            }}>
              Computer Programming Student & Aspiring Developer
            </p>
          </div>
        </div>
        
        <BodyText style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '1.5rem',
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          I'm passionate about creating efficient, user-friendly software solutions. 
          Currently pursuing my Computer Science degree while building real-world projects 
          and gaining hands-on experience in full-stack development.
        </BodyText>

        <div style={ctaButtonsStyle}>
          <Button href="/contact">
            Get In Touch
          </Button>
          <Button href="/projects" variant="secondary">
            View My Work
          </Button>
        </div>
      </HeroSection>

      {/* Core Skills */}
      <Section title="💻 Core Skills">
        <Grid columns="threeColumn">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </Grid>
      </Section>

      {/* Quick Facts */}
      <Section title="📊 Quick Facts">
        <Grid columns="twoColumn">
          {quickFacts.map((fact, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '1.5rem',
              background: 'var(--bg-section)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)',
              transition: 'var(--transition-base)',
              cursor: 'pointer'
            }}>
              <span style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                display: 'block'
              }}>
                {fact.icon}
              </span>
              <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--primary-color)',
                marginBottom: '0.5rem'
              }}>
                {fact.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                margin: '0'
              }}>
                {fact.description}
              </p>
            </div>
          ))}
        </Grid>
      </Section>
    </PageWrapper>
  );
}
