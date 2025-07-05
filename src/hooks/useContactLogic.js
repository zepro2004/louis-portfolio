import { useState } from 'react';

export const useContactLogic = () => {
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

  // Contact methods data
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "lbertrand01@proton.me",
      href: "mailto:lbertrand01@proton.me"
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

  // Function to close toast
  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

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
      
      const response = await fetch('https://formsubmit.co/lbertrand01@proton.me', {
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

  return {
    contactMethods,
    formData,
    errors,
    isSubmitting,
    toast,
    closeToast,
    handleInputChange,
    handleSubmit
  };
};
