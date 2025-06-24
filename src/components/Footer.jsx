export default function Header() {
  return (
    <footer id="contact">
      <div className="closing-statement">
        <p>
          Feel free to contact me using the links below for more information
        </p>
      </div>
      <div className="divider"></div>
      <div className="socials">
        {/*Social media and contact links*/}
        <a
          href="https://github.com/zepro2004"
          className="contact-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/louis-bertrand-ntwali-118389312/"
          className="contact-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="#contact"
          className="contact-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a href="tel:3435586673" className="contact-links">
          <i className="fa fa-phone"></i>
        </a>
        <a
          href="mailto:louisbertrandntwali01@gmail.com"
          className="contact-links"
          target="_blank"
        >
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}
