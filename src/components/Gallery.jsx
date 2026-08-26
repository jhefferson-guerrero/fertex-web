import React from 'react';
import { motion } from 'framer-motion';
import imgCapoeira from '../assets/images/fertex-capoeira-entrenamiento-01.webp';
import imgTkd from '../assets/images/fertex-taekwondo-entrenamiento-01.webp';
import imgMt from '../assets/images/fertex-muaythai-entrenamiento-03.webp';

export default function Gallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="gallery" className="bg-white border-b-8 border-zinc-950">
      <motion.div
        className="w-full flex flex-col lg:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >

        {/* Left Column - Intro text and 1 Image */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 flex flex-col border-b-8 lg:border-b-0 lg:border-r-8 border-zinc-950">
          <div className="p-8 lg:p-12 xl:p-16 border-b-8 border-zinc-950 bg-zinc-50 flex-grow flex flex-col justify-center">
            <h2 className="font-display font-black text-5xl md:text-6xl xl:text-7xl uppercase text-zinc-950 tracking-tighter leading-none mb-6">
              Futuros <br />
              <span className="text-fertex-red">Campeones</span>
            </h2>
            <p className="font-sans text-lg text-zinc-800 leading-relaxed font-medium">
              Forjamos el carácter desde los primeros pasos. Nuestras clases para niños y jóvenes son el núcleo de la comunidad FERTEX, donde el respeto y la disciplina se aprenden en el tatami.
            </p>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[400px] flex-grow group overflow-hidden">
            <img src={imgCapoeira} alt="Capoeira Kids" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500"></div>

          </div>
        </motion.div>

        {/* Center Column - 1 Tall Image */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 relative min-h-[400px] lg:min-h-[800px] border-b-8 lg:border-b-0 lg:border-r-8 border-zinc-950 overflow-hidden group">
          <img src={imgTkd} alt="Taekwondo Kids" className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.15] brightness-90 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500"></div>

        </motion.div>

        {/* Right Column - 1 Image */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 relative min-h-[400px] lg:min-h-[800px] overflow-hidden group">
          <img src={imgMt} alt="Muay Thai Youth" className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.15] brightness-90 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500"></div>

        </motion.div>

      </motion.div>
    </section>
  );
}
