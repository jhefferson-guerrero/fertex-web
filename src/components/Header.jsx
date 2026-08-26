import React from 'react';
import { motion } from 'framer-motion';
import logoFertex from '../assets/images/logo-fertex.webp';

export default function Header() {
  return (
    <header className="border-b-8 border-zinc-950 bg-white sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" aria-label="Volver al inicio">
              <motion.img 
                src={logoFertex} 
                alt="FERTEX Logo" 
                className="h-12 md:h-16 w-auto cursor-pointer" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6 items-center">
            <a href="#about" className="text-zinc-950 hover:bg-zinc-950 hover:text-white px-2 lg:px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 border-2 border-transparent hover:border-zinc-950 whitespace-nowrap">
              Sobre Nosotros
            </a>
            <a href="#gallery" className="text-zinc-950 hover:bg-zinc-950 hover:text-white px-2 lg:px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 border-2 border-transparent hover:border-zinc-950 whitespace-nowrap">
              Futuros Campeones
            </a>
            <a href="#instructors" className="text-zinc-950 hover:bg-zinc-950 hover:text-white px-2 lg:px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 border-2 border-transparent hover:border-zinc-950 whitespace-nowrap">
              Maestros
            </a>
            <a href="https://wa.me/51944351592?text=Hola%20FERTEX,%20quiero%20información%20sobre%20las%20clases." target="_blank" rel="noopener noreferrer" className="bg-fertex-red text-white px-4 lg:px-4 xl:px-6 py-2 text-sm font-bold uppercase tracking-widest border-2 border-zinc-950 hover:bg-zinc-950 transition-colors duration-200 whitespace-nowrap ml-2">
              Únete Ahora
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            <button type="button" aria-label="Abrir menú" className="text-zinc-950 focus:outline-none p-2 border-2 border-zinc-950">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
