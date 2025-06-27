import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { useResponsive } from '../hooks/useResponsive';
import { PageWrapper } from '../components/layout';
import { HeroSection, Section, Card, Button } from '../components/ui';
import { PageTitle, HeroSubtitle } from '../components/ui';
import { AnimatedCard } from '../components/shared';
import { Toast } from '../components/page-specific/Contact';

export default function Contact() {
  usePageTitle('Contact Me');
  const isMobile = useResponsive();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  // Function to close toast
  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  // Contact methods data
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "louisbertrandntwali01@gmail.com",
      href: "mailto:louisbertrandntwali01@gmail.com"
    },
    {
      icon: "📞", 
      label: "Phone",
      value: "(343) 558-6673",
      href: "tel:3435586673"
    },
    {
      icon: "💼",
      label: "LinkedIn", 
      value: "Connect with me",
      href: "https://www.linkedin.com/in/louis-bertrand-ntwali-118389312/"
    },
    {
      icon: "🔗",
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/zepro2004"
    }
  ];

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Submit form to FormSubmit.co
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('subject', formData.subject);
      submitData.append('message', formData.message);
      submitData.append('_subject', `Portfolio Contact: ${formData.subject}`);
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');
      
      const response = await fetch('https://formsubmit.co/louisbertrandntwali01@gmail.com', {
        method: 'POST',
        body: submitData
      });
      
      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Show success toast
        setToast({
          isVisible: true,
          message: 'Thank you! Your message has been sent successfully.',
          type: 'success'
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Show error toast
      setToast({
        isVisible: true,
        message: 'Sorry, there was an error sending your message. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '800px'
  };

  const inputStyle = {
    padding: '1.25rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-light)',
    backgroundColor: 'var(--bg-section)',
    color: 'var(--text-primary)',
    fontSize: '1.1rem',
    transition: 'var(--transition-base)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '150px',
    resize: 'vertical',
    fontFamily: 'inherit'
  };

  const errorStyle = {
    color: '#ff6b6b',
    fontSize: '0.875rem',
    marginTop: '0.25rem'
  };

  const contactMethodStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 1.5rem',
    background: 'var(--bg-section)',
    borderRadius: 'var(--radius-full)',
    color: 'var(--primary-color)',
    textDecoration: 'none',
    transition: 'var(--transition-base)',
    border: '1px solid var(--border-light)',
    cursor: 'pointer'
  };

  const contactMethodsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile 
      ? '1fr' 
      : 'repeat(2, 1fr)',
    gap: '1.5rem',
    marginBottom: '3rem',
    maxWidth: '800px',
    margin: '0 auto 3rem auto'
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <PageTitle style={{ fontSize: isMobile ? '2.5rem' : '3.5rem' }}>
          Get In Touch
        </PageTitle>
        <HeroSubtitle style={{ fontSize: isMobile ? '1.1rem' : '1.3rem' }}>
          I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
          or just want to say hello, feel free to reach out.
        </HeroSubtitle>

        {/* Contact Methods */}
        <div style={contactMethodsGridStyle}>
          {contactMethods.map((method, index) => (
            <AnimatedCard
              key={index}
              variant="contact"
              icon={method.icon}
              href={method.href}
              delay={index * 100}
            >
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                textAlign: 'left',
                gap: '0.5rem',
                width: '100%'
              }}>
                <div style={{ 
                  fontWeight: '600', 
                  fontSize: '1.1rem',
                  color: 'var(--text-primary)'
                }}>
                  {method.label}
                </div>
                <div style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.95rem',
                  lineHeight: '1.4',
                  wordBreak: 'break-word'
                }}>
                  {method.value}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </HeroSection>

      {/* Contact Form */}
      <Section title="Send Me a Message">
        <Card style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} style={formStyle}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                style={{
                  ...inputStyle,
                  ...(errors.name && { borderColor: '#ff6b6b' })
                }}
              />
              {errors.name && <div style={errorStyle}>{errors.name}</div>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  ...inputStyle,
                  ...(errors.email && { borderColor: '#ff6b6b' })
                }}
              />
              {errors.email && <div style={errorStyle}>{errors.email}</div>}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                style={{
                  ...inputStyle,
                  ...(errors.subject && { borderColor: '#ff6b6b' })
                }}
              />
              {errors.subject && <div style={errorStyle}>{errors.subject}</div>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                style={{
                  ...textareaStyle,
                  ...(errors.message && { borderColor: '#ff6b6b' })
                }}
              />
              {errors.message && <div style={errorStyle}>{errors.message}</div>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '1rem',
                ...(isSubmitting && { opacity: 0.7, cursor: 'not-allowed' })
              }}
            >
              {isSubmitting ? '🚀 Sending...' : '📤 Send Message'}
            </Button>
          </form>
        </Card>
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
