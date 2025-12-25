import React from 'react';
import { Printer, Monitor, Gift, Box } from 'lucide-react';
import { Service, GalleryItem } from './types';

export const WHATSAPP_LINK = "https://wa.me/5511965817239";
export const INSTAGRAM_LINK = "https://www.instagram.com/jpegimpressos/";
export const FACEBOOK_LINK = "https://www.facebook.com/jpegimpressos/";
export const PHONE_DISPLAY = "(11) 96581-7239";

export const SERVICES: Service[] = [
  {
    id: 'prints',
    title: 'Impressos Gráficos',
    description: 'Cartões, folders, catálogos e materiais corporativos de alta qualidade.',
    icon: <Printer className="w-8 h-8" />
  },
  {
    id: 'visual',
    title: 'Comunicação Visual',
    description: 'Banners, adesivos, fachadas e sinalização que destacam sua marca.',
    icon: <Monitor className="w-8 h-8" />
  },
  {
    id: 'gifts',
    title: 'Brindes Personalizados',
    description: 'Itens promocionais e corporativos pensados para encantar seus clientes.',
    icon: <Gift className="w-8 h-8" />
  },
  {
    id: 'packaging',
    title: 'Embalagens Personalizadas',
    description: 'Caixas, sacolas, rótulos e etiquetas com acabamento impecável.',
    icon: <Box className="w-8 h-8" />
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Impressão Profissional',
    category: 'Impressos',
    imageUrl: 'https://i.ibb.co/8gkkMq7L/Panfleto.jpg',
    description: 'Nossa impressão profissional utiliza tecnologia de ponta para garantir cores vibrantes e nitidez excepcional. Utilizamos papéis especiais e acabamentos premium para transformar seus materiais institucionais em ferramentas de venda.'
  },
  {
    id: 2,
    title: 'Banner Promocional',
    category: 'Comunicação Visual',
    imageUrl: 'https://i.ibb.co/nqTPM7WM/freepik-a-hyperrealistic-photograph-capturing-recreate-ban-7589.jpg',
    description: 'Banners de alto impacto produzidos com lona premium e impressão digital de alta resolução. Resistentes e vibrantes, ideais para eventos e sinalização externa com máxima durabilidade.'
  },
  {
    id: 3,
    title: 'Fachada Comercial',
    category: 'Comunicação Visual',
    imageUrl: 'https://i.ibb.co/twgjYGXr/Luar-Fachada.jpg',
    description: 'Projetos completos de fachada em ACM e letra caixa. Transformamos a entrada do seu estabelecimento em um ponto de referência visual, transmitindo credibilidade e modernidade.'
  },
  {
    id: 4,
    title: 'Personalização',
    category: 'Comunicação Visual',
    imageUrl: 'https://i.ibb.co/Nd7bLy1s/freepik-close-overhead-studioshot-of-a-grid-of-laserprinte-7588.jpg',
    description: 'Soluções avançadas em personalização que incluem adesivos recortados eletronicamente com precisão milimétrica, além de serviços especializados de corte e gravação a laser em diversos materiais. Perfeito para brindes exclusivos, sinalização técnica e detalhes que exigem acabamento superior.'
  },
  {
    id: 5,
    title: 'Itens Personalizados',
    category: 'Brindes',
    imageUrl: 'https://i.ibb.co/PvXkfkzq/freepik-a-hyperrealistic-photograph-capturing-studioshot-p-7583.jpg',
    description: 'Brindes que encantam e fidelizam. Oferecemos uma linha completa de itens personalizados, desde as tradicionais canecas de cerâmica até squeezes térmicos, chaveiros resinados, bonés bordados e muito mais. Ideal para eventos corporativos e presentes exclusivos com a sua marca.'
  },
  {
    id: 6,
    title: 'Adesivagem',
    category: 'Envelopamento',
    imageUrl: 'https://i.ibb.co/qFRVZSTm/freepik-a-hyperrealistic-photograph-capturing-professional-7585.jpg',
    description: 'Ressignifique seus móveis e eletrodomésticos com estilo e personalidade. Nosso serviço de envelopamento permite transformar itens antigos em peças modernas que imprimem a marca desejada, com acabamento impecável e alta durabilidade.'
  }
];