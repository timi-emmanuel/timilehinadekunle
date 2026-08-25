import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

const CursorFollower = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 35, stiffness: 600 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const pointerMedia = window.matchMedia('(pointer: fine)');
    const updateDesktop = () => {
      setIsDesktop(pointerMedia.matches);
    };
    updateDesktop();
    pointerMedia.addEventListener('change', updateDesktop);

    let ticking = false;
    let lastX = -100;
    let lastY = -100;

    const moveCursor = (e) => {
      if (!pointerMedia.matches || shouldReduceMotion) return;
      lastX = e.clientX;
      lastY = e.clientY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          cursorX.set(lastX - 12);
          cursorY.set(lastY - 12);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseEnter = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.neo-btn') ||
        e.target.closest('.neo-box')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.neo-btn') ||
        e.target.closest('.neo-box')
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      pointerMedia.removeEventListener('change', updateDesktop);
    };
  }, [cursorX, cursorY, shouldReduceMotion]);

  if (!isDesktop || shouldReduceMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="w-full h-full bg-neo-yellow border-2 border-black shadow-neo-sm"
        animate={{
          scale: isClicking ? 0.75 : isHovering ? 1.6 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      />
    </motion.div>
  );
};

export default CursorFollower;
