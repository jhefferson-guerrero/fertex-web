import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoFertex from '../assets/images/logo-fertex.webp';
import { whatsappLink, NAV_CTA_LABEL } from '../config/contact';

const NAV_LINKS = [
  { id: 'about', href: '#about', label: 'Sobre Nosotros' },
  { id: 'gallery', href: '#gallery', label: 'Galería' },
  { id: 'instructors', href: '#instructors', label: 'Maestros' },
  { id: 'contact', href: '#contact', label: 'Ubicación' },
];

// Entrada del menú: la barra baja desde arriba y luego aparecen el logo y los enlaces, uno tras otro
const NAV_ENTRANCE = {
  hidden: {},
  visible: { transition: { delayChildren: 0.45, staggerChildren: 0.07 } },
};
const NAV_ITEM_ENTRANCE = {
  hidden: { opacity: 0, y: -14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

// Tiempo que dura el scroll suave al hacer clic en un enlace del menú
const SCROLL_LOCK_MS = 1600;

// Detecta qué sección está cruzando la parte alta de la pantalla para marcarla en el menú.
// Al hacer clic en un enlace, la sección elegida se marca de inmediato y se ignoran las
// secciones intermedias mientras dura el scroll (así el menú no parpadea al pasar por ellas).
function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  const visibleRef = useRef(new Map());
  const lockTimerRef = useRef(null);

  const sync = useCallback(() => {
    setActive(ids.find((id) => visibleRef.current.get(id)) ?? null);
  }, [ids]);

  useEffect(() => {
    const visible = visibleRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
        if (!lockTimerRef.current) sync();
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      observer.disconnect();
      clearTimeout(lockTimerRef.current);
    };
  }, [ids, sync]);

  const lockTo = useCallback((id) => {
    setActive(id);
    clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      lockTimerRef.current = null;
      sync();
    }, SCROLL_LOCK_MS);
  }, [sync]);

  return [active, lockTo];
}

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, lockActiveSection] = useActiveSection(SECTION_IDS);

  // Accesibilidad: cerrar el menú móvil con la tecla Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="border-b-8 border-zinc-950 bg-white fixed top-0 w-full z-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-50 bg-white">
        <div className="flex justify-between items-center h-[var(--header-inner)]">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" aria-label="Volver al inicio" onClick={() => { setIsMobileMenuOpen(false); lockActiveSection(null); }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35, type: 'spring' }}
              >
                <img
                  src={logoFertex}
                  alt="FERTEX Logo"
                  className="h-16 md:h-20 lg:h-[calc(var(--header-inner)-1rem)] w-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 ease-out"
                />
              </motion.div>
            </a>
          </div>

          {/* Desktop Nav */}
          <motion.nav
            aria-label="Principal"
            variants={NAV_ENTRANCE}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex space-x-2 lg:space-x-4 xl:space-x-6 items-center"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <motion.a
                  key={link.id}
                  variants={NAV_ITEM_ENTRANCE}
                  href={link.href}
                  onClick={() => lockActiveSection(link.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`px-2 lg:px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 border-2 whitespace-nowrap hover:bg-zinc-950 hover:text-white hover:border-zinc-950 ${isActive ? 'bg-zinc-950 text-white border-zinc-950' : 'text-zinc-950 border-transparent'}`}
                >
                  {link.label}
                </motion.a>
              );
            })}
            <motion.a variants={NAV_ITEM_ENTRANCE} href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="bg-fertex-red text-white px-4 lg:px-4 xl:px-6 py-2 text-sm font-bold uppercase tracking-widest border-2 border-zinc-950 hover:bg-zinc-950 transition-colors duration-200 whitespace-nowrap ml-2">
              {NAV_CTA_LABEL}
            </motion.a>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.div
            className="lg:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.45 }}
          >
            <button
              type="button"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-zinc-950 p-2 border-2 border-zinc-950 bg-zinc-50 hover:bg-zinc-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                   <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                   <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Principal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-24 left-0 w-full bg-white border-b-8 border-zinc-950 flex flex-col p-6 z-40"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => { setIsMobileMenuOpen(false); lockActiveSection(link.id); }}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block py-4 text-center text-lg font-bold uppercase tracking-widest border-b-2 border-zinc-200 ${isActive ? 'bg-zinc-950 text-white' : 'text-zinc-950 hover:bg-zinc-100'}`}
                >
                  {link.label}
                </a>
              );
            })}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="block bg-fertex-red text-white py-3 mt-4 text-center text-base font-bold uppercase tracking-widest border-2 border-zinc-950 hover:bg-zinc-950 transition-colors">
              {NAV_CTA_LABEL}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
