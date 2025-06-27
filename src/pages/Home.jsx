import { usePageTitle } from '../hooks/usePageTitle';
import { useResponsive } from '../hooks/useResponsive';
import { PageWrapper } from '../components/layout';
import { HeroSection, Section, Button } from '../components/ui';
import { BodyText } from '../components/ui';
import { ProjectSlideshow } from '../components/page-specific/Home';
// CSS animations
import '../assets/styles/animations.css';
// Project images
import NotesAppImage from '../assets/images/projects/NotesApp.png';
import EventsWebsiteImage from '../assets/images/projects/EventsWebsite.png';
import PalindromeCheckerImage from '../assets/images/projects/PalindromeChecker.png';
import DecimalConverterImage from '../assets/images/projects/DecimalConverter.png';
import RomanConverterImage from '../assets/images/projects/RomanConverter.png';
import TelephoneValidatorImage from '../assets/images/projects/TelephoneValidator.png';

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

  return (
    <PageWrapper>
      {/* Large Hero Section with Split Layout */}
      <HeroSection>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          minHeight: '60vh',
          marginBottom: '2rem'
        }}>
          {/* Left Content */}
          <div style={{
            order: isMobile ? 2 : 1
          }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              fontWeight: 'bold',
              lineHeight: '1.2',
              marginBottom: '1rem'
            }}>
              Hi, I'm Louis
            </div>
            <h2 style={{
              fontSize: isMobile ? '1.3rem' : '1.8rem',
              color: 'var(--text-secondary)',
              fontWeight: '400',
              marginBottom: '2rem',
              lineHeight: '1.4'
            }}>
              Full-Stack Developer & Tech Innovator
            </h2>
            <BodyText style={{ 
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '3rem',
              color: 'var(--text-primary)'
            }}>
              I build scalable web applications and innovative software solutions. 
              Specializing in modern technologies and clean code architecture, 
              I transform complex ideas into elegant digital experiences.
            </BodyText>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              ...(isMobile && { justifyContent: 'center' })
            }}>
              <Button href="/about" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem'
              }}>
                Discover My Story
              </Button>
              <Button href="/projects" variant="secondary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem'
              }}>
                View My Work
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div style={{
            order: isMobile ? 1 : 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8rem',
              color: 'white',
              boxShadow: '0 20px 40px rgba(52, 152, 219, 0.3)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              💻
              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Expertise Showcase */}
      <Section title="What I Specialize In" wide>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {skillCategories.map((category, index) => (
            <div key={index} style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              border: '1px solid var(--border-light)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 15px 35px rgba(52, 152, 219, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
            }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>
                {category.icon}
              </div>
              <h3 style={{
                color: 'var(--primary-color)',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                {category.title}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                justifyContent: 'center'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Projects - Horizontal Showcase */}
      <Section title="Featured Work" wide>
        <div style={{
          background: 'linear-gradient(135deg, var(--bg-card), #f8f9fa)',
          borderRadius: '25px',
          padding: '3rem 2rem',
          border: '1px solid var(--border-light)',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {/* First two projects with direct links */}
            {featuredProjects.map((project, index) => (
              <a 
                key={index} 
                href={project.source}
                target={project.isExternal ? "_blank" : "_self"}
                rel={project.isExternal ? "noopener noreferrer" : ""}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{
                      color: 'var(--primary-color)',
                      fontSize: '1.5rem',
                      marginBottom: '1rem',
                      fontWeight: '700',
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 2px 4px rgba(52, 152, 219, 0.1)'
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      marginBottom: '1rem'
                    }}>
                      {project.description}
                    </p>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'var(--primary-color)',
                      fontWeight: '500'
                    }}>
                      {project.technologies}
                    </div>
                    <div style={{
                      marginTop: '1rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      {project.isExternal ? (
                        <>
                          <span>🔗</span>
                          <span>View on GitHub</span>
                        </>
                      ) : (
                        <>
                          <span>👁️</span>
                          <span>View in Projects</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}
            
            {/* Third project - Utility Collection Slideshow */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              height: '100%'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <ProjectSlideshow 
                projects={utilityProjects}
                onProjectClick={(project) => {
                  window.location.href = '/projects?filter=utility';
                }}
              />
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button href="/projects" variant="secondary" style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem'
            }}>
              🚀 Explore All Projects
            </Button>
          </div>
        </div>
      </Section>

      {/* Interactive Code Animation */}
      <Section title="Building the Future">
        <div className="code-particles-container">
          <div className="code-particles">
            <div className="particle">const solution = () =&gt; &#123;</div>
            <div className="particle">function build() &#123;</div>
            <div className="particle">return innovation;</div>
            <div className="particle">async function create() &#123;</div>
            <div className="particle">&#123; code: 'excellence' &#125;</div>
            <div className="particle">export default Future;</div>
            <div className="particle">import &#123; passion &#125; from 'dev';</div>
            <div className="particle">while(learning) &#123; grow(); &#125;</div>
          </div>
          <div className="code-display">
            <pre className="code-text">
              <span className="code-comment">// My development approach</span>{'\n'}
              <span className="code-keyword">const</span> <span className="code-function">buildSolution</span> = <span className="code-keyword">async</span> () =&gt; &#123;{'\n'}
              {'  '}<span className="code-keyword">const</span> idea = <span className="code-string">"Transform concepts into reality"</span>;{'\n'}
              {'  '}<span className="code-keyword">const</span> tools = [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'Innovation'</span>];{'\n'}
              {'  '}<span className="code-keyword">return</span> <span className="code-function">deploy</span>(idea, tools);{'\n'}
              &#125;<span className="typing-animation">|</span>
            </pre>
          </div>
        </div>
      </Section>

      {/* Data Flow Animation */}
      <Section title="Technology in Motion">
        <div className="data-flow-container">
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          <div className="data-nodes" style={{ display: 'flex' }}>
            <div className="data-node">💻</div>
            <div className="data-node">⚡</div>
            <div className="data-node">🚀</div>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}

