import React from 'react';
import { motion } from 'framer-motion';
import imgHandWraps from '../assets/images/hand_wraps.jpg';
import fondoInicio from '../assets/images/fondo-inicio.webp';

export default function Hero() {
  return (
    <section className="relative border-b-8 border-zinc-950 overflow-hidden flex flex-col lg:flex-row min-h-[calc(100vh-96px)] lg:h-[calc(100vh-96px)]">

      {/* LEFT COLUMN */}
      <div className="w-full lg:w-1/2 relative z-10 py-16 px-4 sm:px-6 lg:px-8 xl:px-12 lg:py-0 flex flex-col justify-center border-b-8 lg:border-b-0 lg:border-r-8 border-zinc-950 bg-zinc-50">

        {/* Subtle Hand Wraps image next to text */}
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.15] pointer-events-none mix-blend-multiply hidden md:block">
          <img src={imgHandWraps} alt="" className="w-full h-full object-cover grayscale contrast-150" aria-hidden="true" />
        </div>

        <motion.div
          className="relative z-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display font-black text-7xl lg:text-7xl xl:text-8xl 2xl:text-[8rem] tracking-tighter text-zinc-950 uppercase leading-[0.95] lg:leading-[0.9] 2xl:leading-[0.85] mb-6 lg:mb-4 xl:mb-8 relative">
            Familia<br />
            Respeto<br />
            <span className="text-fertex-red">FERTEX</span>
          </h1>
          <p className="mt-4 text-lg lg:text-base xl:text-xl text-zinc-800 font-sans font-medium max-w-xl border-l-4 border-fertex-red pl-6 mb-12 lg:mb-6 2xl:mb-12 text-left bg-zinc-50/60 backdrop-blur-[2px]">
            Escuela de artes marciales con más de 24 años de experiencia forjando disciplina. Especialistas en la enseñanza de Taekwondo ITF, Muay Thai y Capoeira.
          </p>
          <div className="flex flex-wrap gap-4 xl:gap-6">
            <a href="https://wa.me/51944351592?text=Hola%20FERTEX,%20quiero%20empezar%20mi%20entrenamiento." target="_blank" rel="noopener noreferrer" className="inline-block bg-fertex-red text-white text-base lg:text-sm xl:text-lg font-bold uppercase tracking-widest px-6 lg:px-4 xl:px-8 py-4 lg:py-3 xl:py-4 border-4 border-zinc-950 hover:bg-zinc-950 transition-colors duration-200 text-center shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 whitespace-nowrap">
              Empieza tu Entrenamiento
            </a>
            <a href="#about" className="inline-block bg-white text-zinc-950 text-base lg:text-sm xl:text-lg font-bold uppercase tracking-widest px-6 lg:px-4 xl:px-8 py-4 lg:py-3 xl:py-4 border-4 border-zinc-950 hover:bg-zinc-100 transition-colors duration-200 text-center whitespace-nowrap">
              Descubre Más
            </a>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full lg:w-1/2 relative bg-zinc-950 min-h-[500px] lg:min-h-0 flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={fondoInicio} alt="" className="w-full h-full object-cover object-right scale-110 grayscale contrast-[1.25] brightness-75 mix-blend-luminosity" aria-hidden="true" />
          <div className="absolute inset-0 bg-zinc-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Premium typography overlay */}
        <motion.div
          className="relative z-10 p-8 lg:p-8 xl:p-12 w-full h-full flex flex-col justify-center lg:justify-between items-center lg:items-start text-center lg:text-left gap-8 lg:gap-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="opacity-90">
            <span className="font-display font-black text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] leading-none text-transparent tracking-tighter uppercase block text-stroke-fertex">
              24
            </span>
          </div>

          <div className="mt-auto">
            <h2 className="font-display font-black text-5xl lg:text-4xl xl:text-5xl 2xl:text-[5rem] uppercase text-white tracking-tighter leading-[0.9] mix-blend-overlay drop-shadow-2xl">
              Años <br /> Formando <br />
              <span className="text-fertex-red mix-blend-normal relative z-20" style={{ textShadow: '2px 2px 0px #000' }}>Disciplina</span>
            </h2>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
