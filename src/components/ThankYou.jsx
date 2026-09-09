// src/components/ThankYou.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const { name = '' } = location.state || {};

  return (
    <div className="min-h-screen bg-[#00253E] text-white flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg bg-[#00253E] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-6">
        
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-2xl font-bold mx-auto">
          ✓
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-white">¡Gracias por tu interés{name ? `, ${name}` : ''}!</h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hemos recibido la información de tu organización correctamente.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left space-y-2">
          <p className="text-sm text-slate-200 leading-relaxed">
            Nuestro equipo comercial analizará las necesidades específicas de tu empresa y se pondrá en contacto contigo a la brevedad para ofrecerte una propuesta a la medida.
          </p>
        </div>

        <div className="pt-2">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-[#00b7eb] hover:bg-[#0097DA] text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition-all text-sm"
          >
            ← Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ThankYou;