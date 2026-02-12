import { Link } from "react-router-dom";
import { useResponsive } from "../../hooks/useResponsive";
import { useHoverEffects } from "../../hooks/useHoverEffects";

export default function Footer() {
  const isMobile = useResponsive();
  const { link: linkHover } = useHoverEffects();

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerStyles = {
    width: "100%",
    background: "var(--footer-gradient)",
    color: "var(--text-primary)",
    marginTop: "auto",
    padding: "4rem 2rem 2rem",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    borderTop: "2px solid var(--border-brand)",
  };

  const backgroundPatternStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `
      radial-gradient(circle at 25% 25%, var(--accent-brand-10) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, var(--accent-secondary-10) 0%, transparent 50%)
    `,
    pointerEvents: "none",
  };

  const footerContainerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    position: "relative",
    zIndex: 1,
  };

  const footerContentStyles = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fit, minmax(250px, 1fr))",
    gap: isMobile ? "2rem" : "3rem",
    alignItems: "start",
    textAlign: isMobile ? "center" : "left",
  };

  const brandNameStyles = {
    fontSize: "2rem",
    fontWeight: "700",
    background: "var(--primary-gradient)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: 0,
  };

  const brandTaglineStyles = {
    fontSize: "1.1rem",
    color: "var(--text-secondary)",
    margin: 0,
    lineHeight: "1.5",
  };

  const skillsTagsStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "1rem",
    justifyContent: isMobile ? "center" : "flex-start",
  };

  const skillTagStyles = {
    backgroundColor: "var(--accent-brand-20)",
    color: "var(--primary-color)",
    padding: "0.3rem 0.8rem",
    borderRadius: "12px",
    fontSize: "0.8rem",
    fontWeight: "500",
    border: "1px solid var(--border-brand-hover)",
  };

  const sectionHeaderStyles = {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "white",
    margin: 0,
    marginBottom: "1rem",
  };

  const quickLinkStyles = {
    color: "var(--text-secondary)",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    position: "relative",
    display: "inline-block",
  };

  const socialLinkStyles = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.8rem 1.2rem",
    borderRadius: "25px",
    backgroundColor: "var(--border-light)",
    color: "white",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "500",
    border: "1px solid var(--border-light)",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  };

  const socialLinksStyles = {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: isMobile ? "center" : "flex-start",
  };

  const contactItemStyles = {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    color: "var(--text-secondary)",
    fontSize: "0.95rem",
    justifyContent: isMobile ? "center" : "flex-start",
  };

  const dividerStyles = {
    width: "100%",
    height: "1px",
    background: "var(--divider-gradient)",
    margin: "2rem 0 1rem",
  };

  const copyrightSectionStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
    paddingTop: "2rem",
    borderTop: "1px solid var(--border-light)",
    ...(isMobile && {
      flexDirection: "column",
      textAlign: "center",
    }),
  };

  const copyrightStyles = {
    fontSize: "0.9rem",
    color: "var(--text-muted)",
    margin: 0,
  };

  const builtWithStyles = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.9rem",
    color: "var(--text-muted)",
  };

  const handleSocialHover = (e) => {
    e.currentTarget.style.backgroundColor = "var(--accent-brand-80)";
    e.currentTarget.style.borderColor = "var(--primary-color)";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "var(--shadow-brand-hover)";
  };

  const handleSocialLeave = (e) => {
    e.currentTarget.style.backgroundColor = "var(--border-light)";
    e.currentTarget.style.borderColor = "var(--border-light)";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  const navLinks = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/about", label: "About", icon: "👨‍💻" },
    { to: "/projects", label: "Projects", icon: "💼" },
    { to: "/contact", label: "Contact", icon: "📧" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/zepro2004",
      label: "GitHub",
      icon: "🔗",
    },
    {
      href: "https://www.linkedin.com/in/louis-bertrand-ntwali-118389312/",
      label: "LinkedIn",
      icon: "💼",
    },
  ];

  const skills = ["React", "Java", "JavaScript", "SQL"];

  return (
    <footer style={footerStyles}>
      <div style={backgroundPatternStyles}></div>
      <div style={footerContainerStyles}>
        <div style={footerContentStyles}>
          <div>
            <h3 style={brandNameStyles}>Louis Bertrand</h3>
            <p style={brandTaglineStyles}>
              Computer Programming Student passionate about creating efficient
              software solutions and building meaningful digital experiences.
            </p>
            <div style={skillsTagsStyles}>
              {skills.map((skill, index) => (
                <span key={index} style={skillTagStyles}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={sectionHeaderStyles}>Navigation</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  style={quickLinkStyles}
                  onClick={handleNavClick}
                  {...linkHover}
                >
                  {link.icon} {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={sectionHeaderStyles}>Connect With Me</h4>
            <div style={socialLinksStyles}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  style={socialLinkStyles}
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                >
                  {social.icon} {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={sectionHeaderStyles}>Get In Touch</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div style={contactItemStyles}>
                <span>📧</span>
                <a
                  href="mailto:lbertrand01@proton.me"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  {...linkHover}
                >
                  lbertrand01@proton.me
                </a>
              </div>
              <div style={contactItemStyles}>
                <span>📍</span>
                <span>Ottawa, ON, Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div style={copyrightSectionStyles}>
          <p style={copyrightStyles}>
            © {new Date().getFullYear()} Louis Bertrand Ntwali. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
