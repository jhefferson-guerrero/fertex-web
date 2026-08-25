import React from 'react';

export default function Hero() {
  return (
    <section className="relative border-b-8 border-zinc-950 overflow-hidden flex flex-col lg:flex-row min-h-screen">

      {/* LEFT COLUMN */}
      <div className="w-full lg:w-1/2 relative z-10 pt-24 pb-32 px-4 sm:px-6 lg:px-8 xl:px-12 md:pt-32 md:pb-32 flex flex-col justify-center border-b-8 lg:border-b-0 lg:border-r-8 border-zinc-950 bg-zinc-50">

        {/* Subtle Hand Wraps image next to text */}
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.15] pointer-events-none mix-blend-multiply hidden md:block">
          <img src="/hand_wraps.jpg" alt="Hand Wraps" className="w-full h-full object-cover grayscale contrast-150" />
        </div>

        <div className="relative z-20">
          <h1 className="font-display font-black text-7xl lg:text-7xl xl:text-8xl 2xl:text-[8rem] tracking-tighter text-zinc-950 uppercase leading-[0.85] lg:leading-[0.9] 2xl:leading-[0.85] mb-6 lg:mb-4 xl:mb-8 relative">
            Forja<br />
            Tu<br />
            <span className="text-fertex-red">Carácter</span>
          </h1>
          <p className="mt-4 text-xl lg:text-lg xl:text-2xl text-zinc-800 font-sans font-medium max-w-xl border-l-4 border-fertex-red pl-6 mb-12 lg:mb-6 2xl:mb-12 text-left bg-zinc-50/60 backdrop-blur-[2px]">
            Disciplina, fuerza y técnica. Únete a FERTEX y domina el arte del combate y la superación personal.
          </p>
          <div className="flex flex-wrap gap-4 xl:gap-6">
            <a href="#contact" className="inline-block bg-fertex-red text-white text-base lg:text-sm xl:text-lg font-bold uppercase tracking-widest px-6 lg:px-4 xl:px-8 py-4 lg:py-3 xl:py-4 border-4 border-zinc-950 hover:bg-zinc-950 transition-colors duration-200 text-center shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 whitespace-nowrap">
              Empieza tu Entrenamiento
            </a>
            <a href="#about" className="inline-block bg-white text-zinc-950 text-base lg:text-sm xl:text-lg font-bold uppercase tracking-widest px-6 lg:px-4 xl:px-8 py-4 lg:py-3 xl:py-4 border-4 border-zinc-950 hover:bg-zinc-100 transition-colors duration-200 text-center whitespace-nowrap">
              Descubre Más
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full lg:w-1/2 relative bg-zinc-950 min-h-[60vh] lg:min-h-0 flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img src="/hero_bg.jpg" alt="Martial Arts Composition" className="w-full h-full object-cover grayscale contrast-[1.25] brightness-75 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-zinc-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Premium typography overlay */}
        <div className="relative z-10 p-8 lg:p-8 xl:p-12 w-full h-full flex flex-col justify-between">
          <div className="text-right opacity-90">
            <span className="font-display font-black text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] leading-none text-transparent tracking-tighter uppercase block" style={{ WebkitTextStroke: '3px #CC0000' }}>
              20
            </span>
          </div>

          <div className="mt-auto">
            <h2 className="font-display font-black text-5xl lg:text-4xl xl:text-5xl 2xl:text-[5rem] uppercase text-white tracking-tighter leading-[0.9] mix-blend-overlay drop-shadow-2xl">
              Años <br /> Formando <br />
              <span className="text-fertex-red mix-blend-normal relative z-20" style={{ textShadow: '2px 2px 0px #000' }}>Disciplina</span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}
