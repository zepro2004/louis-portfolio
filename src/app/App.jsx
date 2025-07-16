import { Analytics } from '@vercel/analytics/react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../assets/styles/global.css";
import Layout from "../components/layout/Layout";
import ScrollToTop from "../utils/ScrollToTop";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Projects from "../pages/ProjectsPage";
import About from "../pages/About";

function App() {
  return (
    <Router>
      <Analytics />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          {/* Add a fallback route if needed */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
