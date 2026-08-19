// src/components/ComparisonTable.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Importación del logo de One Card
import onecardLogo from '../assets/onecard-logo-recortado.png';

// Datos de la tabla comparativa
const COMPARISON_DATA = [
  {
    feature: "Atención al Cliente",
    traditional: "Call centers con bots e interminables menús",
    oneCard: "Soporte Humano Personalizado 24/7/365",
  },
  {
    feature: "Horarios de Dispersión",
    traditional: "Rígidos, solo en días/horas hábiles bancarios",
    oneCard: "Dispersión Inmediata 24/7/365 (Sin ventanas)",
  },
  {
    feature: "Aceptación de Red",
    traditional: "Redes cerradas o restringidas por convenio",
    oneCard: "Red Abierta Nacional Aceptada por VISA",
  },
  {
    feature: "Costo de Primera Emisión",
    traditional: "Cobro regular por tarjeta emitida",
    oneCard: "$0 MXN en Primera Emisión (Al migrar con nosotros)",
  },
  {
    feature: "Cargos Ocultos",
    traditional: "Comisiones sorpresas en facturación",
    oneCard: "Transparencia Total Sin Costos Ocultos",
  },
  {
    feature: "Cortesía en Caja",
    traditional: "Rechazo inmediato si falta $1 peso",
    oneCard: "One Card cubre hasta $2 MXN de diferencia",
  },
];

const ComparisonTable = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-hero-gradient text-white relative overflow-hidden">
      
      {/* Luces/Glows decorativos de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-onecard-sky/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white !leading-[1.3]">
            ¿Por qué las empresas están migrando a One Card?
          </h2>
          <p className="text-white/90 text-base sm:text-lg font-normal sm:font-medium max-w-2xl mx-auto">
            La diferencia entre ser tratado como un número de cuenta o tener un aliado financiero con soporte humano 24/7.
          </p>
        </motion.div>

        {/* Tabla Comparativa (Scroll horizontal en móviles) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="w-full overflow-x-auto pb-6 pt-4 scrollbar-none"
        >
          <div className="min-w-[720px] max-w-5xl mx-auto bg-white rounded-xl shadow-2xl text-slate-800 overflow-hidden border border-white/20">
            
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200">
                  {/* Columna 1: Características */}
                  <th className="w-[30%] p-5 sm:p-6 text-sm sm:text-base font-bold text-slate-900 bg-slate-50/80">
                    Característica / Beneficio
                  </th>

                  {/* Columna 2: Competencia */}
                  <th className="w-[35%] p-5 sm:p-6 text-sm sm:text-base font-bold text-slate-600 bg-slate-50/80">
                    Emisores Tradicionales
                    <span className="block text-xs font-normal text-slate-400 mt-0.5">
                      (Edenred, Sí Vale, Pluxee)
                    </span>
                  </th>

                  {/* Columna 3: ONE CARD (Destacada) */}
                  <th className="w-[35%] relative p-0 sm:p-0 bg-gradient-to-b from-slate-900 to-onecard-dark text-white rounded-t-2xl">
                    {/* Badge de Ganador */}
                    <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-[#00b7eb] text-white font-extrabold text-[10px] sm:text-[11px] px-3 py-0.5 rounded-md uppercase tracking-wider shadow-md">
                      Mejor Opción
                    </div>

                    <div className="flex items-center justify-center pt-0">
                      <img 
                        src={onecardLogo} 
                        alt="One Card Logo" 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr 
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors group"
                  >
                    {/* Característica */}
                    <td className="p-4 sm:p-5 text-xs sm:text-sm font-semibold text-slate-800 bg-white group-hover:bg-slate-50/60 transition-colors">
                      {row.feature}
                    </td>

                    {/* Tradicionales (Con X) */}
                    <td className="p-4 sm:p-5 text-xs sm:text-sm text-slate-500 bg-white group-hover:bg-slate-50/60 transition-colors">
                      <div className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-xs font-bold mt-0.5">
                          ✕
                        </span>
                        <span>{row.traditional}</span>
                      </div>
                    </td>

                    {/* One Card (Destacado + Check) */}
                    <td className="p-4 sm:p-5 text-xs sm:text-sm font-medium text-slate-900 bg-sky-50/60 border-x-2 border-onecard-sky/30">
                      <div className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold mt-0.5 shadow-sm">
                          ✓
                        </span>
                        <span className="font-semibold text-slate-900">{row.oneCard}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Footer con el Botón Integrado a la Columna One Card */}
              <tfoot>
                <tr>
                  <td colSpan={2} className="bg-slate-50 border-t border-slate-200"></td>
                  <td className="p-0 bg-onecard-sky border-x-2 border-b-2 border-onecard-sky rounded-b-2xl overflow-hidden">
                    <motion.button 
                      whileHover={{ scale: 1.02, backgroundColor: "#00b7eb" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-full py-5 px-4 bg-onecard-sky text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-inner"
                    >
                      <span>Cambiar a ONE CARD sin costo de emisión</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </td>
                </tr>
              </tfoot>

            </table>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ComparisonTable;