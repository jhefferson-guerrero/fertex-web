import React from 'react';

export default function About() {
  const disciplines = ['Taekwondo ITF', 'Muay Thai', 'Capoeira'];

  return (
    <section id="about" className="bg-white border-b-8 border-zinc-950">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">

        {/* Visual Column */}
        <div className="w-full border-b-8 lg:border-b-0 lg:border-r-8 border-zinc-950 flex flex-col justify-center bg-zinc-50 relative min-h-[400px] lg:min-h-[600px]">
          <img src="/about_training.jpg" alt="Entrenamiento FERTEX" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90" />
        </div>

        {/* Text Column - Redesigned Modular Layout */}
        <div className="w-full flex flex-col relative bg-white">

          {/* Header Section */}
          <div className="p-8 lg:p-12 xl:p-16 border-b-8 border-zinc-950">
            <h2 className="font-display font-black text-6xl md:text-7xl uppercase text-zinc-950 tracking-tighter leading-none mb-6">
              Sobre <br />
              <span className="text-fertex-red">Nosotros</span>
            </h2>
            <p className="font-sans text-lg md:text-xl text-zinc-800 leading-relaxed font-medium max-w-2xl">
              Hace más de 20 años nació FERTEX, con el sueño de crear un espacio donde niños, jóvenes y adultos puedan desarrollar disciplina, carácter y valores. No somos solo un gimnasio; somos una escuela de formación integral para la vida.
            </p>
          </div>

          {/* Modular Data / Bento Section */}
          <div className="flex flex-col sm:flex-row border-b-8 border-zinc-950">
            {/* Data Box 1 */}
            <div className="flex-1 p-8 border-b-8 sm:border-b-0 sm:border-r-8 border-zinc-950 flex flex-col justify-center items-start bg-zinc-50">
              <span className="font-display font-black text-6xl md:text-7xl text-fertex-red tracking-tighter leading-none">20</span>
              <span className="font-sans font-bold text-sm md:text-base uppercase tracking-widest text-zinc-950 mt-2">Años de Legado</span>
            </div>
            {/* Data Box 2 */}
            <div className="flex-1 p-8 flex flex-col justify-center items-start bg-zinc-950 text-white">
              <span className="font-display font-black text-6xl md:text-7xl tracking-tighter leading-none">+1K</span>
              <span className="font-sans font-bold text-sm md:text-base uppercase tracking-widest text-zinc-400 mt-2">Cinturones Negros</span>
            </div>
          </div>

          {/* Disciplines List */}
          <div className="flex flex-col flex-grow bg-zinc-50">
            {disciplines.map((discipline, index) => (
              <div
                key={index}
                className={`group flex items-center justify-between p-6 lg:p-8 hover:bg-fertex-red hover:text-white transition-colors duration-200 cursor-pointer ${index !== disciplines.length - 1 ? 'border-b-8 border-zinc-950' : ''}`}
              >
                <span className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tighter text-zinc-950 group-hover:text-white transition-colors">
                  {discipline}
                </span>
                <svg className="w-8 h-8 text-zinc-950 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
