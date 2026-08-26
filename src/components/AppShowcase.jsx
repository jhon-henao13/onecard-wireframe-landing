// src/components/AppShowcase.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Datos para la App de Administradores
const ADMIN_FEATURES = [
  {
    id: 'dispersion',
    title: 'Dispersión 24/7',
    description: 'Asigna y gestiona fondos a cualquier tarjeta en tiempo real, sin importar el día ni la hora.',
    icon: '⚡',
    // Reemplaza esta propiedad con la ruta de tu GIF o imagen cuando lo tengas
    mediaUrl: null, 
    color: '#0097DA'
  },
  {
    id: 'control',
    title: 'Control Total',
    description: 'Establece límites de gasto por vehículo, tarjeta, tipo de combustible o días de la semana.',
    icon: '🛡️',
    mediaUrl: null,
    color: '#005C94'
  },
  {
    id: 'conciliacion',
    title: 'Conciliación Automática',
    description: 'Olvídate de facturas perdidas. Descarga reportes fiscales consolidados en un par de clics.',
    icon: '📊',
    mediaUrl: null,
    color: '#00b7eb'
  },
  {
    id: 'geolocalizacion',
    title: 'Geolocalización de Cargas',
    description: 'Visualiza en el mapa dónde y cuándo se realizan los consumos de gasolina de tu flotilla.',
    icon: '📍',
    mediaUrl: null,
    color: '#00253E'
  }
];

// Datos para la App de Colaboradores
const DRIVER_FEATURES = [
  {
    id: 'saldo',
    title: 'Saldo en Tiempo Real',
    description: 'Consulta los fondos disponibles y movimientos recientes al instante desde tu teléfono.',
    icon: '💳',
    mediaUrl: null,
    color: '#0097DA'
  },
  {
    id: 'seguridad',
    title: 'Seguridad en la App',
    description: 'Bloqueo y desbloqueo de tarjeta de inmediato ante cualquier eventualidad o extravío.',
    icon: '🔒',
    mediaUrl: null,
    color: '#005C94'
  },
  {
    id: 'virtual',
    title: 'Tarjeta Virtual',
    description: 'Genera tarjetas digitales seguras para compras en línea o pagos rápidos.',
    icon: '📱',
    mediaUrl: null,
    color: '#00b7eb'
  }
];

