// src/components/ThankYou.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  // Recuperamos el email y nombre pasado por estado, o un default
  const { name = '', email = '' } = location.state || {};

  const fullName = encodeURIComponent(name);
  const userEmail = encodeURIComponent(email);
  const calendlyUrl = `https://calendly.com/your-calendly-link/15min?name=${fullName}&email=${userEmail}`;

  return (
    <div className="min-h-screen bg-[#00253E] text-white flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-[#00253E] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-4">
        
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

        <div className="pt-4">
          <Link 
            to="/" 
            className="inline-block text-xs text-slate-400 hover:text-white underline transition-colors"
          >
            ← Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;