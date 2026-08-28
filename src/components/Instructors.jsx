import React from 'react';
import { motion } from 'framer-motion';
import imgTkd from '../assets/images/instructor-taekwondo-01.webp';
import imgMt from '../assets/images/instructor-muaythai.webp';
import imgCap from '../assets/images/instructor-capoeira.webp';

export default function Instructors() {
  const instructors = [
    {
      name: "Paco Orizano",
      discipline: "Taekwondo",
      description: "Instructor Internacional. Especialista en combate competitivo y disciplina formativa.",
      image: imgTkd
    },
    {
      name: "Instructor MuayThai",
      discipline: "Muay Thai",
      description: "Enfoque brutal en striking, acondicionamiento y sparring.",
      image: imgMt
    },
    {
      name: "Edson Suarez",
      discipline: "Capoeira",
      description: "Maestro formador. Fusión perfecta entre acrobacia, ritmo y técnica de derribo.",
      image: imgCap
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
    <section id="instructors" className="w-full bg-zinc-950 border-b-8 border-zinc-950">

      {/* Massive Header */}
      <motion.div 
        className="w-full border-b-8 border-zinc-950 bg-white p-8 lg:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div>
          <p className="uppercase font-bold tracking-widest text-zinc-500 text-sm mb-4 border-l-4 border-fertex-red pl-4">Grados Superiores</p>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase text-zinc-950 tracking-tighter leading-none">
            Nuestros <br className="hidden md:block" /> Maestros
          </h2>
        </div>
        <p className="font-sans text-xl text-zinc-800 font-medium max-w-sm text-right hidden md:block">
          Entrena con verdaderos especialistas. No hay atajos, solo disciplina guiada por los mejores.
        </p>
      </motion.div>

      {/* 3-Column Grid */}
      <motion.div 
        className="w-full grid grid-cols-1 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {instructors.map((instructor, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="group relative min-h-[500px] lg:min-h-[700px] border-b-8 md:border-b-0 md:border-r-8 border-zinc-950 overflow-hidden last:border-r-0"
          >
            {/* Background Image */}
            <img
              loading="lazy"
              src={instructor.image}
              alt={instructor.name}
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-90 transition-all duration-700 ease-in-out"
            />

            {/* Overlay Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">

              {/* Animated Detail Box (Slides up on hover) */}
              <div className="overflow-hidden mb-4">
                <div className="translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col gap-3">
                  <span className="bg-fertex-red text-white w-max px-3 py-1 font-bold uppercase tracking-widest text-xs border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {instructor.discipline}
                  </span>
                  <p className="font-sans text-zinc-200 text-sm md:text-base max-w-xs font-medium bg-zinc-950/80 p-3 border-l-2 border-fertex-red backdrop-blur-sm">
                    {instructor.description}
                  </p>
                </div>
              </div>

              {/* Massive Name (Always visible) */}
              <h3 className="font-display font-black text-5xl lg:text-6xl uppercase text-white tracking-tighter leading-none group-hover:text-fertex-red transition-colors duration-300">
                {instructor.name.split(' ')[0]} <br />
                {instructor.name.split(' ')[1]}
              </h3>

            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
