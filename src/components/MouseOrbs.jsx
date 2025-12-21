import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseOrbs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const orb1X = useMotionValue(0);
  const orb1Y = useMotionValue(0);
  const orb2X = useMotionValue(0);
  const orb2Y = useMotionValue(0);
  const orb3X = useMotionValue(0);
  const orb3Y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };

  const orb1XSpring = useSpring(orb1X, springConfig);
  const orb1YSpring = useSpring(orb1Y, springConfig);
  const orb2XSpring = useSpring(orb2X, springConfig);
  const orb2YSpring = useSpring(orb2Y, springConfig);
  const orb3XSpring = useSpring(orb3X, springConfig);
  const orb3YSpring = useSpring(orb3Y, springConfig);

  useEffect(() => {
    orb1X.set(mousePosition.x * 0.1);
    orb1Y.set(mousePosition.y * 0.1);
    orb2X.set(mousePosition.x * 0.15);
    orb2Y.set(mousePosition.y * 0.15);
    orb3X.set(mousePosition.x * 0.2);
    orb3Y.set(mousePosition.y * 0.2);
  }, [mousePosition, orb1X, orb1Y, orb2X, orb2Y, orb3X, orb3Y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-cyan-500/20 rounded-full blur-[120px] will-change-transform"
        style={{
          x: orb1XSpring,
          y: orb1YSpring,
          left: '20%',
          top: '20%',
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-primary-500/20 to-accent-500/20 rounded-full blur-[100px] will-change-transform"
        style={{
          x: orb2XSpring,
          y: orb2YSpring,
          right: '20%',
          top: '40%',
        }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] bg-gradient-to-bl from-accent-500/20 via-cyan-500/20 to-primary-500/20 rounded-full blur-[90px] will-change-transform"
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

