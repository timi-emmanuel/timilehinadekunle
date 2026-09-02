import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // High-performance spring: responsive tracking without jitter or rubber-band lag
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 32,
    restDelta: 0.0001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60] pointer-events-none transform-gpu shadow-[0_0_8px_rgba(242,184,75,0.6)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
