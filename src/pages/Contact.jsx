import { useState, useEffect } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Contact() {
  usePageTitle('Contact Me');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Handle responsive design with proper effect
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  const contactPageStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1rem',
    boxSizing: 'border-box',
    minHeight: '100vh'
  };

  const heroSectionStyles = {
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '800px'
  };

  const contactHeaderStyles = {
    fontSize: '3.5rem',
    fontWeight: '600',
    color: 'var(--primary-color)',
    marginBottom: '1rem'
  };

  const contactSubtitleStyles = {
    fontSize: '1.3rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    marginBottom: '2rem'
  };

  const contactMethodsStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  };

  const contactMethodStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    background: 'var(--bg-section)',
    borderRadius: 'var(--radius-full)',
    color: 'var(--primary-color)',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    border: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-md)',
    transition: 'var(--transition-base)'
  };

  const formContainerStyles = {
    width: '100%',
    maxWidth: '600px',
    background: 'var(--bg-card)',
    borderRadius: 'var(--radius-2xl)',
    padding: '3rem 2rem',
    boxShadow: 'var(--shadow-xl)',
    border: '1px solid var(--border-light)'
  };

  const formHeaderStyles = {
    textAlign: 'center',
    fontSize: '2rem',
    color: 'var(--text-primary)',
    marginBottom: '2rem',
    fontWeight: '600'
  };

  const contactFormStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const inputGroupStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const labelStyles = {
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    marginBottom: '0.25rem'
  };

  const inputStyles = {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid var(--border-color)',
    borderRadius: '10px',
    backgroundColor: 'var(--bg-section)',
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  const textareaStyles = {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid var(--border-color)',
    borderRadius: '10px',
    backgroundColor: 'var(--bg-section)',
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit'
  };

  const buttonStyles = {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    cursor: 'pointer',
    transition: 'var(--transition-base)',
    boxShadow: 'var(--shadow-brand)',
    marginTop: '1rem'
  };

  const buttonHoverStyles = {
    backgroundColor: 'var(--primary-dark)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-brand-hover)'
  };

  const errorStyles = {
    color: '#dc3545',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
    fontWeight: '500'
  };

  const loadingButtonStyles = {
    ...buttonStyles,
    backgroundColor: 'var(--gray-300)',
    cursor: 'not-allowed',
    opacity: 0.7
  };

  const inputErrorStyles = {
    borderColor: '#dc3545',
    boxShadow: '0 0 0 3px var(--accent-error-10)'
  };

  const handleButtonHover = (e) => {
    Object.assign(e.currentTarget.style, buttonHoverStyles);
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-brand)';
  };

  const handleInputFocus = (e) => {
    e.currentTarget.style.borderColor = 'var(--primary-color)';
    e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-brand-10)';
  };

  const handleInputBlur = (e) => {
    e.currentTarget.style.borderColor = 'var(--border-color)';
    e.currentTarget.style.boxShadow = 'none';
    
    // Validate individual field on blur
    const { name, value } = e.target;
    const fieldErrors = {};
    
    if (name === 'name' && !value.trim()) {
      fieldErrors.name = 'Name is required';
    } else if (name === 'email') {
      if (!value.trim()) {
        fieldErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        fieldErrors.email = 'Please enter a valid email address';
      }
    } else if (name === 'message') {
      if (!value.trim()) {
        fieldErrors.message = 'Message is required';
      } else if (value.trim().length < 10) {
        fieldErrors.message = 'Message must be at least 10 characters long';
      }
    }
    
    setErrors(prev => ({
      ...prev,
      ...fieldErrors
    }));
  };

  const handleMethodHover = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.borderColor = 'var(--primary-color)';
  };

  const handleMethodLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--bg-section)';
    e.currentTarget.style.color = 'var(--primary-color)';
    e.currentTarget.style.borderColor = 'var(--border-light)';
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create FormData object for submission
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('subject', formData.subject || 'New Contact Form Submission from Portfolio');
      formDataObj.append('message', formData.message);
      formDataObj.append('_subject', 'New Contact Form Submission from Portfolio');
      formDataObj.append('_captcha', 'false');
      formDataObj.append('_template', 'table');
      
      // Submit to FormSubmit.co
      const response = await fetch('https://formsubmit.co/louisbertrandntwali01@gmail.com', {
        method: 'POST',
        body: formDataObj
      });
      
      if (response.ok) {
        // Reset form and show success message
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('✅ Message sent successfully! I\'ll get back to you soon.');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ There was an error sending your message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Responsive styles
  const responsiveHeaderStyles = isMobile ? {
    fontSize: '2.5rem'
  } : {};

  const responsiveFormContainerStyles = isMobile ? {
    padding: '2rem 1.5rem'
  } : {};

  const responsiveContactMethodsStyles = isMobile ? {
    flexDirection: 'column',
    alignItems: 'center'
  } : {};

  return (
    <div style={contactPageStyles}>
      {/* Hero Section */}
      <div style={heroSectionStyles}>
        <h1 style={{...contactHeaderStyles, ...responsiveHeaderStyles}}>Get In Touch</h1>
        <p style={contactSubtitleStyles}>
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
          Feel free to reach out using any of the methods below or send me a message directly.
        </p>
        
        {/* Contact Methods */}
        <div style={{...contactMethodsStyles, ...responsiveContactMethodsStyles}}>
          <a
            href="mailto:louisbertrandntwali01@gmail.com"
            style={contactMethodStyles}
            onMouseEnter={handleMethodHover}
            onMouseLeave={handleMethodLeave}
          >
            📧 Email
          </a>
          <a
            href="https://www.linkedin.com/in/louis-bertrand-ntwali-118389312/"
            target="_blank"
            rel="noopener noreferrer"
            style={contactMethodStyles}
            onMouseEnter={handleMethodHover}
            onMouseLeave={handleMethodLeave}
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/zepro2004"
            target="_blank"
            rel="noopener noreferrer"
            style={contactMethodStyles}
            onMouseEnter={handleMethodHover}
            onMouseLeave={handleMethodLeave}
          >
            🔗 GitHub
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div style={{...formContainerStyles, ...responsiveFormContainerStyles}}>
        <h2 style={formHeaderStyles}>Send a Message</h2>
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Hidden fields for FormSubmit.co configuration */}
          <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          
          <div style={contactFormStyles}>
            <div style={inputGroupStyles}>
              <label htmlFor="name" style={labelStyles}>Name *</label>
              <input
                style={{
                  ...inputStyles,
                  ...(errors.name ? inputErrorStyles : {})
                }}
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <span style={errorStyles}>{errors.name}</span>}
            </div>

            <div style={inputGroupStyles}>
              <label htmlFor="email" style={labelStyles}>Email *</label>
              <input
                style={{
                  ...inputStyles,
                  ...(errors.email ? inputErrorStyles : {})
                }}
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span style={errorStyles}>{errors.email}</span>}
            </div>

            <div style={inputGroupStyles}>
              <label htmlFor="subject" style={labelStyles}>Subject</label>
              <input
                style={inputStyles}
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>

            <div style={inputGroupStyles}>
              <label htmlFor="message" style={labelStyles}>Message *</label>
              <textarea
                style={{
                  ...textareaStyles,
                  ...(errors.message ? inputErrorStyles : {})
                }}
                id="message"
                name="message"
                placeholder="Tell me about your project, idea, or just say hello!"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && <span style={errorStyles}>{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              style={isSubmitting ? loadingButtonStyles : buttonStyles}
              onMouseEnter={!isSubmitting ? handleButtonHover : undefined}
              onMouseLeave={!isSubmitting ? handleButtonLeave : undefined}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
