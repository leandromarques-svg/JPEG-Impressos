import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  // Configuração de estilos por categoria: contorno colorido, texto colorido e fundo suave
  const categoryStyles: Record<string, { border: string, text: string, bg: string, shadow: string }> = {
    prints: { 
      border: 'border-magenta', 
      text: 'text-magenta',
      bg: 'bg-magenta/[0.03]',
      shadow: 'shadow-magenta/10'
    },
    visual: { 
      border: 'border-[#009fe3]', 
      text: 'text-[#009fe3]',
      bg: 'bg-[#009fe3]/[0.03]',
      shadow: 'shadow-[#009fe3]/10'
    },
    gifts: { 
      border: 'border-[#FFD700]', 
      text: 'text-[#FFD700]',
      bg: 'bg-[#FFD700]/[0.03]',
      shadow: 'shadow-[#FFD700]/10'
    },
    packaging: { 
      border: 'border-black', 
      text: 'text-black',
      bg: 'bg-black/[0.03]',
      shadow: 'shadow-black/10'
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-black uppercase tracking-tight">O Que Fazemos</h2>
        <div className="w-20 h-1.5 bg-magenta mx-auto mb-16 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const style = categoryStyles[service.id] || categoryStyles.packaging;
            
            return (
              <div 
                key={service.id} 
                className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 group"
              >
                {/* Icon Container - Agora com contorno colorido e fundo suave */}
                <div className={`w-24 h-24 ${style.bg} ${style.border} border-2 ${style.text} rounded-3xl flex items-center justify-center mb-10 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${style.shadow}`}>
                  <div className="transform transition-transform duration-500 group-hover:scale-110">
                    {React.cloneElement(service.icon as React.ReactElement, { 
                      strokeWidth: 1.5,
                      className: "w-10 h-10"
                    })}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-5 text-black tracking-tight group-hover:text-magenta transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium text-lg">
                  {service.description}
                </p>
                
                {/* O link 'Saiba Mais' foi removido conforme solicitado */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;