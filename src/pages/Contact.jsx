export default function Contact() {
  return (
    <>
      <h1 className="contact-header">Contact</h1>
      <form
        id="contact-form"
        action="https://formsubmit.co/louisbertrandntwali01@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <div className="contact-form">
          <input
            className="contact"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="contact"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="contact-submit-btn">
            Send
          </button>
        </div>
      </form>
    </>
  );
}
