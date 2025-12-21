import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'

// Lazy load heavy desktop-only components
const CursorFollower = lazy(() => import('./components/CursorFollower'));
const MouseOrbs = lazy(() => import('./components/MouseOrbs'));

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <div className='bg-slate-50 dark:bg-dark min-h-screen pt-2 overflow-x-hidden transition-colors duration-300'>
      <ScrollProgress />
      {isDesktop && (
        <Suspense fallback={null}>
          <CursorFollower />
          <MouseOrbs />
        </Suspense>
      )}
      <Navbar/>    
      <Hero/>
      <Suspense fallback={<LoadingFallback />}>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
      </Suspense>
    </div>
  )
}

export default App
