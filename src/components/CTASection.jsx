// src/components/CTASection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Importación de la ilustración de la mano
import handImg from '../assets/hand-blue-beforefooter.png';

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 bg-[#00629b] text-white relative overflow-hidden">
      
      {/* Resplandor decorativo de fondo */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00b7eb]/20 blur-[50px] rounded-full pointer-events-none" />

      <div className="max-w-8xl mx-auto relative z-10 bg-[#005C94]/60 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-2 lg:gap-4 overflow-hidden">
        
        {/* TEXTO Y BOTÓN (Columna Izquierda) */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8 max-w-3xl text-center md:text-left z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight !leading-[1.4]">
            ¿Listo para tomar control <br className="hidden sm:inline" />
            de los gastos de tu empresa?
          </h2>

          <div className="!mt-14">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-[#00b7eb] hover:bg-[#0097DA] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              Agenda tu demo
            </a>
          </div>
        </motion.div>

        {/* ILUSTRACIÓN DE LA MANO (Columna Derecha) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0 relative w-full md:w-auto flex justify-center md:justify-end"
        >
          {/* Animación de leve levitación/flotado sutil */}
          <motion.img 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={handImg} 
            alt="Tomar control de tus gastos" 
            className="w-48 sm:w-60 md:w-64 lg:w-80 h-auto object-contain drop-shadow-2xl brightness-110"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;