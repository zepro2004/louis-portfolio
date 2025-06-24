import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/styles.css";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/ProjectsPage";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          {/* Add a fallback route if needed */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
