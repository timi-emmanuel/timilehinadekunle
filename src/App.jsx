import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import ScrollProgress from './components/ScrollProgress';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load custom cursor on desktop
const CursorFollower = lazy(() => import('./components/CursorFollower'));

function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches);
    };
    checkDesktop();
    const pointerMedia = window.matchMedia('(pointer: fine)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionMedia.matches);
    };

    updateMotionPreference();
    pointerMedia.addEventListener('change', checkDesktop);
    motionMedia.addEventListener('change', updateMotionPreference);

    return () => {
      pointerMedia.removeEventListener('change', checkDesktop);
      motionMedia.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  return (
    <div className="bg-neo-bg dark:bg-neo-darkBg min-h-screen text-neo-black dark:text-white font-sans selection:bg-neo-yellow selection:text-black transition-colors duration-200">
      <ScrollProgress />
      {isDesktop && !prefersReducedMotion && (
        <Suspense fallback={null}>
          <CursorFollower />
        </Suspense>
      )}
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

