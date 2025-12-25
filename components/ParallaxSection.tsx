import React from 'react';
import { INSTAGRAM_LINK } from '../constants';

const ParallaxSection: React.FC = () => {
  return (
    <section className="relative h-[450px] md:h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image com Efeito Fixo (Parallax Real) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=90&w=1920")',
          imageRendering: 'auto'
        }}
      />
      
      {/* Overlay de contraste limpo */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo Centralizado */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-8 py-3 bg-magenta text-white text-[12px] font-black uppercase tracking-[0.6em] mb-10 rounded-full shadow-2xl shadow-magenta/50">
          Portfolio em Tempo Real
        </div>
        
        <h3 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
          Veja mais do nosso <br />
          <span className="text-white border-b-8 border-magenta inline-block mt-2">trabalho no Instagram.</span>
        </h3>
        
        <p className="text-white text-xl md:text-3xl font-bold max-w-4xl mx-auto drop-shadow-lg leading-relaxed mb-10">
          Acompanhe nossos projetos diários, bastidores e as últimas tendências em comunicação visual.
        </p>
        
        <a 
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-magenta hover:text-white transition-all shadow-2xl active:scale-95"
        >
          Seguir @jpegimpressos
        </a>
      </div>

      {/* Linhas de corte limpas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200/20" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200/20" />
    </section>
  );
};

export default ParallaxSection;