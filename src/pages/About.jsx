import { usePageTitle } from '../hooks/usePageTitle';
import { useAboutLogic } from '../hooks/useAboutLogic';
import { PageWrapper } from '../components/layout';
import { HeroSection, Section } from '../components/ui';
import { 
  ProfileSection,
  SkillsSection,
  StatsSection,
  JourneySection,
  PhilosophySection,
  EnvironmentSection,
  HeroActions
} from '../components/page-specific/About';

export default function About() {
  usePageTitle('About Me');
  const { skillCategories, quickFacts, journeyImages } = useAboutLogic();

  return (
    <PageWrapper>
      <HeroSection>
        <ProfileSection />
        <HeroActions />
      </HeroSection>

      <Section title="💻 What I Build With" hover={true}>
        <SkillsSection skillCategories={skillCategories} />
      </Section>

      <Section title="📊 By The Numbers" hover={true}>
        <StatsSection quickFacts={quickFacts} />
      </Section>

      <Section title="My Journey">
        <JourneySection journeyImages={journeyImages} />
      </Section>

      <Section title="My Development Philosophy">
        <PhilosophySection journeyImages={journeyImages} />
      </Section>
    </PageWrapper>
  );
}
