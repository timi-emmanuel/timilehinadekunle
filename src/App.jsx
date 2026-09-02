import Titlebar from './components/Titlebar';
import ScrollProgress from './components/ScrollProgress';
import TerminalBoot from './components/TerminalBoot';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
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
  );
}

export default App;
