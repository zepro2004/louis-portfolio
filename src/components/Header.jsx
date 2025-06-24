import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav id="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/resume" className="nav-link">
          Resume
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
}
