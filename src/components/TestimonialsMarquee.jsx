// src/components/TestimonialsMarquee.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Importación de las certificaciones y logos requeridos
import bestPlaceLogo from '../assets/best-place-tocode.png';
import satLogo from '../assets/sat-blue.png';
import cnbvLogo from '../assets/cnbv-icon-gray-png.png';

// Casos de éxito para Columna 1 (Scroll Hacia Arriba)
const COLUMN_1_ITEMS = [
  {
    id: 1,
    type: 'metric',
    value: '3-5 horas',
    subtitle: 'de tiempo administrativo ahorrado por semana.',
    company: 'Logística Express MX',
  },
  {
    id: 2,
    type: 'quote',
    text: '“Los colaboradores aman la app y la tarjeta. Ahora las comprobaciones de viáticos toman segundos en lugar de días.”',
    author: 'Karla Mendoza',
    role: 'Gerente de Recursos Humanos',
    company: 'Grupo Industrial Norte',
  },
  {
    id: 3,
    type: 'metric',
    value: '98%',
    subtitle: 'de reducción en pérdida de facturas o tickets no deducibles.',
    company: 'Transportes del Valle',
  },
  {
    id: 4,
    type: 'quote',
    text: '“La eliminación de procesos manuales nos permitió escalar la flotilla a más de 120 unidades sin contratar personal extra.”',
    author: 'Alejandro Torres',
    role: 'Director de Operaciones',
    company: 'Distribuidora Mexicana',
  },
];

// Casos de éxito para Columna 2 (Scroll Hacia Abajo)
const COLUMN_2_ITEMS = [
  {
    id: 5,
    type: 'metric',
    value: '$120K MXN',
    subtitle: 'ahorro anual promedio por optimización fiscal y deducción de ISR.',
    company: 'Constructora Alfa',
  },
  {
    id: 6,
    type: 'quote',
    text: '“Si buscas un programa de beneficios e incentivos realmente eficiente para tu equipo, One Card es el camino.”',
    author: 'Mateo Sanabria',
    role: 'Senior Finance Manager',
    company: 'Tech Solutions MX',
  },
  {
    id: 7,
    type: 'metric',
    value: '90%+',
    subtitle: 'tasa de adopción activa por parte de choferes y personal de campo.',
    company: 'Red Logística Sur',
  },
  {
    id: 8,
    type: 'quote',
    text: '“Garantiza un control impecable sobre los límites de consumo y dispersión 24/7 sin sorpresas a fin de mes.”',
    author: 'Lucía Fernández',
    role: 'CFO',
    company: 'Retail Corp',
  },
];

const TestimonialsMarquee = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-onecard-dark text-white relative overflow-hidden">
      
      {/* Resplandor sutil de fondo */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-onecard-sky/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-onecard-blue/20 rounded-full blur-[140px] pointer-events-none" />

      {/* CSS para la animación de carrusel infinito vertical */}
      <style>{`
        @keyframes marqueeUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marqueeDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-marquee-up {
          animation: marqueeUp 32s linear infinite;
        }
        .animate-marquee-down {
          animation: marqueeDown 32s linear infinite;
        }
        .marquee-container:hover .animate-marquee-up,
        .marquee-container:hover .animate-marquee-down {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA: Encabezados y Certificaciones/Logos */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-4">
            <span className="text-onecard-sky font-bold text-xs uppercase tracking-widest bg-onecard-sky/10 px-3 py-1 rounded-full border border-onecard-sky/20">
              Casos de Éxito
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight !leading-[1.3]">
              Equipos felices. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-onecard-sky">
                Resultados reales.
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              Descubre cómo hemos ayudado a más de 2,500 organizaciones a eliminar pérdidas de dinero y mejorar la satisfacción laboral.
            </p>
          </div>

          {/* Bloque de Sellos / Certificaciones */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Respaldado y Autorizado Por:
            </p>
            <div className="flex flex-wrap items-center gap-6 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
              <img 
                src={bestPlaceLogo} 
                alt="Best Place to Code" 
                className="h-20 w-auto object-contain brightness-110 hover:scale-105 transition-transform" 
              />
              <img 
                src={satLogo} 
                alt="SAT Autorizado" 
                className="h-20 w-auto object-contain brightness-110 hover:scale-105 transition-transform" 
              />
              <img 
                src={cnbvLogo} 
                alt="Regulado CNBV" 
                className="h-20 w-auto object-contain brightness-110 hover:scale-105 transition-transform" 
              />
            </div>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: Carrusel Infinito Doble (Up/Down) */}
        <div className="lg:col-span-7 h-[540px] sm:h-[600px] overflow-hidden relative marquee-container rounded-3xl">
          
          {/* Difuminados de degradado superior e inferior para integración limpia */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-onecard-dark to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-onecard-dark to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            
            {/* Sub-Columna 1: Scroll Hacia Arriba */}
            <div className="flex flex-col gap-4 animate-marquee-up">
              {[...COLUMN_1_ITEMS, ...COLUMN_1_ITEMS].map((item, idx) => (
                <div 
                  key={`col1-${idx}`}
                  className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-onecard-sky/50 transition-all duration-300 shadow-xl group"
                >
                  <p className="text-xs font-semibold text-onecard-sky mb-2">{item.company}</p>
                  {item.type === 'metric' ? (
                    <div>
                      <span className="text-3xl font-black text-white block tracking-tight group-hover:text-onecard-accent transition-colors">
                        {item.value}
                      </span>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                        {item.text}
                      </p>
                      <div>
                        <span className="text-xs font-bold text-white block">{item.author}</span>
                        <span className="text-[11px] text-slate-400">{item.role}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sub-Columna 2: Scroll Hacia Abajo */}
            <div className="hidden sm:flex flex-col gap-4 animate-marquee-down">
              {[...COLUMN_2_ITEMS, ...COLUMN_2_ITEMS].map((item, idx) => (
                <div 
                  key={`col2-${idx}`}
                  className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-onecard-sky/50 transition-all duration-300 shadow-xl group"
                >
                  <p className="text-xs font-semibold text-onecard-sky mb-2">{item.company}</p>
                  {item.type === 'metric' ? (
                    <div>
                      <span className="text-3xl font-black text-white block tracking-tight group-hover:text-onecard-accent transition-colors">
                        {item.value}
                      </span>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                        {item.text}
                      </p>
                      <div>
                        <span className="text-xs font-bold text-white block">{item.author}</span>
                        <span className="text-[11px] text-slate-400">{item.role}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsMarquee;