import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logoFertex from '../assets/images/logo-fertex.webp';
import fondoInicio from '../assets/images/fondo-inicio.webp';

// Tiempo mínimo en pantalla (evita un parpadeo si todo ya está en caché)
const MIN_TIME = 800;
// Tiempo máximo de espera (por si la red es muy lenta, nunca bloqueamos el sitio)
const MAX_TIME = 4000;

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve; // Si falla, no bloqueamos la carga
    img.src = src;
  });

// Fuerza la descarga de las fuentes que usa el Hero antes de mostrar el sitio
const loadFonts = () =>
  Promise.all([
    document.fonts.load('700 1em Oswald'),
    document.fonts.load('500 1em Oswald'),
    document.fonts.load('400 1em Inter'),
    document.fonts.load('600 1em Inter'),
  ]).then(() => document.fonts.ready);

export default function Preloader({ onComplete }) {
  useEffect(() => {
    let cancelled = false;
    let maxTimer;
    let minTimer;

    const finish = () => {
      if (!cancelled) onComplete();
    };

    const assetsReady = Promise.all([loadFonts(), loadImage(fondoInicio), loadImage(logoFertex)]).catch(() => {});
    const minElapsed = new Promise((resolve) => { minTimer = setTimeout(resolve, MIN_TIME); });
    const maxElapsed = new Promise((resolve) => { maxTimer = setTimeout(resolve, MAX_TIME); });

    // Se muestra el sitio cuando todo cargó (y pasó el mínimo), o al llegar al máximo
    Promise.race([Promise.all([assetsReady, minElapsed]), maxElapsed]).then(finish);

    return () => {
      cancelled = true;
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center border-b-8 border-fertex-red"
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-display font-black text-xl md:text-2xl text-zinc-400 tracking-[0.3em] uppercase"
        >
          Preparando <span className="text-white">Tatami</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
