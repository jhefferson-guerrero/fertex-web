import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import imgBg from '../assets/images/fertex-taekwondo-maestros-instructores-01.webp';
import useMediaQuery from '../hooks/useMediaQuery';
import RevealTitle from './RevealTitle';

// Para poner el video: copiar el archivo en la carpeta /public (ej. public/fertex.mp4)
// y escribir aquí su ruta: const VIDEO_SRC = '/fertex.mp4';
// Mientras esté vacío, el banner muestra la foto.
const VIDEO_SRC = '';

const mediaClasses = 'w-full h-full object-cover object-[50%_0%] grayscale contrast-125';

// Parallax: la foto se mueve un poco más lento que el scroll.
// La capa de la foto es un 20% más alta que su marco (10% de margen arriba y abajo) y se desplaza como máximo
// ±6% de su propia altura (≈ ±7.2% del marco), así nunca queda un borde vacío.
const OVERSCAN = '-inset-y-[10%]';
const SHIFT = ['-6%', '6%'];

export default function VideoBanner() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const canHover = useMediaQuery('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
  const parallax = canHover && !reduceMotion;

  // Progreso 0 → 1 mientras el banner cruza la pantalla (de entrar por abajo a salir por arriba)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], SHIFT);

  const media = VIDEO_SRC ? (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={imgBg}
      aria-hidden="true"
      className={mediaClasses}
    >
      <source src={VIDEO_SRC} type="video/mp4" />
    </video>
  ) : (
    <img src={imgBg} alt="Maestros y alumnos de FERTEX sonriendo juntos" loading="lazy" className={mediaClasses} />
  );

  return (
    <section ref={sectionRef} className="relative w-full flex flex-col min-h-[500px] md:min-h-[clamp(380px,70svh,600px)] lg-h-banner border-b-8 border-zinc-950 overflow-hidden bg-zinc-950">

      {/* Foto o video: se ve completa, sin texto encima, para que se aprecien las caras */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        {parallax ? (
          <motion.div style={{ y }} className={`absolute inset-x-0 ${OVERSCAN} will-change-transform`}>
            {media}
          </motion.div>
        ) : (
          <div className="absolute inset-0">{media}</div>
        )}
      </div>

      {/* Frase en una barra sólida inferior */}
      <div className="relative bg-zinc-950 border-t-8 border-fertex-red px-4 sm:px-6 lg:px-8 py-5 md:py-6">
        <RevealTitle
          parts={[{ text: 'No hay atajos.' }, { text: 'Solo Disciplina.', className: 'text-fertex-red' }]}
          className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white tracking-tighter leading-[0.95] text-center md:text-left"
        />
      </div>

    </section>
  );
}
