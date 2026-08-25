import React from 'react';

export default function Marquee() {
  const words = [
    "DISCIPLINA", "RESPETO", "HONOR", "FUERZA", "CARÁCTER", "LEALTAD",
    "DISCIPLINA", "RESPETO", "HONOR", "FUERZA", "CARÁCTER", "LEALTAD"
  ];

  return (
    <div className="w-full bg-fertex-red border-b-8 border-zinc-950 overflow-hidden flex items-center py-6 md:py-8">
      {/* 
        The animate-marquee class is defined in index.css.
        It translates the container from 0% to -100% continuously.
      */}
      <div className="flex whitespace-nowrap animate-marquee">

        {/* First identical block */}
        <div className="flex shrink-0 items-center">
          {words.map((word, index) => (
            <React.Fragment key={`first-${index}`}>
              <span className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase text-zinc-950 px-8 md:px-12">
                {word}
              </span>
              <span className="text-white text-4xl md:text-5xl font-black">/</span>
            </React.Fragment>
          ))}
        </div>

        {/* Second identical block (follows immediately to create the seamless loop) */}
        <div className="flex shrink-0 items-center">
          {words.map((word, index) => (
            <React.Fragment key={`second-${index}`}>
              <span className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase text-zinc-950 px-8 md:px-12">
                {word}
              </span>
              <span className="text-white text-4xl md:text-5xl font-black">/</span>
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
}
