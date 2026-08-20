// src/components/ContactModal.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DISALLOWED_DOMAINS = [
  'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 
  'icloud.com', 'live.com', 'msn.com', 'yahoo.es', 'hotmail.es'
];

const ContactModal = ({ isOpen, onClose, initialEmail = '' }) => {
  const [step, setStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: initialEmail,
    celular: '',
    empresa: '',
    empleados: '11-50',
    puesto: '',
    ofrecenVales: 'No'
  });

  // Sincronizar email si viene precargado desde el Hero
  useEffect(() => {
    if (initialEmail) {
      setFormData((prev) => ({ ...prev, email: initialEmail }));
    }
  }, [initialEmail]);

  // Resetear el estado al cerrar el modal
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setErrorMsg('');
    }, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  // Validar Step 1
  const handleNextStep = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.nombre.trim() || !formData.apellido.trim() || !formData.celular.trim()) {
      setErrorMsg('Por favor completa todos los campos.');
      return;
    }

    if (!formData.email || !formData.email.includes('@')) {
      setErrorMsg('Ingresa un correo electrónico válido.');
      return;
    }

    const domain = formData.email.split('@')[1]?.toLowerCase();
    if (DISALLOWED_DOMAINS.includes(domain)) {
      setErrorMsg('Por favor usa un correo empresarial (ej. nombre@tuempresa.com).');
      return;
    }

    setStep(2);
  };

  // Validar Step 2 y avanzar a Thank You / Calendly
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.empresa.trim() || !formData.puesto.trim()) {
      setErrorMsg('Por favor completa la información de tu empresa.');
      return;
    }

    // Aquí podrías enviar formData a tu backend / Webhook (n8n, HubSpot, etc.)
    console.log('Datos del Lead Registrado:', formData);

    setStep(3);
  };

  // Generar URL de Calendly con datos pre-poblados
  const fullName = `${formData.nombre} ${formData.apellido}`.trim();
  const calendlyUrl = `https://calendly.com/your-calendly-link/15min?name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(formData.email)}`;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Fondo Oscuro / Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Tarjeta Flotante del Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#00253E] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 text-white my-auto overflow-hidden"
        >
          {/* Botón Cerrar */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Indicador de Pasos (1 y 2) */}
          {step < 3 && (
            <div className="mb-6">
              <div className="flex items-center justify-around text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                <span>Paso {step} de 2</span>
                <span>{step === 1 ? 'Información de Contacto' : 'Datos Corporativos'}</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#00b7eb] h-full transition-all duration-300"
                  style={{ width: step === 1 ? '50%' : '100%' }}
                />
              </div>
            </div>
          )}

          {/* PASO 1: DATOS DE CONTACTO */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="text-center sm:text-left mb-4">
                <h3 className="text-2xl font-bold text-white">Solicita tu Demo Personalizada</h3>
                <p className="text-sm text-slate-300 mt-1">Ingresa tus datos corporativos para iniciar el análisis.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Nombre *</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Carlos"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#00b7eb] focus:outline-none text-white text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Apellido *</label>
                  <input
                    type="text"
                    name="apellido"
                    required
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Ej. Mendoza"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#00b7eb] focus:outline-none text-white text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">Correo de empresa *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@tuempresa.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#00b7eb] focus:outline-none text-white text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">Celular *</label>
                <input
                  type="tel"
                  name="celular"
                  required
                  value={formData.celular}
                  onChange={handleChange}
                  placeholder="+57 300 000 0000"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#00b7eb] focus:outline-none text-white text-sm transition-all"
                />
              </div>

              {errorMsg && (
                <p className="text-red-400 text-xs font-medium pt-1 flex items-center gap-1">
                  <span>⚠️</span> {errorMsg}
                </p>
              )}

              <button
                type="submit"
                className="w-full mt-2 bg-[#00b7eb] hover:bg-[#0097DA] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200"
              >
                Continuar al paso 2 →
              </button>
            </form>
          )}

          {/* PASO 2: DATOS DE EMPRESA */}
          {step === 2 && (
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="text-center sm:text-left mb-4">
                <h3 className="text-2xl font-bold text-white">Detalles de la Organización</h3>
                <p className="text-sm text-slate-300 mt-1">Nos ayuda a preparar una propuesta a la medida.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Empresa o Razón Social *</label>
                  <input
                    type="text"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de la empresa"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#00b7eb] focus:outline-none text-white text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Puesto / Cargo *</label>
                  <input
                    type="text"
                    name="puesto"
                    required
                    value={formData.puesto}
                    onChange={handleChange}
                    placeholder="Ej. Director de RRHH"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#00b7eb] focus:outline-none text-white text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">Número de Empleados *</label>
                <select
                  name="empleados"
                  value={formData.empleados}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#003456] border border-white/15 focus:border-[#00b7eb] focus:outline-none text-white text-sm transition-all"
                >
                  <option value="0-10">0 - 10 empleados</option>
                  <option value="11-50">11 - 50 empleados</option>
                  <option value="50-100">50 - 100 empleados</option>
                  <option value="100+">100+ empleados</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2">¿Ya ofrecen vales actualmente? *</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Sí', 'No'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, ofrecenVales: opt }))}
                      className={`py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                        formData.ofrecenVales === opt
                          ? 'bg-[#00b7eb] border-[#00b7eb] text-white shadow-md'
                          : 'bg-white/5 border-white/15 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {errorMsg && (
                <p className="text-red-400 text-xs font-medium pt-1 flex items-center gap-1">
                  <span>⚠️</span> {errorMsg}
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 bg-white/10 hover:bg-white/20 text-white font-medium py-3.5 rounded-xl transition-all"
                >
                  Atrás
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-[#00b7eb] hover:bg-[#0097DA] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all"
                >
                  Confirmar y Agendar
                </button>
              </div>
            </form>
          )}

          {/* PASO 3: THANK YOU PAGE + CALENDLY EMBED */}
          {step === 3 && (
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-1">
                ✓
              </div>

              <h3 className="text-2xl font-extrabold text-white">¡Gracias por tu interés!</h3>
              <p className="text-sm text-slate-200 leading-relaxed max-w-lg mx-auto">
                Hemos recibido tu solicitud con éxito. Nuestro equipo comercial ya está analizando los datos de tu empresa.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#00b7eb] bg-cyan-950/60 border border-cyan-500/30 p-3 rounded-xl max-w-lg mx-auto">
                ¿Quieres agilizar el proceso? Agenda directamente tu Llamada de Diagnóstico Gratuita (15 min) con un especialista corporativo en el calendario de abajo.
              </p>

              {/* Contenedor Calendly */}
              <div className="w-full h-[480px] rounded-2xl overflow-hidden border border-white/15 bg-white/5 mt-4">
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly Scheduling"
                />
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;