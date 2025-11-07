import { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';

export default function App() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Loader>
      <div className="min-h-screen bg-black text-white">
        <Hero onViewWorks={scrollToProjects} />

        <About />

        <div ref={projectsRef}>
          <Projects />
        </div>

        <Contact />

        <footer className="relative border-t border-white/10 bg-black py-8 text-center text-cyan-100/70">
          <div className="mx-auto max-w-6xl px-6">
            <nav className="mb-4 flex justify-center gap-6 text-sm">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <p className="text-xs">© {new Date().getFullYear()} Visual Novel Portfolio. Neon dreams, crafted with heart.</p>
          </div>
        </footer>
      </div>
    </Loader>
  );
}