const AppShowcase = () => {
  const [adminIndex, setAdminIndex] = useState(0);
  const [driverIndex, setDriverIndex] = useState(0);

  // Intervalos de rotación automática
  useEffect(() => {
    const adminTimer = setInterval(() => {
      setAdminIndex((prev) => (prev + 1) % ADMIN_FEATURES.length);
    }, 4500);

    const driverTimer = setInterval(() => {
      setDriverIndex((prev) => (prev + 1) % DRIVER_FEATURES.length);
    }, 5000);

    return () => {
      clearInterval(adminTimer);
      clearInterval(driverTimer);
    };
  }, []);

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-slate-50 text-slate-800 relative overflow-hidden">
      
      {/* Glows sutiles de fondo */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Encabezado Principal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#005C94] tracking-tight !leading-[1.3]">
            Control financiero, <br className="hidden sm:inline"/>
            literalmente en la palma de tu mano.
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-medium max-w-3xl mx-auto">
            Haz todo desde la app móvil con la misma potencia que desde la versión web. Sin complicaciones técnicas.
          </p>
        </motion.div>

        {/* Grid de los 2 perfiles: Administradores y Colaboradores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* ==== SECCIÓN IZQUIERDA: ADMINISTRADORES ==== */}
          <div className="flex flex-col items-center space-y-8 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100">
            <div className="text-center">
              <span className="bg-sky-100 text-[#0097DA] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Para el Equipo Financiero
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">Administradores</h3>
            </div>

            {/* Mockup iPhone vectorial */}
            <div className="relative w-[270px] sm:w-[290px] h-[550px] sm:h-[570px] bg-slate-900 rounded-[48px] p-3 shadow-2xl border-4 border-slate-700/60 ring-1 ring-slate-900/10">
              
              {/* Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-2.5 h-2.5 bg-slate-800 rounded-full" />
              </div>

              {/* Botones laterales simulados */}
              <div className="absolute -left-1.5 top-24 w-1 h-10 bg-slate-600 rounded-l-md" />
              <div className="absolute -left-1.5 top-38 w-1 h-12 bg-slate-600 rounded-l-md" />
              <div className="absolute -right-1.5 top-28 w-1 h-16 bg-slate-600 rounded-r-md" />

              {/* Pantalla interior móvil */}
              <div className="w-full h-full bg-slate-950 rounded-[38px] overflow-hidden relative flex flex-col pt-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={adminIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex flex-col justify-between p-4 relative"
                  >
                    {/* ÁREA RESERVADA PARA IMAGEN / GIF */}
                    <div className="w-full h-[310px] bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center p-4 text-center overflow-hidden relative group">
                      {ADMIN_FEATURES[adminIndex].mediaUrl ? (
                        <img 
                          src={ADMIN_FEATURES[adminIndex].mediaUrl} 
                          alt={ADMIN_FEATURES[adminIndex].title} 
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        /* Placeholder temporal estilizado mientras subes las imágenes */
                        <div className="space-y-3">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0097DA] to-[#00b7eb] flex items-center justify-center text-3xl mx-auto shadow-lg shadow-sky-500/30">
                            {ADMIN_FEATURES[adminIndex].icon}
                          </div>
                          <span className="text-xs text-slate-400 block font-mono">
                            [ Previsualización GIF/UI ]
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Contenido / Texto dinámico dentro de la App */}
                    <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 space-y-1">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{ADMIN_FEATURES[adminIndex].icon}</span>
                        <span>{ADMIN_FEATURES[adminIndex].title}</span>
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {ADMIN_FEATURES[adminIndex].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Selector interactivo de viñetas (Click para cambiar) */}
            <div className="w-full space-y-2 pt-2">
              {ADMIN_FEATURES.map((feat, idx) => (
                <button
                  key={feat.id}
                  onClick={() => setAdminIndex(idx)}
                  className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                    adminIndex === idx 
                      ? 'bg-[#0097DA]/10 border-[#0097DA] shadow-sm' 
                      : 'bg-slate-50 border-transparent hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{feat.icon}</span>
                    <span className={`text-sm font-semibold ${adminIndex === idx ? 'text-[#0097DA]' : 'text-slate-700'}`}>
                      {feat.title}
                    </span>
                  </div>
                  {adminIndex === idx && (
                    <motion.div layoutId="activeDotAdmin" className="w-2 h-2 rounded-full bg-[#0097DA]" />
                  )}
                </button>
              ))}
            </div>

          </div>

          {/* ==== SECCIÓN DERECHA: COLABORADORES Y CHOFERES ==== */}
          <div className="flex flex-col items-center space-y-8 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100">
            <div className="text-center">
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Para el Personal en Ruta
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">Colaboradores y choferes</h3>
            </div>

            {/* Mockup iPhone vectorial */}
            <div className="relative w-[270px] sm:w-[290px] h-[550px] sm:h-[570px] bg-slate-900 rounded-[48px] p-3 shadow-2xl border-4 border-slate-700/60 ring-1 ring-slate-900/10">
              
              {/* Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-2.5 h-2.5 bg-slate-800 rounded-full" />
              </div>

              {/* Botones laterales simulados */}
              <div className="absolute -left-1.5 top-24 w-1 h-10 bg-slate-600 rounded-l-md" />
              <div className="absolute -left-1.5 top-38 w-1 h-12 bg-slate-600 rounded-l-md" />
              <div className="absolute -right-1.5 top-28 w-1 h-16 bg-slate-600 rounded-r-md" />

              {/* Pantalla interior móvil */}
              <div className="w-full h-full bg-slate-950 rounded-[38px] overflow-hidden relative flex flex-col pt-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={driverIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex flex-col justify-between p-4 relative"
                  >
                    {/* ÁREA RESERVADA PARA IMAGEN / GIF */}
                    <div className="w-full h-[320px] bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center p-4 text-center overflow-hidden relative group">
                      {DRIVER_FEATURES[driverIndex].mediaUrl ? (
                        <img 
                          src={DRIVER_FEATURES[driverIndex].mediaUrl} 
                          alt={DRIVER_FEATURES[driverIndex].title} 
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        /* Placeholder temporal */
                        <div className="space-y-3">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-[#00b7eb] flex items-center justify-center text-3xl mx-auto shadow-lg shadow-emerald-500/20">
                            {DRIVER_FEATURES[driverIndex].icon}
                          </div>
                          <span className="text-xs text-slate-400 block font-mono">
                            [ Previsualización GIF/UI ]
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Contenido / Texto dinámico dentro de la App */}
                    <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 space-y-1">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{DRIVER_FEATURES[driverIndex].icon}</span>
                        <span>{DRIVER_FEATURES[driverIndex].title}</span>
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {DRIVER_FEATURES[driverIndex].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Selector interactivo de viñetas */}
            <div className="w-full space-y-2 pt-2">
              {DRIVER_FEATURES.map((feat, idx) => (
                <button
                  key={feat.id}
                  onClick={() => setDriverIndex(idx)}
                  className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                    driverIndex === idx 
                      ? 'bg-emerald-50 border-emerald-500 shadow-sm' 
                      : 'bg-slate-50 border-transparent hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{feat.icon}</span>
                    <span className={`text-sm font-semibold ${driverIndex === idx ? 'text-emerald-700' : 'text-slate-700'}`}>
                      {feat.title}
                    </span>
                  </div>
                  {driverIndex === idx && (
                    <motion.div layoutId="activeDotDriver" className="w-2 h-2 rounded-full bg-emerald-600" />
                  )}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppShowcase;