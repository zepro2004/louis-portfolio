import { Card, Button } from '../../ui';

export default function ContactForm({ 
  formData, 
  errors, 
  isSubmitting, 
  handleInputChange, 
  handleSubmit 
}) {
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

  return (
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
  );
}
