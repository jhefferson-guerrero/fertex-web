import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import useModal from '../hooks/useModal';
import imgCapoeira from '../assets/images/fertex-capoeira-entrenamiento-01.webp';
import imgClase from '../assets/images/fertex-taekwondo-entrenamiento-01.webp';
import imgMuayThai from '../assets/images/fertex-muaythai-entrenamiento-03.webp';
import imgCombate from '../assets/images/fertex-taekwondo-competencia-01.webp';
import imgMuayThaiItf from '../assets/images/fertex-muaythai-entrenamiento-07.webp';

// Para cambiar, agregar o quitar fotos basta editar esta lista (el orden es el del mosaico y el del visor).
// `tile`: tamaño del recuadro; `alt`: pie de foto del visor; `position` (opcional): qué parte se ve al recortar.
// El mosaico está pensado para 5 fotos; si se agregan más, hay que ajustar la cuadrícula.
const PHOTOS = [
  { src: imgCombate, alt: 'Combate de Taekwondo en competencia', tile: 'col-span-2 row-span-2 lg:col-span-1' },
  { src: imgClase, alt: 'Clase de Taekwondo', tile: 'col-span-2', position: 'object-[50%_60%]' },
  { src: imgMuayThaiItf, alt: 'Muay Thai en acción', tile: '' },
  { src: imgCapoeira, alt: 'Clase de Capoeira', tile: '' },
  { src: imgMuayThai, alt: 'Entrenamiento de Muay Thai', tile: 'col-span-2 lg:col-span-1', position: 'object-[40%_center]' },
];

const controlBase = 'w-12 h-12 flex items-center justify-center text-white border-4 border-zinc-950 transition-colors';
const controlClasses = `${controlBase} bg-zinc-950 hover:bg-fertex-red`;
const closeClasses = `${controlBase} bg-fertex-red hover:bg-zinc-950`;

// Entrada del mosaico: el título y las fotos se revelan con un barrido, una tras otra.
// En escritorio una sola orquestación para toda la galería; en celular cada recuadro entra al llegar a la pantalla.
const EASE = [0.22, 1, 0.36, 1];
const GRID_ENTRANCE = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const wipe = (from) => ({
  hidden: { clipPath: from },
  visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.8, ease: EASE } },
});
const FADE = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } };
const ZOOM_SETTLE = { hidden: { scale: 1.3 }, visible: { scale: 1, transition: { duration: 1.1, ease: EASE } } };
const TEXT_RISE = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.5, ease: EASE } } };
const WHEN_VISIBLE = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } };

