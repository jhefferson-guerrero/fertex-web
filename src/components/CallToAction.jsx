import React from 'react';
import { motion } from 'framer-motion';
import { whatsappLink, TRIAL_CTA_LABEL, TRIAL_MESSAGE } from '../config/contact';
import RevealTitle from './RevealTitle';

export default function CallToAction() {
  return (
    <section className="w-full relative py-32 md:py-[clamp(5rem,20svh,12rem)] px-4 sm:px-6 lg:px-8 border-b-8 border-zinc-950 overflow-hidden flex flex-col items-center justify-center bg-fertex-red">

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">

        <RevealTitle
          parts={[{ text: '¿Tienes lo que se necesita?' }]}
          className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase text-zinc-950 tracking-tighter leading-[1.1] mb-6"
        />

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        >
          <p className="font-sans text-xl text-zinc-950 font-bold uppercase tracking-[0.2em]">
            Da el primer paso. El tatami te espera.
          </p>
        </motion.div>

        {/* Botón negro para destacar sobre el fondo rojo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
        >
        <a href={whatsappLink(TRIAL_MESSAGE)} target="_blank" rel="noopener noreferrer" className="inline-block text-center focus-visible:outline-white bg-zinc-950 text-white text-lg md:text-xl font-bold uppercase tracking-widest px-10 py-5 border-4 border-zinc-950 hover:bg-white hover:border-white hover:text-zinc-950 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2">
          {TRIAL_CTA_LABEL}
        </a>
        </motion.div>

      </div>

    </section>
  );
}
