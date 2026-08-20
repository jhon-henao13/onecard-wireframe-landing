// src/components/FAQSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    id: 1,
    question: '¿One Card está autorizada por las autoridades?',
    answer: 'Sí. Estamos autorizados por el SAT para emitir monederos electrónicos de despensa y combustible.'
  },
  {
    id: 2,
    question: '¿Por qué contratar un monedero de combustible si mis choferes ya usan tarjetas de crédito bancarias?',
    answer: 'Las tarjetas de crédito bancarias tradicionales no cumplen con las reglas específicas del SAT para la deducibilidad limpia de gasolina, no consolidan todas tus cargas en un solo CFDI mensual, ni permiten limitar el uso por kilometraje, horario o tipo de combustible. Con One Card obtienes deducibilidad al 100% y control operativo total.'
  },
  {
    id: 3,
    question: '¿Aceptan la tarjeta de gasolina One Card en cualquier gasolinera de carretera o provincia?',
    answer: 'Sí. Al contar con el respaldo de la red nacional VISA con chip de alta seguridad, la tarjeta pasa en cualquier estación de servicio del país que cuente con terminal punto de venta bancaria, sin necesidad de buscar grupos gasolineros específicos.'
  },
  {
    id: 4,
    question: '¿Es mejor dar la despensa en efectivo o nómina ordinaria que en monedero?',
    answer: 'Dar la despensa en efectivo o nómina ordinaria integra directamente al Salario Base de Cotización (SBC), disparando tus pagos de IMSS, INFONAVIT e ISR. Otorgarla mediante el monedero autorizado de One Card bajo el esquema de previsión social la hace deducible de impuestos para la empresa (hasta el 53%) y llega al 100% íntegra al colaborador sin retenciones de ISR.'
  },
  {
    id: 5,
    question: 'Actualmente trabajo con otro proveedor ¿qué tan difícil es cambiarme a One Card?',
    answer: 'Es un proceso sin complicaciones. Nosotros nos encargamos de toda la transición operativa, entregamos tus tarjetas listas para usar y te otorgamos primera emisión de tarjetas sin costo al migrar con nosotros.'
  },
  {
    id: 6,
    question: '¿Cuáles son los tiempos de entrega de los plásticos?',
    answer: 'Entregamos las tarjetas en un lapso de 24 a 48 horas en Monterrey y área metropolitana, y de 3 a 4 días hábiles en el resto de la República Mexicana.'
  },
  {
    id: 7,
    question: '¿En cuánto tiempo puedo empezar a usar las tarjetas?',
    answer: 'El proceso de alta toma entre 5 y 7 días hábiles. Recibirás cotización en menos de 24 horas y entregamos las tarjetas personalizadas a cada colaborador donde tú indiques.'
  },
  {
    id: 8,
    question: '¿Hay un mínimo de tarjetas para contratar?',
    answer: 'No tenemos mínimos rígidos. Atendemos desde pequeñas y medianas empresas hasta corporativos con miles de colaboradores. Contáctanos para diseñar una propuesta a tu medida.'
  },
  {
    id: 9,
    question: '¿Qué pasa si un empleado pierde su tarjeta?',
    answer: 'Puedes bloquearla inmediatamente desde el portal sin esperar llamadas. Reposición rápida con el saldo intacto. Las tarjetas cuentan con chip y NIP para máxima seguridad.'
  }
];

const FAQSection = () => {
  // Estado para controlar cuál pregunta está abierta (-1 si ninguna)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 md:px-12 bg-slate-50 text-slate-800 relative overflow-hidden">
      
      {/* Glow de fondo decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-100/50 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#005C94] tracking-tight !leading-[1.3]">
            Todo lo que necesitas saber <br className="hidden sm:inline" />
            antes de contratar
          </h2>
        </motion.div>

        {/* Lista de Acordeones */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#0097DA] shadow-lg shadow-sky-500/10' 
                    : 'border-slate-200/80 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Botón Encabezado de la pregunta */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${
                    isOpen ? 'text-[#005C94]' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>

                  {/* Ícono de + que rota a x cuando se abre */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#0097DA] text-white rotate-45' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                {/* Respuesta Desplegable Animada */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-800 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;