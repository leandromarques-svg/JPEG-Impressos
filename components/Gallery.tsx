import React, { useState } from 'react';
import { GALLERY_ITEMS, INSTAGRAM_LINK } from '../constants';
import { Instagram, Maximize2, X } from 'lucide-react';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-magenta font-black tracking-[0.3em] uppercase text-xs">Portfolio Visual</span>
          <h2 className="text-4xl md:text-6xl font-black text-black mt-4 mb-6 tracking-tighter">Nosso Trabalho</h2>
          <div className="w-16 h-1.5 bg-magenta mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-[2rem] aspect-[4/5] shadow-xl bg-gray-100 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                style={{ imageRendering: 'high-quality' }}
                loading="lazy"
              />
              
              {/* Gradiente de Profundidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Overlay de Conteúdo */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-magenta text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                  {item.category}
                </div>
                <h3 className="text-white text-2xl font-black mb-6 leading-tight">{item.title}</h3>
                
                <button 
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-magenta hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(item);
                  }}
                >
                  <Maximize2 size={16} />
                  Ver Detalhes
                </button>
              </div>
              
              {/* Borda de Alta Definição no Hover */}
              <div className="absolute inset-0 border-[8px] border-white/10 rounded-[2rem] pointer-events-none group-hover:border-magenta/20 transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-10 font-bold text-lg">Gostou do nosso trabalho? Veja muito mais em nosso Instagram!</p>
          <a 
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-5 border-4 border-black text-black font-black uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all duration-500 group shadow-2xl active:scale-95"
          >
            <Instagram className="group-hover:text-magenta transition-colors w-6 h-6" />
            Explorar Instagram
          </a>
        </div>
      </div>

      {/* Modal de Detalhes - Estilo Premium */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-[3rem] overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row relative shadow-[0_40px_100px_rgba(0,0,0,0.5)] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 z-10 p-3 bg-gray-100 hover:bg-magenta hover:text-white rounded-full transition-all text-black shadow-lg"
            >
              <X size={24} />
            </button>

            {/* Imagem no Modal */}
            <div className="lg:w-3/5 h-72 lg:h-auto overflow-hidden">
              <img 
                src={selectedItem.imageUrl} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
                style={{ imageRendering: 'high-quality' }}
              />
            </div>

            {/* Texto no Modal */}
            <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center bg-white">
              <span className="text-magenta font-black tracking-[0.2em] uppercase text-xs mb-4">
                {selectedItem.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-black mb-8 leading-tight tracking-tighter">
                {selectedItem.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium mb-12">
                {selectedItem.description}
              </p>
              
              <div className="mt-auto">
                <a 
                  href="#contact" 
                  onClick={closeModal}
                  className="w-full inline-flex items-center justify-center px-10 py-5 bg-black text-white font-black uppercase tracking-widest rounded-full hover:bg-magenta transition-all shadow-xl active:scale-95"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;