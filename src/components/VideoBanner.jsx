import React from 'react';
import imgBg from '../assets/images/fertex-taekwondo-maestros-instructores-01.webp';

// Para poner el video: copiar el archivo en la carpeta /public (ej. public/fertex.mp4)
// y escribir aquí su ruta: const VIDEO_SRC = '/fertex.mp4';
// Mientras esté vacío, el banner muestra la foto.
const VIDEO_SRC = '';

const mediaClasses = 'absolute inset-0 w-full h-full object-cover object-top grayscale contrast-150 brightness-75 mix-blend-luminosity opacity-80';

export default function VideoBanner() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[clamp(380px,70svh,600px)] lg-h-banner border-b-8 border-zinc-950 overflow-hidden bg-zinc-950">

      {VIDEO_SRC ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={imgBg}
          aria-hidden="true"
          className={mediaClasses}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <img src={imgBg} alt="" aria-hidden="true" loading="lazy" className={mediaClasses} />
      )}

      {/* Overlay oscuro para asegurar contraste */}
      <div className="absolute inset-0 bg-zinc-950/40"></div>

      {/* Frase centrada */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h2 className="font-display font-black text-5xl md:text-7xl lg:text-8xl uppercase text-white tracking-tighter text-center leading-[0.9] [text-shadow:4px_4px_0_#09090b]">
          No hay atajos.<br/>
          <span className="text-fertex-red" style={{ textShadow: '4px 4px 0px #000' }}>Solo Disciplina.</span>
        </h2>
      </div>

    </section>
  );
}
