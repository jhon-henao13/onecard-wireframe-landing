// src/components/Footer.jsx
import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-onecard-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        

        {/* Footer Links & Copyright */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm border-t border-white/10 pt-12">
          {/* Column 1 */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Soluciones</h4>
            <a href="#" className="block text-white/70 hover:text-white">Despensa</a>
            <a href="#" className="block text-white/70 hover:text-white">Combustible</a>
          </div>
          {/* Column 2 */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Empresa</h4>
            <a href="#" className="block text-white/70 hover:text-white">Sobre Nosotros</a>
            <a href="#" className="block text-white/70 hover:text-white">Carreras</a>
          </div>
          {/* Column 3 */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Soporte</h4>
            <a href="#" className="block text-white/70 hover:text-white">Centro de Ayuda</a>
            <a href="#" className="block text-white/70 hover:text-white">Contacto</a>
          </div>
          {/* Column 4 */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Legal</h4>
            <a href="#" className="block text-white/70 hover:text-white">Privacidad</a>
            <a href="#" className="block text-white/70 hover:text-white">T&#233;rminos</a>
          </div>
        </div>

        <div className="text-center text-xs text-white/50 border-t border-white/10 pt-8">
          &copy; {new Date().getFullYear()} ONE CARD S.I. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;