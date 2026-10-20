import React from 'react';
import imgBg from '../assets/images/fertex-taekwondo-maestros-instructores-01.webp';

// Para poner el video: copiar el archivo en la carpeta /public (ej. public/fertex.mp4)
// y escribir aquí su ruta: const VIDEO_SRC = '/fertex.mp4';
// Mientras esté vacío, el banner muestra la foto.
const VIDEO_SRC = '';

const mediaClasses = 'absolute inset-0 w-full h-full object-cover object-[50%_0%] grayscale contrast-125';

export default function VideoBanner() {
  return (
    <section className="relative w-full flex flex-col min-h-[500px] md:min-h-[clamp(380px,70svh,600px)] lg-h-banner border-b-8 border-zinc-950 overflow-hidden bg-zinc-950">

      {/* Foto o video: se ve completa, sin texto encima, para que se aprecien las caras */}
      <div className="relative flex-1 min-h-0">
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
          <img src={imgBg} alt="Maestros y alumnos de FERTEX sonriendo juntos" loading="lazy" className={mediaClasses} />
        )}
      </div>

      {/* Frase en una barra sólida inferior */}
      <div className="relative bg-zinc-950 border-t-8 border-fertex-red px-4 sm:px-6 lg:px-8 py-5 md:py-6">
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white tracking-tighter leading-[0.95] text-center md:text-left">
          No hay atajos. <span className="text-fertex-red">Solo Disciplina.</span>
        </h2>
      </div>

    </section>
  );
}
