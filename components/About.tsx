import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    "Qualidade de impressão impecável",
    "Atendimento personalizado",
    "Agilidade em todos os processos",
    "Soluções sob medida para sua marca"
  ];

  return (
    <section id="about" className="py-24 bg-white border-t border-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Lado da Imagem */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              {/* Imagem de alta qualidade atualizada conforme solicitação */}
              <img 
                src="https://i.ibb.co/wFLTz1fY/freepik-candid-i-with-natural-textures-and-highly-realisti-6035.jpg" 
                alt="Produção Gráfica JPEG Impressos" 
                className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02]"
              />
              {/* Detalhe decorativo atrás da imagem */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-magenta rounded-3xl -z-10 opacity-10 animate-pulse" />
            </div>
          </div>

          {/* Lado do Conteúdo */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-black leading-tight tracking-tight">
              Sobre a <span className="text-black">JPEG Impressos</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              Somos especialistas em transformar sua identidade visual em materiais tangíveis de alta qualidade. Na JPEG Impressos, unimos tecnologia de ponta a um atendimento próximo e ágil, garantindo que cada projeto seja entregue com perfeição e profissionalismo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-magenta flex items-center justify-center transition-colors group-hover:bg-magenta">
                    <Check className="text-magenta group-hover:text-white w-5 h-5 transition-colors" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-black text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;