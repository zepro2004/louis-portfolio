import { usePageTitle } from '../hooks/usePageTitle';
import { useContactLogic } from '../hooks/useContactLogic';
import { PageWrapper } from '../components/layout';
import { HeroSection, Section } from '../components/ui';
import { 
  ContactHero,
  ContactForm,
  Toast 
} from '../components/page-specific/Contact';

export default function Contact() {
  usePageTitle('Contact Me');
  const {
    contactMethods,
    formData,
    errors,
    isSubmitting,
    toast,
    closeToast,
    handleInputChange,
    handleSubmit
  } = useContactLogic();

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <ContactHero contactMethods={contactMethods} />
      </HeroSection>

      {/* Contact Form */}
      <Section title="Send Me a Message">
        <ContactForm 
          formData={formData}
          errors={errors}
          isSubmitting={isSubmitting}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </Section>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </PageWrapper>
  );
}
