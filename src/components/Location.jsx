import React from 'react';
import { motion } from 'framer-motion';

export default function Location() {
  return (
    <section id="contact" className="w-full bg-zinc-50 border-b-8 border-zinc-950 py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      
      {/* Bento Dashboard Container - Centered clean card */}
      <motion.div 
        className="max-w-6xl mx-auto border-8 border-zinc-950 flex flex-col lg:flex-row bg-white shadow-[12px_12px_0px_0px_rgba(24,24,27,1)] lg:shadow-[24px_24px_0px_0px_rgba(24,24,27,1)]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        
        {/* Left Info Box */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b-8 lg:border-b-0 lg:border-r-8 border-zinc-950">
           <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-zinc-950 tracking-tighter mb-10">
             Fertex <span className="text-fertex-red">Villa Flores</span>
           </h2>
           
           <div className="font-sans text-lg md:text-xl text-zinc-800 font-medium space-y-8">
             <div className="border-l-4 border-fertex-red pl-6">
               <p className="uppercase font-bold tracking-widest text-zinc-500 text-sm mb-2">Dirección</p>
               <p className="leading-relaxed">Av. los Jardines Este 609<br/>San Juan de Lurigancho 15431</p>
             </div>
             <div className="border-l-4 border-fertex-red pl-6">
               <p className="uppercase font-bold tracking-widest text-zinc-500 text-sm mb-2">Teléfono</p>
               <a href="tel:+51944351592" className="leading-relaxed hover:text-fertex-red transition-colors block">+51 944 351 592</a>
             </div>
             <div className="border-l-4 border-fertex-red pl-6 pt-2 flex items-center gap-6">
               <span className="uppercase font-bold tracking-widest text-zinc-500 text-sm mr-2">Síguenos:</span>
               <a href="https://www.facebook.com/FertexVillaFloress/" target="_blank" rel="noopener noreferrer" className="text-zinc-950 hover:text-fertex-red transition-colors" aria-label="Facebook">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
               </a>
               <a href="https://www.instagram.com/fertexvillaflores/" target="_blank" rel="noopener noreferrer" className="text-zinc-950 hover:text-fertex-red transition-colors" aria-label="Instagram">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
             </div>
           </div>
        </div>

        {/* Right Map Box */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-zinc-200">
           <iframe 
             src="https://www.google.com/maps?q=Av.+los+Jardines+Este+609,+San+Juan+de+Lurigancho&z=17&output=embed" 
             className="absolute inset-0 w-full h-full grayscale contrast-[1.1] opacity-90 mix-blend-luminosity" 
             style={{ border: 0 }} 
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             title="Mapa de la Sede FERTEX"
           ></iframe>
        </div>

      </motion.div>
    </section>
  );
}
