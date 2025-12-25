import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { INSTAGRAM_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#about' },
    { name: 'O Que Fazemos', href: '#services' },
    { name: 'Portfolio', href: '#gallery' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navBg = isScrolled 
    ? 'bg-white/98 shadow-[0_10px_40px_rgba(0,0,0,0.06)] py-3 backdrop-blur-xl border-b border-gray-100' 
    : 'bg-white/95 backdrop-blur-md py-5 shadow-sm';
  
  const textColor = 'text-gray-900';
  const buttonBg = 'bg-black text-white';
  const menuIconColor = 'text-black';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
        <a href="#" className="flex items-center transition-transform duration-300 hover:scale-[1.01]">
          <Logo className="h-12 md:h-16 lg:h-20" isScrolled={isScrolled} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-black text-[11px] uppercase tracking-[0.25em] transition-all duration-300 hover:scale-105 ${textColor} hover:text-magenta`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-10 py-4 font-black text-xs uppercase tracking-[0.2em] rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ${buttonBg} hover:bg-magenta hover:shadow-magenta/20`}
          >
            Orçamento Express
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-3 transition-colors duration-300 ${menuIconColor}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'}`}>
        <div className="flex flex-col p-10 gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-black text-gray-900 uppercase tracking-tighter hover:text-magenta transition-colors"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full text-center px-6 py-6 bg-magenta text-white font-black text-xl rounded-full shadow-xl"
            onClick={handleLinkClick}
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;