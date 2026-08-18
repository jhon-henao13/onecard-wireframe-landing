// src/components/Navbar.jsx
import React from 'react';
import logoOnecard from '../assets/onecard-logopng.png';

const Navbar = () => {
  return (
    <nav className="fixed top-3 left-0 right-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
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

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Soluciones', 'Beneficios', 'Implementación', 'FAQ'].map((link) => (
            <a key={link} href="#" className="text-white hover:text-white/80 transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-[#00b7eb] hover:bg-[#00b7eb]/90 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors">
          Hablar con un asesor
        </button>
      </div>
    </nav>
  );
};

export default Navbar;