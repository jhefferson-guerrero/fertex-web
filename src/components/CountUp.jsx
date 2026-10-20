import React, { useRef, useState, useEffect } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

/**
 * Cifra que cuenta desde 0 hasta `to` al entrar en pantalla (una sola vez).
 * - `finalLabel`: texto con el que termina (por ejemplo "1K"); mientras cuenta se muestran números enteros.
 * - Con "reducir movimiento" activado se muestra directamente el valor final.
 * - Los lectores de pantalla leen siempre el valor final, nunca los números intermedios.
 */
export default function CountUp({ to, prefix = '', finalLabel, duration = 1.8, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const finalText = finalLabel ?? String(to);
  const [text, setText] = useState('0');

  useEffect(() => {
    if (reduceMotion || !inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setText(Math.round(value) >= to ? finalText : String(Math.round(value))),
      onComplete: () => setText(finalText),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, to, duration, finalText]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span className="sr-only">{prefix}{finalText}</span>
      <span aria-hidden="true">{prefix}{reduceMotion ? finalText : text}</span>
    </span>
  );
}
