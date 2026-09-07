import { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import Titlebar from './components/Titlebar';
import ScrollProgress from './components/ScrollProgress';
import TerminalBoot from './components/TerminalBoot';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

// Handles in-page anchor navigation (#projects, #experience, #contact) with Lenis smooth scrolling
function SmoothAnchorHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.length > 1) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -52, duration: 1.2 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [lenis]);

  return null;
}

function App() {
  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      <SmoothAnchorHandler />
      <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent selection:text-[#0A0D0B] antialiased">
        {/* Interactive Terminal Boot Sequence (Runs once per session, skippable) */}
        <TerminalBoot />

        {/* Top Hairline Scroll Progress Bar */}
        <ScrollProgress />

        {/* Sticky Terminal Titlebar */}
        <Titlebar />

        {/* Main Terminal Window Pane Stack */}
        <main className="terminal-wrap pt-6">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Footer />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
