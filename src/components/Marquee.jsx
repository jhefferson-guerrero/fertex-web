import React from 'react';
import imgHandWraps from '../assets/images/hand_wraps.jpg';

export default function Marquee() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] border-b-8 border-zinc-950 overflow-hidden bg-zinc-950">
      
      {/* Video Loop - Usando Poster como respaldo mientras subes tu video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster={imgHandWraps}
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-150 brightness-75 mix-blend-luminosity opacity-80"
      >
        {/* Aquí va tu video real. Ejemplo: <source src="/mivideo.mp4" type="video/mp4" /> */}
        <source src="" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Overlay Oscuro para asegurar contraste y estilo brutalista */}
      <div className="absolute inset-0 bg-zinc-950/40"></div>

      {/* Frase Masiva Centrada */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl uppercase text-white tracking-tighter text-center leading-[0.9] text-stroke-fertex-small drop-shadow-2xl">
          No hay atajos.<br/>
          <span className="text-fertex-red mix-blend-normal" style={{ textShadow: '4px 4px 0px #000' }}>Solo Disciplina.</span>
        </h2>
      </div>

    </section>
  );
}
