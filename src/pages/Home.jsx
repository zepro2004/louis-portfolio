import { usePageTitle } from '../hooks/usePageTitle';
import { useHomeLogic } from '../hooks/useHomeLogic';
import { PageWrapper } from '../components/layout';
import { HeroSection, Section } from '../components/ui';
import { 
  HeroContent,
  ExpertiseSection,
  FeaturedWork,
  CodeAnimation,
  DataFlowAnimation
} from '../components/page-specific/Home';
// CSS animations
import '../assets/styles/animations.css';

export default function Home() {
  usePageTitle(''); // Home page uses the default title
  const { featuredProjects, utilityProjects, skillCategories } = useHomeLogic();

  return (
    <PageWrapper>
      {/* Large Hero Section with Split Layout */}
      <HeroSection>
        <HeroContent />
      </HeroSection>

      {/* Expertise Showcase */}
      <Section title="What I Specialize In" wide>
        <ExpertiseSection skillCategories={skillCategories} />
      </Section>

      {/* Featured Projects - Horizontal Showcase */}
      <Section title="Featured Work" wide>
        <FeaturedWork 
          featuredProjects={featuredProjects} 
          utilityProjects={utilityProjects} 
        />
      </Section>

      {/* Interactive Code Animation */}
      <Section title="Building the Future">
        <CodeAnimation />
      </Section>

      {/* Data Flow Animation */}
      <Section title="Technology in Motion">
        <DataFlowAnimation />
      </Section>
    </PageWrapper>
  );
}
