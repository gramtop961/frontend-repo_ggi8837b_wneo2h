import { useRef } from 'react';
import NavBar from './components/NavBar';
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
        <NavBar />

        <Hero onViewWorks={scrollToProjects} />

        <About />

        <div ref={projectsRef}>
          <Projects />
        </div>

        <Contact />

        <footer className="relative border-t border-white/10 bg-black py-8 text-center text-cyan-100/70">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs">© {new Date().getFullYear()} Visual Novel Portfolio. Neon dreams, crafted with heart.</p>
          </div>
        </footer>
      </div>
    </Loader>
  );
}
