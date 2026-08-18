// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import heroRightImage from '../assets/hero-rightpng.png';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
    
    const companyLogos = ['UKG', 'Johns Hopkins', 'dyson', 'Etsy', 'Affirm', 'Tripadvisor'];

  return (
    <section className="relative min-h-screen w-full pt-[10rem] pb-[10rem] bg-hero-gradient flex items-center justify-center overflow-hidden">
      {/* Contenedor estandarizado con max-w-7xl centrado para evitar deformaciones en zoom-out */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="lg:col-span-7 space-y-6 mt-10"
        >
          <p className="text-white/90 font-light text-xl">Despensa y Combustible</p>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl !mt-4 font-extrabold !leading-[1.25] text-white">
            Monederos corporativos con <span className="text-[#00b7eb]">deducibilidad al 100%</span>
          </h1>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-lg shadow-lg max-w-xl w-full !mt-20">
            <input 
              type="email" 
              placeholder="Tu correo empresarial" 
              className="flex-grow px-6 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-onecard-accent"
            />
            <button type="submit" className="bg-onecard-sky hover:bg-onecard-sky/90 text-white font-semibold px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
              Agenda tu demo 
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </motion.div>

        {/* Área de la Imagen */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="lg:col-span-5 flex items-center justify-center relative w-full"
        >
          <img 
            src={heroRightImage} 
            alt="Monederos corporativos One Card" 
            className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

      </div>

        {/* Company Logos Section integrados en el Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-6 left-0 w-full px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto border-t border-white/10 pt-4 flex flex-col items-center justify-between gap-6">
            <p className="text-xs md:text-sm text-white/60 font-medium tracking-wide uppercase">
              + de 2,500 empresas conf&#237;an en nosotros
            </p>
            <div className="flex flex-wrap justify-between w-full items-center gap-6 md:gap-10 opacity-90 hover:opacity-100 transition-opacity">
              {companyLogos.map((logo) => (
                <span key={logo} className="text-lg md:text-xl font-bold text-white tracking-tight hover:text-white transition-colors">{logo}</span>
              ))}
            </div>
          </div>
        </motion.div>


    </section>
  );
};

export default Hero;