const useIsDesktop = () => {
  const query = '(min-width: 1024px)';
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return isDesktop;
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();
  const tileVariants = reduceMotion ? FADE : wipe('inset(100% 0% 0% 0%)');
  const textCellVariants = reduceMotion ? FADE : wipe('inset(0% 100% 0% 0%)');
  const own = isDesktop ? {} : WHEN_VISIBLE; // en celular cada recuadro anima por su cuenta
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const open = (index, e) => {
    triggerRef.current = e.currentTarget;
    setActiveIndex(index);
  };
  const close = useCallback(() => setActiveIndex(null), []);
  const showNext = useCallback(() => setActiveIndex((i) => (i + 1) % PHOTOS.length), []);
  const showPrev = useCallback(() => setActiveIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length), []);

  useModal({
    isOpen: activeIndex !== null,
    onClose: close,
    onKey: (e) => {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    },
    dialogRef,
    triggerRef,
  });

  const active = activeIndex !== null ? PHOTOS[activeIndex] : null;

  return (
    <section id="gallery" className="bg-zinc-950 border-b-8 border-zinc-950">

      {/* Mosaico: los espacios entre recuadros son el fondo negro, como líneas gruesas */}
      {/* En escritorio y laptop la galería ocupa exactamente la pantalla visible (alto de la ventana menos el menú),
          con 2 filas iguales; en celular las filas se ajustan al contenido y se hace scroll. */}
      <motion.div
        variants={GRID_ENTRANCE}
        {...(isDesktop ? WHEN_VISIBLE : {})}
        className="grid grid-cols-2 lg:grid-cols-4 gap-[8px] bg-zinc-950 auto-rows-[minmax(60vw,auto)] lg:auto-rows-auto lg:grid-rows-2 lg:h-[calc(100svh-var(--header-h)-8px)] lg:min-h-[472px]"
      >

        {/* Presentación: la caja exterior es la que se observa; el barrido de recorte se aplica a la interior */}
        <motion.div {...own} className="col-span-2 lg:col-span-1 overflow-hidden">
          <motion.div
            variants={textCellVariants}
            className="h-full bg-zinc-50 p-8 lg:p-[clamp(1.25rem,3.5svh,2.5rem)] flex flex-col justify-center overflow-hidden"
          >
            <motion.h2 variants={TEXT_RISE} className="font-display font-black text-5xl lg:text-[length:clamp(1.75rem,6svh,3rem)] uppercase text-zinc-950 tracking-tighter leading-none mb-5 lg:mb-[clamp(0.5rem,2svh,1.25rem)]">
              Futuros <br />
              <span className="text-fertex-red">Campeones</span>
            </motion.h2>
            <motion.p variants={TEXT_RISE} className="font-sans text-lg lg:text-[length:clamp(0.8rem,2.3svh,1.125rem)] text-zinc-800 leading-relaxed font-medium">
              Cada clase es el inicio de un camino. Desde los primeros pasos, el respeto y la constancia se demuestran en el tatami, no se prometen.
            </motion.p>
          </motion.div>
        </motion.div>

        {PHOTOS.map((photo, index) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={(e) => open(index, e)}
            aria-label={`Ampliar foto: ${photo.alt}`}
            aria-haspopup="dialog"
            {...own}
            className={`group relative overflow-hidden bg-zinc-950 cursor-pointer ${photo.tile ?? ''}`}
          >
            {/* El botón es lo que se observa; el barrido de recorte se aplica a esta capa interior */}
            <motion.span variants={tileVariants} className="absolute inset-0 block overflow-hidden bg-zinc-900">
              <motion.span variants={reduceMotion ? undefined : ZOOM_SETTLE} className="absolute inset-0 block">
                <img
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  className={`w-full h-full object-cover ${photo.position ?? ''} grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700`}
                />
              </motion.span>
              <span className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
              {/* Indicador de ampliar: siempre visible en pantallas táctiles, al hacer hover en escritorio */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-11 h-11 flex items-center justify-center bg-fertex-red text-white border-t-4 border-l-4 border-zinc-950 [@media(hover:hover)]:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </motion.span>
          </motion.button>
        ))}
      </motion.div>

      {/* Visor de fotos */}
      <AnimatePresence>
        {active && (
          <div data-lenis-prevent="true" className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/90"
              onClick={close}
              aria-hidden="true"
            />

            <motion.div
              ref={dialogRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label="Galería de fotos"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="relative w-full max-w-4xl outline-none bg-white p-2 [backface-visibility:hidden]"
            >
              {/* Todas las fotos se mantienen cargadas y solo se muestra la activa:
                  así al cambiar de foto no hay parpadeo ni espera */}
              {PHOTOS.map((photo, index) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={index === activeIndex ? photo.alt : ''}
                  aria-hidden={index === activeIndex ? undefined : true}
                  className={`${index === activeIndex ? 'block colorize' : 'hidden'} w-full aspect-square max-h-[calc(100svh-10rem)] object-contain bg-zinc-950`}
                />
              ))}

              <div className="flex flex-wrap sm:flex-nowrap items-center justify-end gap-3 px-2 pt-5 pb-3 sm:px-3">
                <p className="basis-full sm:basis-0 sm:flex-1 min-w-0 font-sans font-bold text-sm sm:text-base text-zinc-950 leading-snug">
                  <span className="font-display font-black text-xl text-fertex-red mr-3 tabular-nums">
                    {activeIndex + 1}/{PHOTOS.length}
                  </span>
                  {active.alt}
                </p>
                <button type="button" onClick={showPrev} aria-label="Foto anterior" className={controlClasses}>
                  <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button type="button" onClick={showNext} aria-label="Foto siguiente" className={controlClasses}>
                  <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button type="button" onClick={close} aria-label="Cerrar" className={closeClasses}>
                  <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
