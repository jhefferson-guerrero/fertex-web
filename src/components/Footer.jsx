import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-50 border-t-8 border-fertex-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-zinc-800 pb-8 md:pb-0 md:pr-8">
            <span className="font-display font-black text-6xl tracking-tighter text-white uppercase mb-4">
              Fertex
            </span>
            <p className="text-zinc-400 font-sans font-medium">
              Disciplina, carácter y valores a través de las artes marciales.
            </p>
          </div>

          <div className="flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-zinc-800 pb-8 md:pb-0 md:pr-8 md:pl-8">
            <h3 className="font-display font-bold text-2xl uppercase tracking-widest text-fertex-red mb-6">Ubicación</h3>
            <p className="text-zinc-300 font-sans text-lg mb-2">Av. Principal 1234</p>
            <p className="text-zinc-300 font-sans text-lg">Ciudad, País</p>
          </div>

          <div className="flex flex-col md:pl-8">
            <h3 className="font-display font-bold text-2xl uppercase tracking-widest text-fertex-red mb-6">Contacto</h3>
            <p className="text-zinc-300 font-sans text-lg mb-2">info@fertex.com</p>
            <p className="text-zinc-300 font-sans text-lg">+1 234 567 8900</p>
          </div>

        </div>
      </div>
      <div className="bg-zinc-900 py-6 text-center border-t border-zinc-800">
        <p className="text-zinc-500 font-sans font-medium uppercase tracking-widest text-sm">
          &copy; {new Date().getFullYear()} FERTEX Academia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
