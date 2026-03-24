import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

const MouseOrbs = () => {
  const shouldReduceMotion = useReducedMotion();
  const orb1X = useMotionValue(0);
  const orb1Y = useMotionValue(0);
  const orb2X = useMotionValue(0);
  const orb2Y = useMotionValue(0);
  const orb3X = useMotionValue(0);
  const orb3Y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 90 };

  const orb1XSpring = useSpring(orb1X, springConfig);
  const orb1YSpring = useSpring(orb1Y, springConfig);
  const orb2XSpring = useSpring(orb2X, springConfig);
  const orb2YSpring = useSpring(orb2Y, springConfig);
  const orb3XSpring = useSpring(orb3X, springConfig);
  const orb3YSpring = useSpring(orb3Y, springConfig);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let ticking = false;
    let lastX = 0;
    let lastY = 0;
    
    const handleMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          orb1X.set(lastX * 0.08);
          orb1Y.set(lastY * 0.08);
          orb2X.set(lastX * 0.12);
          orb2Y.set(lastY * 0.12);
          orb3X.set(lastX * 0.16);
          orb3Y.set(lastY * 0.16);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [orb1X, orb1Y, orb2X, orb2Y, orb3X, orb3Y, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute w-[420px] h-[420px] bg-gradient-to-br from-primary-500/15 via-accent-500/12 to-cyan-500/15 rounded-full blur-[90px] will-change-transform"
        style={{
          x: orb1XSpring,
          y: orb1YSpring,
          left: '20%',
          top: '20%',
        }}
      />
      <motion.div
        className="absolute w-[340px] h-[340px] bg-gradient-to-tr from-cyan-500/14 via-primary-500/12 to-accent-500/14 rounded-full blur-[80px] will-change-transform"
        style={{
          x: orb2XSpring,
          y: orb2YSpring,
          right: '20%',
          top: '40%',
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-gradient-to-bl from-accent-500/12 via-cyan-500/12 to-primary-500/12 rounded-full blur-[70px] will-change-transform"
        style={{
          x: orb3XSpring,
          y: orb3YSpring,
          left: '50%',
          bottom: '20%',
        }}
      />
    </div>
  );
};

export default MouseOrbs;

