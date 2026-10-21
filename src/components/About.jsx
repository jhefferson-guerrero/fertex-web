import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutImage from '../assets/images/fertex-taekwondo-competencia-03.webp';
import { whatsappLink, CTA_LABEL } from '../config/contact';
import useModal from '../hooks/useModal';
import CountUp from './CountUp';
import RevealTitle from './RevealTitle';

export default function About() {
  const [activeModal, setActiveModal] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const openModal = (discipline, e) => {
    triggerRef.current = e.currentTarget;
    setActiveModal(discipline);
  };

  // Scroll bloqueado, foco atrapado, Escape y retorno del foco
  useModal({
    isOpen: Boolean(activeModal),
    onClose: () => setActiveModal(null),
    dialogRef,
    triggerRef,
  });

  const disciplines = [
    {
      title: 'Taekwondo ITF',
      description: 'Arte marcial coreano de técnica, autocontrol y patadas dinámicas. Aprende defensa personal real y desarrolla una mentalidad inquebrantable.',
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


  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="bg-white border-b-8 border-zinc-950">
      
      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <div data-lenis-prevent="true" className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/80"
              onClick={() => setActiveModal(null)}
              aria-hidden="true"
            ></motion.div>

            {/* Modal Content - Brutalist Box */}
            <motion.div
              ref={dialogRef}
              tabIndex={-1}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative bg-white border-8 border-zinc-950 w-full max-w-2xl shadow-[16px_16px_0px_0px_rgba(24,24,27,1)] flex flex-col outline-none"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
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
                <p id="modal-description" className="font-sans text-lg md:text-xl text-zinc-800 leading-relaxed font-medium">
                  {activeModal.description}
                </p>
                
                <div className="mt-4">
                  <a 
                    href={whatsappLink(`Hola FERTEX, vengo de su página web. Me gustaría saber los horarios y precios de ${activeModal.title}, por favor.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveModal(null)}
                    className="inline-block w-full bg-fertex-red text-white text-center text-lg font-bold uppercase tracking-widest px-8 py-5 border-4 border-zinc-950 hover:bg-zinc-950 transition-colors duration-200 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  >
                    {CTA_LABEL}
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:min-h-hero">

        {/* Visual Column (Desktop Only): la foto tiene el alto visible de la pantalla y
            se queda fija mientras se lee el texto, así se ve casi completa en cualquier laptop */}
        <div className="hidden lg:block w-full bg-zinc-50 relative lg:border-r-8 border-zinc-950">
          <div className="lg:sticky lg:top-[var(--header-h)] lg:h-[calc(100svh-var(--header-h))] overflow-hidden">
            <img src={aboutImage} alt="Entrenamiento FERTEX" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[50%_35%] grayscale contrast-125 brightness-90" />
          </div>
        </div>

        {/* Text Column - Modular Layout */}
        <div className="w-full flex flex-col relative bg-white">

          {/* Header Section */}
          <div className="p-8 lg:p-12 xl:p-16 border-b-8 border-zinc-950">
            <RevealTitle
              parts={[{ text: 'Sobre' }, { text: 'Nosotros', className: 'text-fertex-red' }]}
              breakAt="always"
              className="font-display font-black text-6xl md:text-7xl uppercase text-zinc-950 tracking-tighter leading-none mb-6"
            />
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.25 }} className="flex flex-col gap-4 font-sans text-lg md:text-xl text-zinc-800 leading-relaxed font-medium max-w-2xl">
              <p>
                Hace más de 24 años nació FERTEX con un sueño: crear un lugar donde se formen carácter y valores. Con el tiempo, nos convertimos en una gran familia marcada por el esfuerzo y el respeto.
              </p>
              <p>
                Hoy seguimos formando personas íntegras y deportistas comprometidos, y celebramos cada meta que nuestros alumnos conquistan dentro y fuera del tatami.
              </p>
            </motion.div>
          </div>

          {/* Mobile Only Visual Column (Interleaved) */}
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="block lg:hidden w-full relative min-h-[350px] border-b-8 border-zinc-950">
            <img src={aboutImage} alt="Entrenamiento FERTEX" loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90" />
          </motion.div>

          {/* Modular Data / Bento Section */}
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex flex-col sm:flex-row border-b-8 border-zinc-950">
            {/* Data Box 1 */}
            <div className="flex-1 p-8 border-b-8 sm:border-b-0 sm:border-r-8 border-zinc-950 flex flex-col justify-center items-start bg-zinc-50">
              <CountUp to={24} duration={1.6} className="font-display font-black text-5xl md:text-6xl text-fertex-red tracking-tighter leading-none" />
              <span className="font-sans font-bold text-sm md:text-base uppercase tracking-widest text-zinc-950 mt-2">Años de Experiencia</span>
            </div>
            {/* Data Box 2 */}
            <div className="flex-1 p-8 flex flex-col justify-center items-start bg-zinc-950 text-white">
              <CountUp to={1000} prefix="+" finalLabel="1K" duration={2.2} className="font-display font-black text-5xl md:text-6xl tracking-tighter leading-none" />
              <span className="font-sans font-bold text-sm md:text-base uppercase tracking-widest text-zinc-400 mt-2">Alumnos Formados</span>
            </div>
          </motion.div>

          {/* Disciplines List */}
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex flex-col flex-grow bg-zinc-50 lg:[&>button]:flex-1">
            {disciplines.map((discipline, index) => (
              <button
                key={index}
                type="button"
                aria-haspopup="dialog"
                onClick={(e) => openModal(discipline, e)}
                className={`group w-full text-left flex items-center justify-between p-6 lg:p-8 lg:pr-24 hover:bg-fertex-red hover:text-white transition-colors duration-200 cursor-pointer ${index !== disciplines.length - 1 ? 'border-b-8 border-zinc-950' : ''}`}
              >
                <span className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tighter text-zinc-950 group-hover:text-white transition-colors">
                  {discipline.title}
                </span>
                <svg aria-hidden="true" className="w-8 h-8 text-zinc-950 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
