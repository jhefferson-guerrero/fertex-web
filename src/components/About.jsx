import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutImage from '../assets/images/fertex-taekwondo-competencia-03.webp';

export default function About() {
  const [activeModal, setActiveModal] = useState(null);

  // UX Fix: Bloquear el scroll del fondo cuando un modal está abierto
  useEffect(() => {
    if (activeModal) {
      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    }
    // Limpieza en caso de que el componente se desmonte
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [activeModal]);

  const disciplines = [
    {
      title: 'Taekwondo ITF',
      description: 'Arte marcial coreano enfocado en la disciplina, técnica y autocontrol. Aprende defensa personal real a través de patadas dinámicas y forja una mentalidad inquebrantable.',
      tags: ['Flexibilidad', 'Defensa', 'Carácter']
    },
    {
      title: 'Muay Thai',
      description: 'El legendario boxeo tailandés. Un entrenamiento de cuerpo completo que combina puños, codos, rodillas y patadas para desarrollar fuerza pura y resistencia.',
      tags: ['Striking', 'Resistencia', 'Potencia']
    },
    {
      title: 'Capoeira',
      description: 'Arte marcial afro-brasileño que fluye como una danza y golpea como un combate. Fusiona movimientos acrobáticos, música y verdadera expresión cultural en cada ginga.',
      tags: ['Agilidad', 'Acrobacia', 'Ritmo']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="bg-white border-b-8 border-zinc-950">
      
      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <div data-lenis-prevent="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" 
              onClick={() => setActiveModal(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveModal(null); } }}
              aria-label="Cerrar modal"
            ></motion.div>
            
            {/* Modal Content - Brutalist Box */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative bg-white border-8 border-zinc-950 w-full max-w-2xl shadow-[16px_16px_0px_0px_rgba(24,24,27,1)] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              
              {/* Header */}
              <div className="flex justify-between items-center border-b-8 border-zinc-950 p-6 lg:p-8 bg-zinc-50">
                <h3 id="modal-title" className="font-display font-black text-4xl sm:text-5xl uppercase text-zinc-950 tracking-tighter">
                  {activeModal.title}
                </h3>
                <button 
                  type="button"
                  aria-label="Cerrar modal"
                  onClick={() => setActiveModal(null)}
                  className="bg-zinc-950 text-white font-bold p-2 border-4 border-zinc-950 hover:bg-fertex-red hover:text-white transition-colors flex items-center justify-center w-12 h-12"
                >
                  X
                </button>
              </div>
              
              {/* Body */}
              <div className="p-6 lg:p-8 flex flex-col gap-6 bg-white">
                <div className="flex flex-wrap gap-2 mb-2">
                  {activeModal.tags.map((tag, i) => (
                    <span key={i} className="bg-zinc-200 text-zinc-950 px-3 py-1 text-xs font-bold uppercase tracking-widest border-2 border-zinc-950">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-lg md:text-xl text-zinc-800 leading-relaxed font-medium">
                  {activeModal.description}
                </p>
                
                <div className="mt-4">
                  <a 
                    href={`https://wa.me/51944351592?text=Hola%20FERTEX,%20estoy%20listo%20para%20entrenar%20${encodeURIComponent(activeModal.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveModal(null)}
                    className="inline-block w-full bg-fertex-red text-white text-center text-lg font-bold uppercase tracking-widest px-8 py-5 border-4 border-zinc-950 hover:bg-zinc-950 transition-colors duration-200 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  >
                    Estoy Listo
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2">

        {/* Visual Column (Desktop Only) */}
        <div className="hidden lg:flex w-full flex-col justify-center bg-zinc-50 relative lg:min-h-[600px] lg:border-r-8 border-zinc-950">
          <img src={aboutImage} alt="Entrenamiento FERTEX" loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90" />
        </div>

        {/* Text Column - Modular Layout */}
        <motion.div 
          className="w-full flex flex-col relative bg-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* Header Section */}
          <motion.div variants={itemVariants} className="p-8 lg:p-12 xl:p-16 border-b-8 border-zinc-950">
            <h2 className="font-display font-black text-6xl md:text-7xl uppercase text-zinc-950 tracking-tighter leading-none mb-6">
              Sobre <br />
              <span className="text-fertex-red">Nosotros</span>
            </h2>
            <div className="flex flex-col gap-4 font-sans text-lg md:text-xl text-zinc-800 leading-relaxed font-medium max-w-2xl">
              <p>
                Hace más de 24 años nació FERTEX con el sueño de crear un espacio donde se forje disciplina, carácter y valores. Con el tiempo, nos convertimos en una gran familia marcada por el esfuerzo y el respeto.
              </p>
              <p>
                Hoy seguimos formando personas íntegras y deportistas comprometidos, orgullosos de ver cómo nuestros alumnos conquistan metas dentro y fuera del tatami.
              </p>
            </div>
          </motion.div>

          {/* Mobile Only Visual Column (Interleaved) */}
          <motion.div variants={itemVariants} className="block lg:hidden w-full relative min-h-[350px] border-b-8 border-zinc-950">
            <img src={aboutImage} alt="Entrenamiento FERTEX" loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90" />
          </motion.div>

          {/* Modular Data / Bento Section */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row border-b-8 border-zinc-950">
            {/* Data Box 1 */}
            <div className="flex-1 p-8 border-b-8 sm:border-b-0 sm:border-r-8 border-zinc-950 flex flex-col justify-center items-start bg-zinc-50">
              <span className="font-display font-black text-5xl md:text-6xl text-fertex-red tracking-tighter leading-none">24</span>
              <span className="font-sans font-bold text-sm md:text-base uppercase tracking-widest text-zinc-950 mt-2">Años de Experiencia</span>
            </div>
            {/* Data Box 2 */}
            <div className="flex-1 p-8 flex flex-col justify-center items-start bg-zinc-950 text-white">
              <span className="font-display font-black text-5xl md:text-6xl tracking-tighter leading-none">+1K</span>
              <span className="font-sans font-bold text-sm md:text-base uppercase tracking-widest text-zinc-400 mt-2">Alumnos Formados</span>
            </div>
          </motion.div>

          {/* Disciplines List */}
          <motion.div variants={itemVariants} className="flex flex-col flex-grow bg-zinc-50">
            {disciplines.map((discipline, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveModal(discipline); } }}
                onClick={() => setActiveModal(discipline)}
                className={`group flex items-center justify-between p-6 lg:p-8 hover:bg-fertex-red hover:text-white transition-colors duration-200 cursor-pointer ${index !== disciplines.length - 1 ? 'border-b-8 border-zinc-950' : ''}`}
              >
                <span className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tighter text-zinc-950 group-hover:text-white transition-colors">
                  {discipline.title}
                </span>
                <svg className="w-8 h-8 text-zinc-950 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
