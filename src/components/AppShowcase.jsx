// src/components/AppShowcase.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gifAdmin from '../assets/gif-videodemo-admin.gif';
import gifUsuarios from '../assets/gif-videodemo-usuarios.gif';

// Datos para la App de Administradores
const ADMIN_FEATURES = [
  {
    id: 'dispersion',
    title: 'Dispersión 24/7',
    description: 'Asigna y gestiona fondos a cualquier tarjeta en tiempo real, sin importar el día ni la hora.',
    icon: '⚡',
    mediaUrl: gifAdmin,
    color: '#0097DA'
  },
  {
    id: 'control',
    title: 'Control Total',
    description: 'Establece límites de gasto por vehículo, tarjeta, tipo de combustible o días de la semana.',
    icon: '🛡️',
    mediaUrl: gifAdmin,
    color: '#005C94'
  },
  {
    id: 'conciliacion',
    title: 'Conciliación Automática',
    description: 'Olvídate de facturas perdidas. Descarga reportes fiscales consolidados en un par de clics.',
    icon: '📊',
    mediaUrl: gifAdmin,
    color: '#00b7eb'
  },
  {
    id: 'geolocalizacion',
    title: 'Geolocalización de Cargas',
    description: 'Visualiza en el mapa dónde y cuándo se realizó cada transacción.',
    icon: '📍',
    mediaUrl: gifAdmin,
    color: '#00253E'
  }
];

// Datos para la App de Colaboradores
const DRIVER_FEATURES = [
  {
    id: 'consultas',
    title: 'Consulta de Saldo y Movimientos',
    description: 'Revisa tu saldo disponible e historial de transacciones al instante desde la app.',
    icon: '📲',
    mediaUrl: gifUsuarios,
    color: '#10B981'
  },
  {
    id: 'bloqueo',
    title: 'Bloqueo y Desbloqueo Preventivo',
    description: '¿Perdiste tu tarjeta? Apágala temporalmente con un toque desde la aplicación.',
    icon: '🔒',
    mediaUrl: gifUsuarios,
    color: '#059669'
  },
  {
    id: 'mapa',
    title: 'Red de Estaciones Cercanas',
    description: 'Encuentra gasolineras y comercios afiliados cerca de tu ubicación actual.',
    icon: '🗺️',
    mediaUrl: gifUsuarios,
    color: '#047857'
  },
  {
    id: 'soporte',
    title: 'Atención Directa',
    description: 'Soporte y asistencia en carretera directo desde el menú de la aplicación.',
    icon: '💬',
    mediaUrl: gifUsuarios,
    color: '#065F46'
  }
];

const AppShowcase = () => {
  const [adminIndex, setAdminIndex] = useState(0);
  const [driverIndex, setDriverIndex] = useState(0);

  const currentAdmin = ADMIN_FEATURES[adminIndex];
  const currentDriver = DRIVER_FEATURES[driverIndex];

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
            {/* PANTALLA MOCKUP TELÉFONO - ADMINISTRADOR */}
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19] bg-slate-900 rounded-[2.8rem] p-3 shadow-2xl border-4 border-slate-700/80 flex flex-col items-center justify-center overflow-hidden">

              {/* Notch Superior / Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Pantalla Interna del GIF sin recortes */}
              <div className="relative w-full h-full bg-black rounded-[2.2rem] overflow-hidden flex items-center justify-center pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAdmin.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center p-1"
                  >
                    {currentAdmin.mediaUrl ? (
                      <img 
                        src={currentAdmin.mediaUrl} 
                        alt={currentAdmin.title}
                        className="w-full h-full object-contain rounded-[1.8rem]"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center text-center p-6 text-white">
                        <span className="text-5xl mb-4">{currentAdmin.icon}</span>
                        <h4 className="font-bold text-lg">{currentAdmin.title}</h4>
                        <p className="text-xs text-slate-400 mt-2">{currentAdmin.description}</p>
                      </div>
                    )}
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
            {/* PANTALLA MOCKUP TELÉFONO - COLABORADOR */}
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19] bg-slate-900 rounded-[2.8rem] p-3 shadow-2xl border-4 border-slate-700/80 flex flex-col items-center justify-center overflow-hidden">

              {/* Notch Superior / Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Pantalla Interna del GIF sin recortes */}
              <div className="relative w-full h-full bg-black rounded-[2.2rem] overflow-hidden flex items-center justify-center pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDriver.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center p-1"
                  >
                    {currentDriver.mediaUrl ? (
                      <img 
                        src={currentDriver.mediaUrl} 
                        alt={currentDriver.title}
                        className="w-full h-full object-contain rounded-[1.8rem]"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center text-center p-6 text-white">
                        <span className="text-5xl mb-4">{currentDriver.icon}</span>
                        <h4 className="font-bold text-lg">{currentDriver.title}</h4>
                        <p className="text-xs text-slate-400 mt-2">{currentDriver.description}</p>
                      </div>
                    )}
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