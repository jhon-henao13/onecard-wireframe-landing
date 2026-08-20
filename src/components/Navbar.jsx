// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoOnecard from '../assets/onecard-logopng.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-3 left-0 right-0 w-full z-50 bg-transparent px-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between bg-transparent rounded-2xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center">
            <img 
              src={logoOnecard} 
              alt="One Card Logo" 
              className="h-10 w-auto object-contain" 
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Soluciones', 'Beneficios', 'Implementación', 'FAQ'].map((link) => (
            <a key={link} href="#" className="text-white hover:text-white/80 transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-[#00b7eb] hover:bg-[#00b7eb]/90 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]">
          Hablar con un asesor
        </button>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none p-1"
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-7xl mx-auto bg-[#004f7c]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 text-center"
          >
            {['Soluciones', 'Beneficios', 'Implementación', 'FAQ'].map((link) => (
              <a 
                key={link} 
                href="#" 
                onClick={() => setIsOpen(false)} 
                className="text-white/90 hover:text-white text-lg py-2 font-medium border-b border-white/5"
              >
                {link}
              </a>
            ))}
            <button className="bg-[#00b7eb] hover:bg-[#00b7eb]/90 text-white text-sm font-semibold py-3 rounded-lg transition-colors mt-2">
              Hablar con un asesor
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;