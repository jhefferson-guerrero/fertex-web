import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoFertex from '../assets/images/logo-fertex.webp';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b-8 border-zinc-950 bg-white fixed top-0 w-full z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-50 bg-white">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" aria-label="Volver al inicio" onClick={() => setIsMobileMenuOpen(false)}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: 'spring' }}
              >
                <img 
                  src={logoFertex} 
                  alt="FERTEX Logo" 
                  className="h-16 md:h-20 w-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 ease-out" 
                />
              </motion.div>
            </a>
          </div>
          
          {/* Desktop Nav */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              aria-label="Abrir menú" 
              className="text-zinc-950 focus:outline-none p-2 border-2 border-zinc-950 bg-zinc-50 hover:bg-zinc-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                   <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                   <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-24 left-0 w-full bg-white border-b-8 border-zinc-950 flex flex-col p-6 shadow-2xl z-40"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-950 py-4 text-center text-lg font-bold uppercase tracking-widest border-b-2 border-zinc-200 hover:bg-zinc-100">
              Sobre Nosotros
            </a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-950 py-4 text-center text-lg font-bold uppercase tracking-widest border-b-2 border-zinc-200 hover:bg-zinc-100">
              Futuros Campeones
            </a>
            <a href="#instructors" onClick={() => setIsMobileMenuOpen(false)} className="block text-zinc-950 py-4 text-center text-lg font-bold uppercase tracking-widest border-b-2 border-zinc-200 hover:bg-zinc-100">
              Maestros
            </a>
            <a href="https://wa.me/51944351592?text=Hola%20FERTEX,%20quiero%20información%20sobre%20las%20clases." target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="block bg-fertex-red text-white py-3 mt-4 text-center text-base font-bold uppercase tracking-widest border-2 border-zinc-950 hover:bg-zinc-950 transition-colors">
              Únete Ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
