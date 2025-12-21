import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CursorFollower from './components/CursorFollower'
import ScrollProgress from './components/ScrollProgress'
import MouseOrbs from './components/MouseOrbs'

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
  return (
    <div className='bg-slate-50 dark:bg-dark min-h-screen pt-2 overflow-x-hidden transition-colors duration-300'>
      <CursorFollower />
      <ScrollProgress />
      <MouseOrbs />
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
