import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from './components/Marquee';
import Gallery from './components/Gallery';
import Instructors from './components/Instructors';
import Location from './components/Location';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Opción 2: Scroll Inercial Ultra-Premium con Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

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
        lenis.scrollTo(id, { offset: -96 }); // -96px compensa el alto del header
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-zinc-50 selection:bg-fertex-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Gallery />
        <Instructors />
        <CallToAction />
        <Location />
      </main>
      <Footer />
      <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
