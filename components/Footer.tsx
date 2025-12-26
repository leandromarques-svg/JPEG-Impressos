import React from 'react';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { INSTAGRAM_LINK, FACEBOOK_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1 flex flex-col items-start">
            <div className="mb-8 scale-110 origin-left h-16">
              <Logo className="h-full w-auto" isScrolled={false} />
            </div>
            <p className="text-gray-600 mb-8 font-medium leading-relaxed italic max-w-xs">
              “Soluções gráficas modernas que transformam e dão vida à sua marca com excelência.”
            </p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 text-black hover:bg-magenta hover:text-white rounded-full transition-all shadow-sm">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 text-black hover:bg-magenta hover:text-white rounded-full transition-all shadow-sm">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-black">Explorar</h4>
            <ul className="space-y-4 text-gray-500 font-bold uppercase text-xs tracking-widest">
              <li><a href="#" className="hover:text-magenta transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-magenta transition-colors">A Empresa</a></li>
              <li><a href="#services" className="hover:text-magenta transition-colors">Serviços</a></li>
              <li><a href="#gallery" className="hover:text-magenta transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-black">Contato</h4>
            <ul className="space-y-6 text-gray-600 font-bold">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-magenta/5 rounded-full group-hover:bg-magenta transition-all">
                    <Phone className="w-5 h-5 text-magenta group-hover:text-white" />
                  </div>
                  <span className="group-hover:text-magenta transition-colors text-sm">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-3 bg-magenta/5 rounded-full">
                  <MapPin className="w-5 h-5 text-magenta" />
                </div>
                <span className="text-sm">Praça Nove de Julho, 108 - centro - Guararema-SP - CEP 08900-000</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-black">Orçamentos</h4>
            <p className="text-gray-500 mb-8 leading-relaxed font-medium">
              Precisando de agilidade e qualidade superior? Nossa equipe atende em tempo real.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-black text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-magenta transition-all shadow-xl">
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 font-bold text-[10px] uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} JPEG IMPRESSOS DIGITAL. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex items-center gap-6">
            <span className="text-magenta">PREMIUM PRINT SOLUTIONS</span>
            <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
            <span className="hover:text-black cursor-pointer transition-colors">GUARAREMA • SP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;