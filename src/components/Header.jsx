import React from 'react';

export default function Header() {
  return (
    <header className="border-b-8 border-zinc-950 bg-white sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-display font-black text-4xl tracking-tighter text-zinc-950 uppercase">
              Fertex
            </span>
          </div>
          <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 items-center">
            <a href="#about" className="text-zinc-950 hover:bg-zinc-950 hover:text-white px-2 lg:px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 border-2 border-transparent hover:border-zinc-950 whitespace-nowrap">
              Sobre Nosotros
            </a>
            <a href="#classes" className="text-zinc-950 hover:bg-zinc-950 hover:text-white px-2 lg:px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200 border-2 border-transparent hover:border-zinc-950 whitespace-nowrap">
              Clases
            </a>
            <a href="#contact" className="bg-fertex-red text-white px-4 lg:px-4 xl:px-6 py-2 text-sm font-bold uppercase tracking-widest border-2 border-zinc-950 hover:bg-zinc-950 transition-colors duration-200 whitespace-nowrap">
              Únete Ahora
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            <button className="text-zinc-950 focus:outline-none p-2 border-2 border-zinc-950">
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
