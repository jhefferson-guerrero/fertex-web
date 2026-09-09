import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Física premium para el movimiento fluido del cursor
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [hoverState, setHoverState] = useState("default"); // "default", "interactive", "massive"

  useEffect(() => {
    const moveCursor = (e) => {
      // 1. Revisar si estamos sobre un título GIGANTE
      if (e.target.closest('h1, h2')) {
        setHoverState("massive");
      } 
      // 2. Revisar si estamos sobre botones o enlaces normales (como los del footer)
      else if (e.target.closest('a, button, [role="button"]')) {
        setHoverState("interactive");
      } 
      // 3. Estado normal
      else {
        setHoverState("default");
      }
      
      // El cursor simplemente sigue al mouse siempre
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none hidden lg:block z-[99999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        width: 32,
        height: 32,
        borderRadius: "50%",
        // Filtro blanco y negro (adiós al cyan)
        backdropFilter: "grayscale(1) invert(1)",
        WebkitBackdropFilter: "grayscale(1) invert(1)",
        backgroundColor: "transparent",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
      animate={{
        // Lógica inteligente de tamaño
        scale: hoverState === "massive" ? 2.5 : hoverState === "interactive" ? 1.5 : 1,
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
