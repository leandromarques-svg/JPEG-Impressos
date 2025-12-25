
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, ChevronDown } from 'lucide-react';
import { SERVICES } from '../constants';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    description: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.service) {
      alert("Por favor, selecione um serviço.");
      return;
    }
    const phone = "5511965817239";
    const text = `Olá! Meu nome é ${formData.name}. Gostaria de um orçamento para: ${formData.service}.\n\nDescrição do pedido: ${formData.description}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectService = (serviceTitle: string) => {
    setFormData({ ...formData, service: serviceTitle });
    setIsDropdownOpen(false);
  };

  const inputClasses = "w-full bg-gray-50 border border-gray-200 rounded-full py-4 px-8 text-black placeholder-gray-400 focus:outline-none focus:border-magenta focus:bg-white transition-all duration-300 shadow-sm";

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row shadow-[0_30px_100px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden border border-gray-100">
          
          {/* Lado Esquerdo - Info (Preto) */}
          <div className="lg:w-5/12 bg-black p-10 md:p-20 flex flex-col justify-center relative">
            {/* Elemento decorativo magenta */}
            <div className="absolute top-0 left-0 w-2 h-full bg-magenta" />
            
            <span className="inline-block self-start px-5 py-2 bg-magenta text-white text-xs font-black uppercase tracking-widest rounded-full mb-8 shadow-lg shadow-magenta/20">
              Contato Direto
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tighter">
              Dê vida ao <br />
              <span className="text-magenta">seu projeto.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Fale agora com nossa equipe. Estamos prontos para oferecer a melhor solução gráfica para sua marca.
            </p>
            
            <div className="flex items-center gap-5 text-white font-bold text-xl group">
              <div className="p-4 bg-magenta/10 rounded-full group-hover:bg-magenta transition-all duration-500">
                 <MessageCircle className="text-magenta group-hover:text-white" size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 uppercase tracking-widest font-black">WhatsApp</span>
                <span>(11) 96581-7239</span>
              </div>
            </div>
          </div>

          {/* Lado Direito - Formulário (Branco) */}
          <div className="lg:w-7/12 bg-white p-10 md:p-20">
            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto lg:mx-0">
              <div>
                <label className="block text-black text-xs font-black uppercase tracking-[0.2em] mb-4 ml-6">Qual seu nome?</label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Custom Dropdown Adaptado para Fundo Branco */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-black text-xs font-black uppercase tracking-[0.2em] mb-4 ml-6">O que você precisa?</label>
                <div 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`${inputClasses} flex justify-between items-center cursor-pointer select-none group ${isDropdownOpen ? 'border-magenta ring-2 ring-magenta/10' : ''}`}
                >
                  <span className={`font-bold ${formData.service ? "text-black" : "text-gray-400"}`}>
                    {formData.service || "Escolha um serviço..."}
                  </span>
                  <ChevronDown size={22} className={`text-gray-400 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180 text-magenta' : 'group-hover:text-black'}`} />
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-50 mt-4 w-full bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-fade-in ring-1 ring-black/5">
                    <div className="max-h-64 overflow-y-auto custom-scrollbar">
                      {SERVICES.map((s) => (
                        <div 
                          key={s.id}
                          onClick={() => selectService(s.title)}
                          className="px-8 py-5 text-gray-800 hover:bg-magenta hover:text-white cursor-pointer transition-all duration-200 border-b border-gray-50 last:border-b-0 font-bold flex items-center justify-between group"
                        >
                          {s.title}
                          <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                      <div 
                        onClick={() => selectService("Outro")}
                        className="px-8 py-5 text-gray-800 hover:bg-magenta hover:text-white cursor-pointer transition-all duration-200 font-bold flex items-center justify-between group"
                      >
                        Outro serviço
                        <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-black text-xs font-black uppercase tracking-[0.2em] mb-4 ml-6">Descrição da Solicitação</label>
                <textarea
                  required
                  name="description"
                  rows={4}
                  placeholder="Conte-nos os detalhes (quantidade, medidas, etc)..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-[2rem] py-5 px-8 text-black placeholder-gray-400 focus:outline-none focus:border-magenta focus:bg-white transition-all duration-300 shadow-sm resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-6 bg-magenta text-white text-xl font-black rounded-full shadow-2xl shadow-magenta/30 hover:scale-[1.02] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-4 group"
              >
                SOLICITAR VIA WHATSAPP
                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
