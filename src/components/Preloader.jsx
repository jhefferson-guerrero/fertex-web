import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logoFertex from '../assets/images/logo-fertex.webp';

import fondoInicio from '../assets/images/fondo-inicio.webp';
import handWraps from '../assets/images/hand_wraps.jpg';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // PRECARGA SECRETA: Obligamos al navegador a descargar las fotos del Hero en segundo plano
    // mientras el usuario está distraído con la animación del escudo.
    const img1 = new Image();
    img1.src = fondoInicio;
    
    const img2 = new Image();
    img2.src = handWraps;

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
        className="flex flex-col items-center gap-10 px-4"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={logoFertex}
          alt="FERTEX Cargando..."
          className="w-40 md:w-48 h-auto drop-shadow-[0_0_30px_rgba(204,0,0,0.5)]"
        />

        {/* Progress text or loading indicator */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-display font-black text-xl md:text-2xl text-zinc-400 tracking-[0.3em] uppercase"
        >
          Preparando <span className="text-white">Tatami</span>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
