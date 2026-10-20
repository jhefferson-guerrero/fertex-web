import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import logoFertex from '../assets/images/logo-fertex.webp';
import fondoInicio from '../assets/images/fondo-inicio.webp';

// Tiempo mínimo en pantalla (la barra tarda al menos esto en llegar a 100%)
const MIN_TIME = 800;
// Tiempo máximo de espera (por si la red es muy lenta, nunca bloqueamos el sitio)
const MAX_TIME = 2500;

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

// El número no ocupa toda su caja de texto: el relleno se calibra para que empiece en la base
// de los dígitos (0%) y llegue exactamente a su parte superior (100%).
const FILL_START = 3.5;
const FILL_END = 87;

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const doneRef = useRef(0);
  const fillStop = FILL_START + (percent / 100) * (FILL_END - FILL_START);

  useEffect(() => {
    let cancelled = false;
    let frame;
    const start = performance.now();

    // En celular la foto del Hero queda debajo de la pantalla: no hace falta esperarla
    const waitForHeroImage = window.matchMedia('(min-width: 1024px)').matches;
    const tasks = [loadFonts(), loadImage(logoFertex)];
    if (waitForHeroImage) tasks.push(loadImage(fondoInicio));
    tasks.forEach((task) =>
      Promise.resolve(task)
        .catch(() => {})
        .then(() => { doneRef.current += 1; })
    );

    const finish = () => {
      if (!cancelled) {
        cancelled = true;
        onComplete();
      }
    };

    // La barra avanza con la carga real, pero nunca más rápido que el tiempo mínimo
    const tick = (now) => {
      if (cancelled) return;
      const byTime = Math.min(1, (now - start) / MIN_TIME);
      const byAssets = doneRef.current / tasks.length;
      const progress = Math.min(byTime, byAssets);
      setPercent(Math.round(progress * 100));
      if (progress >= 1) {
        finish();
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const maxTimer = setTimeout(() => {
      setPercent(100);
      finish();
    }, MAX_TIME);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(maxTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col justify-between overflow-hidden"
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <span className="sr-only">Cargando FERTEX</span>

      {/* Fila superior: marca */}
      <div aria-hidden="true" className="p-4 sm:p-6 lg:p-8">
        <img src={logoFertex} alt="" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
      </div>

      {/* Porcentaje gigante: contorno rojo que se llena de abajo hacia arriba */}
      <div aria-hidden="true" className="flex-1 flex items-center justify-center min-h-0 pb-[clamp(0.75rem,5svh,3rem)]">
        <span
          className="font-display font-black leading-none tracking-tight tabular-nums select-none text-[clamp(7rem,min(46vw,70svh),34rem)] [@media(max-height:820px)]:text-[length:min(40vw,50svh)]"
          style={{
            color: 'transparent',
            WebkitTextStroke: '3px #CC0000',
            backgroundImage: `linear-gradient(to top, #CC0000 ${fillStop}%, transparent ${fillStop}%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          {percent}
        </span>
      </div>

      {/* Fila inferior: mensaje, disciplinas y barra */}
      <div aria-hidden="true">
        <div className="flex items-end justify-between gap-4 px-4 sm:px-6 lg:px-8 pb-4">
          <p className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter leading-none text-white">
            Preparando <span className="text-fertex-red">Tatami</span>
          </p>
          <p className="hidden sm:block font-sans font-bold text-xs uppercase tracking-[0.3em] text-zinc-500">
            Taekwondo · Muay Thai · Capoeira
          </p>
        </div>
        <div className="h-6 bg-zinc-800">
          <div className="h-full bg-fertex-red" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </motion.div>
  );
}
