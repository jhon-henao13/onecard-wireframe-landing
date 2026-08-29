// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Importación del logo oficial de One Card
import logoOneCard from '../assets/onecard-logopng.webp';

// Íconos SVG para redes sociales
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#050B14] text-slate-300 pt-16 sm:pt-20 pb-8 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Resplandor inferior tenue */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-[#0097DA]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* GRID PRINCIPAL DE 4 COLUMNAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* COLUMNA 1: Logo & Dirección (span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block group">
              <img 
                src={logoOneCard} 
                alt="One Card Logo" 
                className="h-10 w-auto object-contain brightness-120 group-hover:scale-105 transition-transform" 
              />
            </a>
            
            <div className="space-y-1 text-xs text-slate-400 font-normal !leading-[2] pt-2">
              <p>Calle Paseo María Elena 1145,</p>
              <p>Ampliación Valle del Mirador,</p>
              <p>CP 66260, San Pedro Garza García, N.L.</p>
            </div>
          </div>

          {/* COLUMNA 2: Productos (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              PRODUCTOS
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors">
                  Despensa
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors">
                  Premios
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-white transition-colors">
                  Combustible
                </a>
              </li>
              <li>
                <a href="#codigo-etica" className="hover:text-white transition-colors">
                  Código de ética
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Llámanos & Contacto (span 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              LLÁMANOS
            </h4>

            {/* Servicio al cliente */}
            <div className="space-y-1.5">
              <span className="text-xs font-extrabold text-[#00b7eb] block tracking-wide">
                SERVICIO AL CLIENTE
              </span>
              <p className="text-xs text-slate-400">Tel. +52 (81) 8805 4387</p>
              <a 
                href="mailto:empresas@onecard.mx" 
                className="text-xs text-slate-400 hover:text-white transition-colors block"
              >
                empresas@onecard.mx
              </a>
            </div>

            {/* Ventas */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-extrabold text-[#00b7eb] block tracking-wide">
                VENTAS
              </span>
              <p className="text-xs text-slate-400">+52 (81) 8805 4387</p>
              <a 
                href="mailto:ventas@onecard.mx" 
                className="text-xs text-slate-400 hover:text-white transition-colors block"
              >
                ventas@onecard.mx
              </a>
            </div>
          </div>

          {/* COLUMNA 4: Redes Sociales (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              SÍGUENOS EN:
            </h4>

            <div className="flex items-center gap-2.5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-[#0097DA] hover:text-white hover:border-[#0097DA] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-[#0097DA] hover:text-white hover:border-[#0097DA] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-[#0097DA] hover:text-white hover:border-[#0097DA] transition-all duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-[#0097DA] hover:text-white hover:border-[#0097DA] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

        </div>

        {/* BARRA INFERIOR / COPYRIGHT & DERECHOS */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div className="w-full text-center sm:text-center">
            <a href="#privacidad" className="hover:text-white transition-colors">
              Aviso de privacidad
            </a>
          </div>

          <div className="w-full text-center sm:text-right text-slate-400">
            <span className="text-slate-300 font-semibold">dealbamkt</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;