import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Lazy load heavy desktop-only components
const CursorFollower = lazy(() => import('./components/CursorFollower'));
const MouseOrbs = lazy(() => import('./components/MouseOrbs'));

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

  useEffect(() => {
    document.documentElement.classList.toggle(
      'custom-cursor-enabled',
      isDesktop && !prefersReducedMotion
    );
    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, [isDesktop, prefersReducedMotion]);

  return (
    <div className='bg-slate-50 dark:bg-dark min-h-screen pt-2 overflow-x-hidden transition-colors duration-300'>
      <ScrollProgress />
      {isDesktop && !prefersReducedMotion && (
        <Suspense fallback={null}>
          <CursorFollower />
          <MouseOrbs />
        </Suspense>
      )}
      <Navbar/>    
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
