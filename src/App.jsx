import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VideoBanner from './components/VideoBanner';
import Gallery from './components/Gallery';
import Instructors from './components/Instructors';
import Location from './components/Location';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

// El header escala con el tamaño de pantalla, así que se mide en vez de usar un valor fijo
const headerHeight = () => document.querySelector('header')?.offsetHeight ?? 104;

function App() {
  // El preloader se muestra en cada carga de la página
  const [isLoading, setIsLoading] = useState(true);
  const handleLoaded = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    // Accesibilidad: respetar la preferencia "reducir movimiento" del sistema (scroll nativo)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const handleReducedAnchorClick = (e) => {
        const target = e.target.closest('a');
        const href = target?.getAttribute('href');
        if (!href?.startsWith('#')) return;
        e.preventDefault();
        if (href === '#') {
          window.scrollTo({ top: 0 });
        } else {
          const section = document.querySelector(href);
          if (section) window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - headerHeight() });
        }
      };
      document.addEventListener('click', handleReducedAnchorClick);
      return () => document.removeEventListener('click', handleReducedAnchorClick);
    }

    // Opción 2: Scroll Inercial Ultra-Premium con Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Opción 1: Arreglo del Header Fijo (Offset de -96px)
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        if (id === '#') {
          lenis.scrollTo(0, { duration: 1.5 });
          return;
        }
        lenis.scrollTo(id, { offset: -headerHeight() }); // compensa el alto (variable) del header
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" onComplete={handleLoaded} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-zinc-50 selection:bg-fertex-red selection:text-white">
      <a
        href="#main"
        onClick={() => document.getElementById('main')?.focus({ preventScroll: true })}
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[10000] focus:bg-fertex-red focus:text-white focus:px-4 focus:py-3 focus:font-bold focus:uppercase focus:tracking-widest focus:border-4 focus:border-zinc-950"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="pt-[var(--header-h)] outline-none">
        <Hero />
        <About />
        <VideoBanner />
        <Gallery />
        <Instructors />
        <CallToAction />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
        </div>
      )}
    </MotionConfig>
  );
}

export default App;
