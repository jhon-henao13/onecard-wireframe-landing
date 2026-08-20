// src/components/ImplementationProcess.jsx
import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    time: '24 horas',
    title: 'Solicita tu cotización',
    description: 'Llena un formulario breve y un asesor dedicado se pone en contacto contigo en menos de 24 horas con una propuesta a tu medida.',
    tags: ['Sin compromiso', 'Asesor dedicado', 'Propuesta personalizada'],
    // Icono SVG de documento / edición
    icon: (
      <svg className="w-6 h-6 text-[#0097DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    number: '02',
    time: '3 a 5 días',
    title: 'Recibe las tarjetas',
    description: 'Personalizamos las tarjetas con el nombre de cada colaborador y las entregamos directamente en tus oficinas o donde tú indiques.',
    tags: ['Personalización gratuita', 'Entrega nacional', 'Chip + NIP + VISA'],
    // Icono SVG de tarjeta
    icon: (
      <svg className="w-6 h-6 text-[#0097DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: '03',
    time: 'Inmediato',
    title: 'Dispersa el saldo',
    description: 'Carga saldo desde la plataforma web 24/7. Programa cargas recurrentes, define límites por tarjeta y dispersa por nómina.',
    tags: ['Plataforma 24/7', 'Cargas recurrentes', 'Límites por tarjeta'],
    // Icono SVG de avión de papel / dispersión
    icon: (
      <svg className="w-6 h-6 text-[#0097DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  }
];

const ImplementationProcess = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-slate-50 text-slate-800 relative overflow-hidden">
      
      {/* Resplandor decorativo sutil en el fondo */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00629b] tracking-tight !leading-[1.35]">
            Implementación express <br className="hidden sm:inline" />
            sin paros operativos
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Nos encargamos de todo el proceso de migración o alta inicial para que tu equipo no pierda tiempo.
          </p>
        </motion.div>

        {/* CONTENEDOR DE PASOS Y LÍNEA DE TIEMPO */}
        <div className="relative max-w-4xl mx-auto pl-4 sm:pl-10 md:pl-16">
          
          {/* Línea conectora vertical */}
          <div className="absolute left-[39px] sm:left-[63px] md:left-[87px] top-8 bottom-12 w-0.5 bg-sky-200" />

          <div className="space-y-10 relative">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start gap-4 sm:gap-8 group"
              >
                
                {/* Ícono de paso flotante + Badge con el número */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:border-[#0097DA] group-hover:shadow-lg transition-all duration-300">
                    {step.icon}
                  </div>
                  {/* Badge numérico en la esquina superior derecha del ícono */}
                  <span className="absolute -top-2 -right-2 bg-[#0097DA] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                    {step.number}
                  </span>
                </div>

                {/* Tarjeta de Contenido */}
                <div className="flex-1 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/80 hover:shadow-xl transition-all duration-300">
                  
                  {/* Título e Indicador de tiempo */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#00b7eb]">
                      {step.title}
                    </h3>
                    
                    {/* Badge de tiempo estimado */}
                    <div className="flex items-center gap-1.5 bg-sky-50 text-[#0097DA] px-3 py-1 rounded-full text-xs font-bold border border-sky-100">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{step.time}</span>
                    </div>
                  </div>

                  {/* Descripción del paso */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Tags / Beneficios con Checkmarks */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {step.tags.map((tag) => (
                      <div 
                        key={tag}
                        className="flex items-center gap-1.5 bg-[#eaf8ff] border border-slate-200/60 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0097DA] shadow-sm hover:bg-[#d0f0ff] transition-all duration-200"
                      >
                        <svg className="w-3.5 h-3.5 text-[#0097DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* BOTÓN CTA INFERIOR (Agenda tu demo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center pt-2"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-[#0097DA] hover:bg-[#0082bd] text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Agenda tu demo
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ImplementationProcess;