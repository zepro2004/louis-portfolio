import { usePageTitle } from '../hooks/usePageTitle';
import { useResponsive } from '../hooks/useResponsive';
import { PageWrapper } from '../components/layout';
import { HeroSection, Section, Button, OptimizedImage } from '../components/ui';
import { BodyText } from '../components/ui';
// Import images from organized folders
import passionImage from '../assets/images/about/original/Passion.jpg';
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

export default function About() {
  usePageTitle('About Me');
  const isMobile = useResponsive();

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

  const profileImageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: 'var(--primary-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: 'white',
    border: '4px solid var(--primary-color)',
    boxShadow: '0 8px 25px rgba(52, 152, 219, 0.2)'
  };

  return (
    <PageWrapper>
      {/* Hero Section with Personal Introduction */}
      <HeroSection>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          ...(isMobile && { flexDirection: 'column', textAlign: 'center', gap: '2rem' })
        }}>
          <div style={profileImageStyle}>👨‍💻</div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h1 style={{
              fontSize: '2.5rem',
              color: 'var(--primary-color)',
              marginBottom: '1rem',
              ...(isMobile && { fontSize: '2rem', textAlign: 'center' })
            }}>
              Louis Bertrand Ntwali
            </h1>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              margin: '0 0 1.5rem 0',
              ...(isMobile && { fontSize: '1.1rem', textAlign: 'center' })
            }}>
              Computer Science student with a belief in technology's potential 
              to create meaningful change. My journey combines academic studies with practical 
              innovation, driven by curiosity and a commitment to excellence in every project I undertake.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              ...(isMobile && { justifyContent: 'center' })
            }}>
              <span style={{
                background: 'var(--primary-color)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                🎓 Computer Science Student
              </span>
              <span style={{
                background: 'var(--bg-card)',
                color: 'var(--primary-color)',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '500',
                border: '1px solid var(--primary-color)'
              }}>
                📍 Ottawa, ON
              </span>
            </div>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2rem',
          ...(isMobile && { flexDirection: 'column', alignItems: 'center' })
        }}>
          <Button href="/contact">
            Get In Touch
          </Button>
          <Button href="/projects" variant="secondary">
            View My Work
          </Button>
        </div>
      </HeroSection>

      {/* Skills Overview - Horizontal List Style */}
      <Section title="💻 What I Build With">
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '15px',
          padding: '2rem',
          border: '1px solid var(--border-light)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{
              marginBottom: categoryIndex === skillCategories.length - 1 ? '0' : '2rem'
            }}>
              <h3 style={{
                color: 'var(--primary-color)',
                fontSize: '1.3rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>{categoryIndex === 0 ? '🌐' : categoryIndex === 1 ? '⚙️' : '🗄️'}</span>
                {category.title}
              </h3>
              <div style={{
                display: 'flex',
                gap: '0.8rem',
                flexWrap: 'wrap'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} style={{
                    background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    boxShadow: '0 2px 8px rgba(52, 152, 219, 0.3)',
                    transition: 'transform 0.2s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Row - Inline Style */}
      <Section title="� By The Numbers">
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '2rem',
          background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
          borderRadius: '20px',
          padding: '2.5rem 1rem',
          color: 'white',
          boxShadow: '0 8px 25px rgba(52, 152, 219, 0.3)'
        }}>
          {quickFacts.map((fact, index) => (
            <div key={index} style={{
              textAlign: 'center',
              minWidth: '120px'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '0.5rem'
              }}>
                {fact.icon}
              </div>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                marginBottom: '0.3rem'
              }}>
                {fact.hasNumericValue ? fact.description : '✓'}
              </div>
              <div style={{
                fontSize: '1rem',
                opacity: '0.9'
              }}>
                {fact.hasNumericValue ? fact.title : fact.description}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Personal Journey - Image Cards */}
      <Section title="My Journey">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '2rem'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: '15px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}
          >
            <OptimizedImage 
              src={passionImage} 
              srcSet={{
                small: passionSmall,
                medium: passionMedium,
                large: passionLarge
              }}
              alt="Passion for coding" 
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                color: 'var(--primary-color)',
                marginBottom: '1rem',
                fontSize: '1.2rem'
              }}>
                💡 Passion for Innovation
              </h3>
              <BodyText>
                My programming journey started with curiosity and evolved into a deep passion 
                for creating solutions that make a difference.
              </BodyText>
            </div>
          </div>
          
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: '15px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}
          >
            <OptimizedImage 
              src={timeImage} 
              srcSet={{
                small: timeSmall,
                medium: timeMedium,
                large: timeLarge
              }}
              alt="Time and dedication" 
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                color: 'var(--primary-color)',
                marginBottom: '1rem',
                fontSize: '1.2rem'
              }}>
                ⏰ Continuous Learning
              </h3>
              <BodyText>
                Technology evolves rapidly, and I embrace staying current with emerging 
                trends and best practices.
              </BodyText>
            </div>
          </div>
        </div>
      </Section>

      {/* Development Philosophy Section */}
      <Section title="My Development Philosophy">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '2rem',
              color: 'var(--primary-color)',
              marginBottom: '1.5rem',
              fontWeight: '600'
            }}>
              Code with Purpose
            </h3>
            <BodyText style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              Beyond writing functional code, I architect solutions that solve genuine problems 
              and create lasting impact. Each project is an opportunity to push boundaries, 
              challenge conventional thinking, and deliver experiences that truly matter.
            </BodyText>
            <BodyText style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.7',
              color: 'var(--text-secondary)'
            }}>
              From elegant user interfaces to robust backend systems, I believe exceptional 
              software emerges when technical expertise meets creative problem-solving and 
              an unwavering commitment to quality.
            </BodyText>
          </div>
          
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
          }}>
            <OptimizedImage 
              src={codingImage} 
              srcSet={{
                small: codingSmall,
                medium: codingMedium,
                large: codingLarge
              }}
              alt="Development motivation" 
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              color: 'white',
              padding: '2rem 1.5rem 1.5rem',
              textAlign: 'center'
            }}>
              <h4 style={{
                margin: '0',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                💡 Inspired by Innovation
              </h4>
            </div>
          </div>
        </div>
      </Section>

      {/* Development Environment Section */}
      <Section title="Where the Magic Happens">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div style={{
            order: isMobile ? 2 : 1,
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
          }}>
            <OptimizedImage 
              src={motivationImage} 
              srcSet={{
                small: motivationSmall,
                medium: motivationMedium,
                large: motivationLarge
              }}
              alt="Creative inspiration and motivation" 
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              color: 'white',
              padding: '2rem 1.5rem 1.5rem',
              textAlign: 'center'
            }}>
              <h4 style={{
                margin: '0',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                💻 Always Creating
              </h4>
            </div>
          </div>
          
          <div style={{
            order: isMobile ? 1 : 2
          }}>
            <h3 style={{
              fontSize: '2rem',
              color: 'var(--primary-color)',
              marginBottom: '1.5rem',
              fontWeight: '600'
            }}>
              Continuous Learning Journey
            </h3>
            <BodyText style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              Within my development environment, abstract concepts crystallize into tangible 
              solutions. Each coding session—whether debugging complex algorithms or architecting 
              new features—represents another step in my evolution as a software engineer.
            </BodyText>
            <BodyText style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.7',
              color: 'var(--text-secondary)'
            }}>
              The technology landscape evolves at lightning speed, and I thrive on mastering 
              emerging frameworks, adopting cutting-edge methodologies, and exploring innovative 
              tools that define tomorrow's development standards.
            </BodyText>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
