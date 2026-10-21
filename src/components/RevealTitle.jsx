import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Título con "revelado de máscara": cada palabra sube desde detrás de una línea, una tras otra.
 * - `parts`: fragmentos del título, cada uno con su texto y (opcional) su clase de color:
 *     [{ text: 'Sobre' }, { text: 'Nosotros', className: 'text-fertex-red' }]
 * - `breakAt`: 'always' pone cada fragmento en su propia línea; 'md' lo hace solo desde pantallas medianas;
 *   sin valor, los fragmentos fluyen en una misma línea.
 * - Se dispara una sola vez, al entrar en pantalla. Con "reducir movimiento" se muestra el texto sin animar.
 */
const CONTAINER = (delay) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
});
const WORD = {
  hidden: { y: '115%' },
  visible: { y: '0%', transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

// Margen interno para que no se recorten acentos ni letras al enmascarar (se compensa con márgenes negativos)
const MASK = 'inline-block overflow-hidden align-bottom pt-[0.14em] pb-[0.06em] -mt-[0.14em] -mb-[0.06em] px-[0.04em] -mx-[0.04em]';

export default function RevealTitle({ as = 'h2', parts, breakAt, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];
  const partLayout = breakAt === 'always' ? 'block' : breakAt === 'md' ? 'inline md:block' : 'inline';

  return (
    <MotionTag
      className={className}
      variants={CONTAINER(delay)}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {parts.map((part, partIndex) => (
        <React.Fragment key={partIndex}>
          <span className={`${partLayout} ${part.className ?? ''}`}>
            {part.text.split(' ').map((word, wordIndex, words) => (
              <React.Fragment key={wordIndex}>
                {reduceMotion ? (
                  word
                ) : (
                  <span className={MASK}>
                    <motion.span variants={WORD} className="inline-block">{word}</motion.span>
                  </span>
                )}
                {wordIndex < words.length - 1 && ' '}
              </React.Fragment>
            ))}
          </span>
          {partIndex < parts.length - 1 && ' '}
        </React.Fragment>
      ))}
    </MotionTag>
  );
}
