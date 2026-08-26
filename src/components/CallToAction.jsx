import React from 'react';
import { motion } from 'framer-motion';
import imgCta from '../assets/images/fertex-muaythai-entrenamiento-05.webp';

export default function CallToAction() {
  return (
    <section className="w-full relative py-32 md:py-48 px-4 sm:px-6 lg:px-8 border-b-8 border-zinc-950 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Using the gritty muay thai image for a dark, epic feel */}
        <img src={imgCta} alt="Entrenamiento en Fertex" className="w-full h-full object-cover grayscale contrast-125" />
        
        {/* Red tinted overlay to contrast with the black footer */}
        <div className="absolute inset-0 bg-fertex-red/90 mix-blend-multiply"></div>
        {/* Slight dark layer to ensure text readability */}
        <div className="absolute inset-0 bg-zinc-950/20"></div>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
         
         {/* Refined Sans Typography - Cleaner, perfectly readable, smaller size */}
         <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-tighter leading-[1.1] mb-6">
           ¿Tienes lo que se necesita?
         </h2>
         
         <div className="mb-12">
           <p className="font-sans text-lg md:text-xl text-zinc-100 font-medium uppercase tracking-[0.2em] drop-shadow-md">
             Da el primer paso. El tatami te espera.
           </p>
         </div>

         {/* Premium CTA Button - Now Black to stand out against the Red background */}
         <a href="https://wa.me/51944351592?text=Hola%20FERTEX,%20quiero%20agendar%20mi%20clase%20de%20prueba%20gratis." target="_blank" rel="noopener noreferrer" className="inline-block bg-zinc-950 text-white text-lg md:text-xl font-bold uppercase tracking-widest px-10 py-5 border-4 border-zinc-950 hover:bg-white hover:border-white hover:text-zinc-950 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2">
           Agenda tu Clase de Prueba
         </a>

      </motion.div>
      
    </section>
  );
}
