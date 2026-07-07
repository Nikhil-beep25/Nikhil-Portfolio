import { useEffect, useState } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import OtherProjects from './components/OtherProjects';
import Journey from './components/Journey';
import GithubShowcase from './components/GithubShowcase';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-darkest text-zinc-100 selection:bg-primary/30 selection:text-primary-light">
      {/* Dynamic SEO Tag & JSON-LD Manager */}
      <SEO />
      
      {/* Cursor Glow Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-200 opacity-50 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.08), transparent 80%)`
        }}
      />

      {/* Main UI Layout */}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <OtherProjects />
        <Journey />
        <GithubShowcase />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
