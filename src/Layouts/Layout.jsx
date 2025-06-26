import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  const layoutStyles = {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--bg-primary)' // Enhanced gradient background
  };

  const mainContentStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  };

  return (
    <div style={layoutStyles}>
      <Header />
      <main style={mainContentStyles}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
