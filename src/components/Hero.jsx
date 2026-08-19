// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import cardBlue from '../assets/hero-right/card-blue.webp';
import cardRed from '../assets/hero-right/card-red.webp';
import cardGreen from '../assets/hero-right/card-green.webp';
import cnbvIcon from '../assets/hero-right/cnbv-icon.webp';
import satIcon from '../assets/hero-right/sat-icon.webp';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// Palabras o frases que rotarán con animación de barrido vertical
const ROTATING_PHRASES = [
  "deducibilidad al 100%",
  "control total de gastos",
  "cero comisiones ocultas",
  "reportes en tiempo real"
];

// Dominios públicos bloqueados
const DISALLOWED_DOMAINS = [
  'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 
  'icloud.com', 'live.com', 'msn.com', 'yahoo.es', 'hotmail.es'
];

const Hero = () => {
  const companyLogos = ['UKG', 'Johns Hopkins', 'dyson', 'Etsy', 'Affirm', 'Tripadvisor'];

  // Estados del Formulario y Pop-up
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  // Intervalo para cambiar las frases con barrido vertical
  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Validación de Correo Empresarial
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@')) {
      setErrorMsg('Por favor ingresa un correo válido.');
      return;
    }

    const domain = email.split('@')[1]?.toLowerCase();

    if (DISALLOWED_DOMAINS.includes(domain)) {
      setErrorMsg('Ingresa un correo empresarial (ej. nombre@tuempresa.com).');
      return;
    }

    // Si pasa las validaciones corporativas, abrimos el Pop-up
    setIsModalOpen(true);
  };

  return (
    <section className="relative min-h-screen w-full pt-[10rem] max-[600px]:pt-2 pb-[10rem] max-[600px]:pb-24 bg-hero-gradient flex items-center justify-center overflow-hidden">
      
      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-4 max-[600px]:gap-12 items-start w-full">
        
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="lg:col-span-7 space-y-6 mt-10"
        >
          <p className="text-white/90 font-light text-xl">Despensa y Combustible</p>
          
          {/* H1 con Animación de Barrido Vertical en el span */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] !mt-4 font-bold !leading-[1.4] text-white">
            Monederos corporativos con{' '}
            <span className="inline-block relative overflow-hidden h-[1.3em] align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="block text-[#00b7eb] whitespace-nowrap"
                >
                  {ROTATING_PHRASES[textIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Form con Candado Corporativo */}
          <div className="!mt-16 max-w-xl w-full">
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-xl shadow-2xl w-full border border-white/20 relative"
            >
              <div className="flex items-center flex-grow px-3">
                {/* Icono Candado Corporativo */}
                <svg className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="Tu correo empresarial" 
                  className="w-full py-3 text-black placeholder-gray-400 focus:outline-none text-sm md:text-base"
                />
              </div>

              <button 
                type="submit" 
                className="bg-onecard-sky hover:bg-onecard-sky/90 text-white font-semibold px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 whitespace-nowrap"
              >
                Agenda tu demo 
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>

            {/* Mensaje de Error de Validación */}
            {errorMsg && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-300 text-xs md:text-sm font-medium mt-2 pl-3 flex items-center gap-1"
              >
                <span>⚠️</span> {errorMsg}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Área de la Imagen */}
        {/* Área de la Imagen - Composición Animada 3D en Cascada */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="lg:col-span-5 relative w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center select-none"
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] h-full flex items-center justify-center">

            {/* 1. Tarjeta Azul (Fondo / Despensa) */}
            <motion.img 
              src={cardBlue} 
              alt="One Card Despensa Azul" 
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [0, -12, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                x: { duration: 0.8, delay: 0.2 },
                y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.05, zIndex: 40 }}
              className="absolute top-[2%] left-[2%] w-[50%] h-auto object-contain drop-shadow-xl z-10 cursor-pointer transition-shadow"
            />

            {/* 2. Tarjeta Roja (Centro / Gasolina Premium) */}
            <motion.img 
              src={cardRed} 
              alt="One Card Combustible Roja" 
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [0, -16, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                x: { duration: 0.8, delay: 0.4 },
                y: { duration: 5.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }
              }}
              whileHover={{ scale: 1.05, zIndex: 40 }}
              className="absolute top-[20%] left-[25%] w-[50%] h-auto object-contain drop-shadow-2xl z-20 cursor-pointer transition-shadow"
            />

            {/* 3. Tarjeta Verde (Frente / Gasolina Magna) */}
            <motion.img 
              src={cardGreen} 
              alt="One Card Combustible Verde" 
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [0, -10, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                x: { duration: 0.8, delay: 0.6 },
                y: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }
              }}
              whileHover={{ scale: 1.05, zIndex: 40 }}
              className="absolute top-[35%] left-[50%] w-[50%] h-auto object-contain drop-shadow-2xl z-30 cursor-pointer transition-shadow"
            />

            {/* 4. Icono CNBV */}
            <motion.img 
              src={cnbvIcon} 
              alt="Sello CNBV" 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.8 },
                scale: { duration: 0.6, delay: 0.8 },
                y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 }
              }}
              className="absolute top-[3%] right-[33%] w-[13%] max-w-[55px] h-auto object-contain drop-shadow-lg z-20 pointer-events-none"
            />

            {/* 5. Icono SAT */}
            <motion.img 
              src={satIcon} 
              alt="Sello SAT" 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0]
              }}
              transition={{
                opacity: { duration: 0.6, delay: 1 },
                scale: { duration: 0.6, delay: 1 },
                y: { duration: 4.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.7 }
              }}
              className="absolute top-[16%] right-[10%] w-[13%] max-w-[55px] h-auto object-contain drop-shadow-lg z-20 pointer-events-none"
            />

          </div>
        </motion.div>

      </div>

      {/* Logos Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-6 left-0 w-full px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-4 flex flex-col items-center justify-between gap-6">
          <p className="text-xs md:text-sm text-white/60 font-medium tracking-wide uppercase">
            + de 2,500 empresas confían en nosotros
          </p>
          <div className="flex flex-wrap justify-between w-full items-center gap-6 md:gap-10 opacity-90 hover:opacity-100 transition-opacity">
            {companyLogos.map((logo) => (
              <span key={logo} className="text-lg md:text-xl font-bold text-white tracking-tight hover:text-white transition-colors">{logo}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* POP-UP MODAL (Formulario Extendido) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl text-gray-800 relative border border-gray-100"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>

              <div className="text-center space-y-2 mb-6">
                <span className="bg-sky-100 text-[#0097DA] text-xs font-semibold px-3 py-1 rounded-full uppercase">Casi listo</span>
                <h3 className="text-2xl font-bold text-gray-900">Completa tu Solicitud</h3>
                <p className="text-sm text-gray-500">Hemos verificado tu correo corporativo: <strong className="text-gray-700">{email}</strong></p>
              </div>

              {/* Formulario Secundario (Pronto) */}
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Demo solicitada exitosamente'); setIsModalOpen(false); }}>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Nombre Completo</label>
                  <input type="text" required placeholder="Ej. Carlos Mendoza" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0097DA] text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Teléfono Móvil</label>
                  <input type="tel" required placeholder="+57 300 000 0000" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0097DA] text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Número de Empleados</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0097DA] text-sm text-gray-700">
                    <option>1 - 10 empleados</option>
                    <option>11 - 50 empleados</option>
                    <option>51 - 200 empleados</option>
                    <option>Más de 200 empleados</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-[#0097DA] hover:bg-[#0097DA]/90 text-white font-semibold py-3 rounded-lg shadow-lg transition-all mt-2">
                  Confirmar y Agendar
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;