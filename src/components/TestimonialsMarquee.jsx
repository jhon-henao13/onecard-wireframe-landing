// src/components/TestimonialsMarquee.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Importación de las certificaciones y logos requeridos
import bestPlaceLogo from '../assets/best-place-tocode.png';
import satLogo from '../assets/hero-right/sat-icon.webp';
import cnbvLogo from '../assets/cnbv-icon-gray-png.png';

// Reseñas Reales de Google Play / Google Reseñas para Columna 1 (Scroll Hacia Arriba)
const COLUMN_1_ITEMS = [
  {
    id: 1,
    author: 'JI Art Krad',
    rating: 5,
    date: '9 de junio de 2026',
    text: 'Muy útil, eficaz y rápida aplicación de vales. Sin problemas mientras tu conexión a internet sea buena y/o estable.',
    helpfulCount: 4,
  },
  {
    id: 2,
    author: 'Gabriela Solis',
    rating: 5,
    date: '20 de agosto de 2026',
    text: 'Práctica y fácil de entender. Los movimientos tardan muy poco en reflejarse.',
    helpfulCount: 1,
  },
  {
    id: 3,
    author: 'Elizabeth Hernández',
    rating: 5,
    date: '15 de julio de 2026',
    text: 'Hasta el momento no ha tenido fallas, te avisa de tus compras, cuando la app tendrá mantenimiento 👍',
    helpfulCount: 2,
  },
  {
    id: 4,
    author: 'Tati Cortéz',
    rating: 5,
    date: '1 de agosto de 2026',
    text: 'Me encanta su interfaz y su accesibilidad, me gusta que puedo apagar mi tarjeta.',
    helpfulCount: null,
  },
];

// Reseñas Reales de Google Play / Google Reseñas para Columna 2 (Scroll Hacia Abajo)
const COLUMN_2_ITEMS = [
  {
    id: 5,
    author: 'Edgar Pérez',
    rating: 5,
    date: '9 de julio de 2026',
    text: 'Fácil acceso e interfaz intuitiva.',
    helpfulCount: null,
  },
  {
    id: 6,
    author: 'Fernando Hernandez',
    rating: 5,
    date: '9 de julio de 2026',
    text: 'Es muy fácil de activar y todo es muy claro.',
    helpfulCount: null,
  },
  {
    id: 7,
    author: 'Gladys Hernandez',
    rating: 5,
    date: '22 de junio de 2026',
    text: 'Me parece una aplicación que es excelente y la puedo usar en cualquier comercio.',
    helpfulCount: null,
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
            <span className="text-onecard-sky font-bold text-xs uppercase tracking-widest bg-onecard-sky/10 px-3 py-1 rounded-full border border-onecard-sky/20 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Reseñas Verificadas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight !leading-[1.3]">
              Usuarios felices. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-onecard-sky">
                Experiencias reales.
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              Consulta lo que opinan nuestros usuarios en Google Reseñas sobre la rapidez, usabilidad y control que ofrece One Card.
            </p>
          </div>

          {/* Bloque de Sellos / Certificaciones */}
          {/* Bloque de Sellos / Certificaciones - Dividido en 2 Secciones UI Premium */}
          <div className="pt-6 border-t border-slate-800/80 space-y-4">
            
            {/* SECCIÓN 1: Respaldado y Autorizado por el SAT */}
            <div className="group relative bg-slate-900/50 hover:bg-slate-900/80 p-4 rounded-2xl border border-slate-800 hover:border-onecard-sky/40 transition-all duration-300 backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Respaldado y Autorizado por
                </span>
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  Oficial SAT
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:border-onecard-sky/30 transition-colors">
                  <img 
                    src={satLogo} 
                    alt="SAT Autorizado" 
                    className="h-10 w-auto object-contain filter brightness-110 group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white group-hover:text-onecard-sky transition-colors">
                    Emisor Autorizado de Monederos
                  </p>
                  <p className="text-slate-400 text-[11px]">
                    Validez fiscal ante el Servicio de Administración Tributaria.
                  </p>
                </div>
              </div>
            </div>

            {/* SECCIÓN 2: Reconocimientos y Best Place to Code */}
            <div className="group relative bg-slate-900/50 hover:bg-slate-900/80 p-4 rounded-2xl border border-slate-800 hover:border-onecard-sky/40 transition-all duration-300 backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="text-amber-400">🏆</span>
                  Reconocimientos
                </span>
                <span className="text-[10px] font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-full">
                  Tech Excellence
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:border-onecard-sky/30 transition-colors">
                  <img 
                    src={bestPlaceLogo} 
                    alt="Best Place to Code" 
                    className="h-10 w-auto object-contain filter brightness-110 group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white group-hover:text-onecard-sky transition-colors">
                    Best Place to Code®
                  </p>
                  <p className="text-slate-400 text-[11px]">
                    Acreditación a organizaciones con cultura tecnológica de excelencia.
                  </p>
                </div>
              </div>
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
                  className="group relative bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-md p-5 rounded-2xl border border-slate-800 hover:border-onecard-sky/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Avatar, Nombre, Fecha e Icono Google */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-onecard-blue to-onecard-sky flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-onecard-sky/30">
                          {item.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-onecard-sky transition-colors">
                            {item.author}
                          </h4>
                          <span className="text-[11px] text-slate-400 block">{item.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                        <span className="text-[10px] text-slate-300 font-medium hidden sm:inline">Google</span>
                      </div>
                    </div>

                    {/* Estrellas 5/5 */}
                    <div className="flex items-center gap-1 mb-2.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Contenido de la Reseña */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      “{item.text}”
                    </p>
                  </div>

                  {/* Footer con Contador de "Útil" */}
                  {item.helpfulCount && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-onecard-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 11H4a2 2 0 00-2 2v6a2 2 0 002 2h3" />
                        </svg>
                        Útil para {item.helpfulCount} {item.helpfulCount === 1 ? 'persona' : 'personas'}
                      </span>
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
                  className="group relative bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-md p-5 rounded-2xl border border-slate-800 hover:border-onecard-sky/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Avatar, Nombre, Fecha e Icono Google */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-onecard-blue to-onecard-sky flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-onecard-sky/30">
                          {item.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-onecard-sky transition-colors">
                            {item.author}
                          </h4>
                          <span className="text-[11px] text-slate-400 block">{item.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                        <span className="text-[10px] text-slate-300 font-medium hidden sm:inline">Google</span>
                      </div>
                    </div>

                    {/* Estrellas 5/5 */}
                    <div className="flex items-center gap-1 mb-2.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Contenido de la Reseña */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      “{item.text}”
                    </p>
                  </div>

                  {/* Footer con Contador de "Útil" */}
                  {item.helpfulCount && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-onecard-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 11H4a2 2 0 00-2 2v6a2 2 0 002 2h3" />
                        </svg>
                        Útil para {item.helpfulCount} {item.helpfulCount === 1 ? 'persona' : 'personas'}
                      </span>
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