import React from 'react';
import { motion } from 'framer-motion';
import RevealTitle from './RevealTitle';
import imgCap from '../assets/images/instructor-capoeira.webp';

export default function Instructors() {
  // Para agregar una foto: importarla arriba (import imgPaco from '../assets/images/...') y poner `image: imgPaco`
  const instructors = [
    {
      name: "Paco Orizano",
      discipline: "Taekwondo",
      image: ""
    },
    {
      name: "Instructor MuayThai",
      discipline: "Muay Thai",
      image: ""
    },
    {
      name: "Edson Suarez",
      discipline: "Capoeira",
      image: imgCap
    }
  ];

  return (
    <section id="instructors" className="w-full bg-zinc-950 border-b-8 border-zinc-950">

      {/* Massive Header */}
      <div className="w-full border-b-8 border-zinc-950 bg-white p-8 lg:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <motion.p
            className="uppercase font-bold tracking-widest text-zinc-500 text-sm mb-4 border-l-4 border-fertex-red pl-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Quiénes te entrenan
          </motion.p>
          <RevealTitle
            parts={[{ text: 'Nuestros' }, { text: 'Maestros', className: 'text-fertex-red' }]}
            breakAt="md"
            delay={0.1}
            className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase text-zinc-950 tracking-tighter leading-none"
          />
        </div>
        <motion.p
          className="font-sans text-xl text-zinc-800 font-medium max-w-sm text-right hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
        >
          Tres disciplinas, tres maestros que te guían en cada paso.
        </motion.p>
      </div>

      {/* 3-Column Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        {instructors.map((instructor, index) => (
          <motion.div
            key={instructor.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 }}
            className="group relative min-h-[clamp(520px,150vw,640px)] md:min-h-[clamp(480px,66svh,640px)] lg:min-h-[clamp(560px,min(95svh,44vw),880px)] border-b-8 md:border-b-0 md:border-r-8 border-zinc-950 overflow-hidden last:border-r-0"
          >
            {/* Background Image */}
            {instructor.image && (
              <img
                loading="lazy"
                src={instructor.image}
                alt={instructor.name}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-90 transition-all duration-700 ease-in-out"
              />
            )}

            {/* Content Container */}
            <div className="absolute inset-0 p-6 md:p-5 lg:p-8 flex flex-col justify-end z-10">

              {/* Disciplina: etiqueta siempre visible sobre el nombre */}
              <span className="bg-fertex-red text-white w-max px-3 py-1 mb-4 font-bold uppercase tracking-widest text-xs border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {instructor.discipline}
              </span>

              {/* Nombre: cada palabra sobre un bloque sólido para leerse sobre cualquier foto */}
              <h3 className="font-display font-black text-5xl md:text-4xl lg:text-6xl uppercase tracking-tighter leading-none flex flex-col items-start gap-1">
                {instructor.name.split(' ').map((word) => (
                  <span
                    key={word}
                    className="bg-zinc-950 text-white px-3 py-1 group-hover:bg-fertex-red transition-colors duration-300"
                  >
                    {word}
                  </span>
                ))}
              </h3>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
