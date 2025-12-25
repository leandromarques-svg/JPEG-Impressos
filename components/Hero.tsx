
import React from 'react';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-24 pb-12">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-magenta opacity-[0.03] -skew-x-12 transform translate-x-1/2 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-extrabold text-black leading-[1.1] mb-8">
            Impressos, comunicação visual e <span className="text-magenta">brindes personalizados</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
            Soluções gráficas sob medida para empresas, eventos e marcas. Qualidade que destaca o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contact"
              className="px-10 py-5 bg-magenta text-white text-lg font-bold rounded-full shadow-lg hover:scale-[1.03] transition-all text-center"
            >
              Solicitar orçamento pelo WhatsApp
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-black text-white text-lg font-bold rounded-full shadow-md hover:bg-gray-900 transition-all text-center flex items-center justify-center gap-2"
            >
              Conheça nossos trabalhos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
