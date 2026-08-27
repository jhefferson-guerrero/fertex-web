import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logoFertex from '../assets/images/logo-fertex.webp';

import fondoInicio from '../assets/images/fondo-inicio.webp';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // PRECARGA SECRETA: Obligamos al navegador a descargar la foto más pesada en segundo plano
    // mientras el usuario está distraído con la animación del escudo.
    const img = new Image();
    img.src = fondoInicio;

    // 2.5s delay
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center border-b-8 border-fertex-red"
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-6 px-4"
      >
        <img
          src={logoFertex}
          alt="FERTEX Cargando..."
          className="w-40 md:w-48 h-auto drop-shadow-[0_0_30px_rgba(204,0,0,0.5)]"
        />

        {/* Progress text or loading indicator */}
        <h1 className="font-display font-black text-xl md:text-2xl text-zinc-400 tracking-[0.3em] uppercase">
          Preparando <span className="text-white">Tatami</span>
        </h1>
      </motion.div>
    </motion.div>
  );
}
