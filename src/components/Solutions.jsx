// src/components/Solutions.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Importación de imágenes requeridas
import cardGreen from '../assets/hero-right/card-green.png';
import cardRed from '../assets/hero-right/card-red.png';
import cardBlack from '../assets/card-black.png';
import cardBlue from '../assets/hero-right/card-blue.png';
import cardBlueBack from '../assets/card-blue-back.png';

// Icono personalizado para las viñetas (doble check/spark premium)
const FeatureIcon = () => (
  <div className="flex-shrink-0 w-6 h-6 rounded-md bg-sky-100/80 flex items-center justify-center text-[#0097DA] mt-0.5 shadow-sm">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Solutions = () => {
  return (
    <section className="bg-white text-slate-800 py-20 lg:py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28">
        
        {/* Encabezado de la Sección */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-5xl mx-auto space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#005C94] tracking-tight">
            La solución que tu organización necesita
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-bold">
            Ya sea que busques optimizar la carga fiscal de tu nómina o tomar el control absoluto del consumo de gasolina de tu flotilla, tenemos el monedero perfecto.
          </p>
        </motion.div>

        {/* ================= BLOQUE 1: COMBUSTIBLE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Izquierda: Tarjetas de Combustible + CTA */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-6 flex flex-col items-center justify-center space-y-8"
          >
            {/* Contenedor de las 3 tarjetas side-by-side */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 w-full">
              {[
                { img: cardGreen, alt: "Gasolina Magna" },
                { img: cardRed, alt: "Gasolina Premium" },
                { img: cardBlack, alt: "Diesel" }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-1/3 max-w-[170px]"
                >
                  <img 
                    src={card.img} 
                    alt={card.alt} 
                    className="w-full h-auto object-contain drop-shadow-xl hover:drop-shadow-2xl transition-all"
                  />
                </motion.div>
              ))}
            </div>

            {/* Botón CTA Combustible */}
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#00b7eb] hover:bg-[#0097DA] text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer"
            >
              Agenda tu demo
            </motion.button>
          </motion.div>

          {/* Derecha: Puntos de Valor Combustible */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-6 space-y-6 lg:pl-6"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0097DA] uppercase">
                Combustible One Card
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#00629b] mt-1">
                Control de gasolina y deducibilidad al 100%
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FeatureIcon />
                <p className="text-slate-600 text-sm sm:text-base leading-snug">
                  <strong className="text-slate-600 font-semibold">Una factura mensual (CFDI):</strong> Consolida todas tus cargas y acredita IVA sin juntar tickets físicos.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <FeatureIcon />
                <p className="text-slate-600 text-sm sm:text-base leading-snug">
                  <strong className="text-slate-600 font-semibold">Red abierta VISA:</strong> Carga en cualquier gasolinera del país sin desviarte de tu ruta.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <FeatureIcon />
                <p className="text-slate-600 text-sm sm:text-base leading-snug">
                  <strong className="text-slate-600 font-semibold">Control parametrizable:</strong> Define límites por tarjeta, vehículo, horario, tipo de combustible y kilometraje.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <FeatureIcon />
                <p className="text-slate-600 text-sm sm:text-base leading-snug">
                  <strong className="text-slate-600 font-semibold">Cero fraudes:</strong> Elimina el efectivo, evita fugas de dinero y frena compras no autorizadas.
                </p>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* ================= BLOQUE 2: DESPENSA ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center pt-2">
          
          {/* Izquierda: Puntos de Valor Despensa */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7 space-y-6 lg:pr-6 order-2 lg:order-1"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0097DA] uppercase">
                Despensa One Card
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#00629b] mt-1">
                El beneficio mejor percibido por tus colaboradores
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FeatureIcon />
                <p className="text-slate-600 text-sm sm:text-base leading-snug">
                  <strong className="text-slate-600 font-semibold">Ahorro Fiscal:</strong> Deducible hasta 53% en ISR y exento de cuotas IMSS e INFONAVIT.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <FeatureIcon />
                <p className="text-slate-600 text-sm sm:text-base leading-snug">
                  <strong className="text-slate-600 font-semibold">Aceptación Nacional VISA:</strong> Válida en supermercados, autoservicios y abarrotes de todo México.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <FeatureIcon />
                <p className="text-slate-600 text-sm sm:text-base leading-snug">
                  <strong className="text-slate-600 font-semibold">Cortesía One Card:</strong> Ponemos la diferencia de hasta $2 MXN si el saldo en caja no alcanza.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <FeatureIcon />
                <p className="text-slate-600 text-sm sm:text-base leading-snug">
                  <strong className="text-slate-600 font-semibold">Retención de Talento:</strong> Reduce la rotación laboral un 30% fortaleciendo tu previsión social.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Derecha: Tarjetas de Despensa + CTA */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col items-center justify-center space-y-8 order-1 lg:order-2"
          >
            {/* Contenedor de Tarjeta Frente + Reverso */}
            <div className="flex items-end justify-start gap-1 sm:gap-2 w-full">
              <motion.div 
                whileHover={{ y: -8, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-[40%] max-w-[220px]"
              >
                <img 
                  src={cardBlue} 
                  alt="Despensa One Card Frente" 
                  className="w-full h-auto object-contain drop-shadow-xl hover:drop-shadow-2xl transition-all"
                />
              </motion.div>

              <motion.div 
                whileHover={{ y: -8, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-[60%] max-w-[300px]"
              >
                <img 
                  src={cardBlueBack} 
                  alt="Despensa One Card Reverso" 
                  className="w-full h-auto object-contain drop-shadow-xl hover:drop-shadow-2xl transition-all"
                />
              </motion.div>
            </div>

            {/* Botón CTA Despensa */}
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#00b7eb] hover:bg-[#0097DA] text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer"
            >
              Agenda tu demo
            </motion.button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Solutions;