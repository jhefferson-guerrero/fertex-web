import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t-8 border-fertex-red flex flex-col">
      
      {/* Grid Content */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white bg-zinc-950">
        
        {/* Brand & Info Box */}
        <div className="p-8 md:p-12 border-b-8 md:border-b-0 md:border-r-8 border-zinc-800 flex flex-col justify-between">
          <div>
            <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter text-white uppercase mb-6">
              FERTEX
            </h2>
            <p className="font-sans text-xl md:text-2xl font-medium leading-relaxed text-zinc-400">
              Forjamos campeones en la vida y en el tatami. Únete a nuestra familia y descubre el verdadero poder de la disciplina.
            </p>
          </div>
        </div>

        {/* Location Box */}
        <div className="p-8 md:p-12 border-b-8 lg:border-b-0 lg:border-r-8 border-zinc-800 flex flex-col gap-6">
          <h3 className="font-display font-black text-4xl uppercase tracking-tighter text-white">Fertex Villa Flores</h3>
          <div className="font-sans text-lg text-zinc-300 font-medium border-l-4 border-fertex-red pl-4">
            <p>Av. los Jardines Este 609</p>
            <p>San Juan de Lurigancho 15431</p>
          </div>
          <div className="mt-auto">
            <p className="uppercase font-bold tracking-widest text-zinc-500 text-sm mb-1">Teléfono Directo</p>
            <a href="tel:+51944351592" className="font-sans text-2xl font-bold text-white hover:text-fertex-red transition-colors block">+51 944 351 592</a>
          </div>
        </div>

        {/* Social / CTA Box */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-black text-4xl uppercase tracking-tighter text-white mb-6">Únete a la Élite</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/FertexVillaFloress/" target="_blank" rel="noopener noreferrer" className="bg-zinc-950 border-2 border-zinc-800 p-4 hover:border-fertex-red hover:text-fertex-red transition-all duration-300 group" aria-label="Facebook">
                <svg className="w-8 h-8 text-white group-hover:text-fertex-red transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="https://www.instagram.com/fertexvillaflores/" target="_blank" rel="noopener noreferrer" className="bg-zinc-950 border-2 border-zinc-800 p-4 hover:border-fertex-red hover:text-fertex-red transition-all duration-300 group" aria-label="Instagram">
                <svg className="w-8 h-8 text-white group-hover:text-fertex-red transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-black border-t-8 border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 font-sans font-bold uppercase tracking-widest text-xs">
          &copy; {new Date().getFullYear()} FERTEX ACADEMIA.
        </p>
        <p className="text-zinc-600 font-sans font-bold uppercase tracking-widest text-xs">
          FUTUROS CAMPEONES.
        </p>
      </div>

    </footer>
  );
}
