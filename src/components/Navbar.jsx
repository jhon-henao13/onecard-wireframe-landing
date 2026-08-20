// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoOnecard from '../assets/onecard-logopng.webp';

const NAV_LINKS = [
  { name: 'Soluciones', href: '#soluciones' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Implementación', href: '#implementacion' },
  { name: 'FAQ', href: '#faq' },
];

const Navbar = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Escuchar el desplazamiento vertical para cambiar la apariencia del Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 py-3 sm:py-4 px-4 sm:px-6">
      
      {/* Contenedor Flotante del Navbar */}
      <div 
        className={`max-w-7xl mx-auto px-5 sm:px-8 transition-all duration-500 rounded-2xl flex items-center justify-between ${
          isScrolled
            ? 'bg-[#00253E]/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/40 py-3'
            : 'bg-transparent border border-transparent py-2'
        }`}
      >
        {/* LOGO */}
        <a href="#" className="flex items-center group relative z-10">
          <img 
            src={logoOnecard} 
            alt="One Card Logo" 
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* ENLACES ESCRITORIO (Cápsula de cristal) */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* BOTÓN CTA ESCRITORIO */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenModal}
            className="relative inline-flex items-center justify-center bg-[#00b7eb] hover:bg-[#0097DA] text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Hablar con un asesor
          </button>
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden mt-3 max-w-7xl mx-auto bg-[#00253E]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 shadow-2xl shadow-black/50 flex flex-col gap-3 text-center"
          >
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-slate-200 hover:text-white text-base py-2.5 font-semibold border-b border-white/10 hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenModal();
              }}
              className="mt-2 bg-[#00b7eb] hover:bg-[#0097DA] text-white text-sm font-extrabold py-3.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all text-center block w-full"
            >
              Hablar con un asesor
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;