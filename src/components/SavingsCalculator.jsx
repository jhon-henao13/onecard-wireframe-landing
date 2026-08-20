// src/components/SavingsCalculator.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MONTH_OPTIONS = [
  { label: '6 M', value: 6 },
  { label: '12 M', value: 12 },
  { label: '24 M', value: 24 },
  { label: '36 M', value: 36 },
];

const GAS_OPTIONS = [
  { label: '$5,000 MXN', value: 5000 },
  { label: '$10,000 MXN', value: 10000 },
  { label: '$20,000 MXN', value: 20000 },
  { label: '$50,000 MXN', value: 50000 },
];

const SavingsCalculator = () => {
  const [numEmployees, setNumEmployees] = useState(20);
  const [gasPerEmployee, setGasPerEmployee] = useState(20000);
  const [selectedMonths, setSelectedMonths] = useState(12);

  // Cálculo del ahorro estimado (ISR 30% + Eficiencia fiscal/IVA ~35% de retorno directo)
  const estimatedSavings = useMemo(() => {
    const totalGasSpent = numEmployees * gasPerEmployee * (selectedMonths / 12);
    // 35% de optimización fiscal global estimada (ISR + Acreditamiento IVA + Cero fugas)
    const totalSavings = totalGasSpent * 0.35;
    return Math.round(totalSavings);
  }, [numEmployees, gasPerEmployee, selectedMonths]);

  // Formateador de moneda MXN
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 md:px-12 bg-hero-gradient text-white relative overflow-hidden">
      
      {/* Resplandor decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-onecard-sky/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white !leading-[1.5]">
            El impacto financiero directo en tu estado de resultados
          </h2>
        </motion.div>

        {/* TARJETA CALCULADORA (Estilo Réplica Exacta) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 text-slate-800 shadow-2xl border border-white/20 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Control 1: Slider Número de Empleados */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span># de Empleados:</span>
                <span className="text-base font-extrabold text-[#005C94]">{numEmployees}</span>
              </div>
              
              <input 
                type="range" 
                min="5" 
                max="100" 
                step="1"
                value={numEmployees}
                onChange={(e) => setNumEmployees(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0097DA]"
              />

              <div className="flex justify-between text-[11px] font-medium text-slate-400">
                <span>5 empleados</span>
                <span>100 empleados</span>
              </div>
            </div>

            {/* Control 2: Gasto Mensual Estimado */}
            <div className="lg:col-span-4 space-y-2">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Gasto Mensual Estimado en Gasolina
              </label>
              
              <div className="relative">
                <select 
                  value={gasPerEmployee}
                  onChange={(e) => setGasPerEmployee(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0097DA] appearance-none cursor-pointer"
                >
                  {GAS_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  ▼
                </div>
              </div>
            </div>

            {/* Control 3: Selector de Plazo (Pill Buttons) */}
            <div className="lg:col-span-4 space-y-2">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Plazo de Ahorro
              </label>
              
              <div className="bg-slate-100 p-1.5 rounded-xl flex items-center justify-between gap-1">
                {MONTH_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedMonths(option.value)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      selectedMonths === option.value
                        ? 'bg-[#00b7eb] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* CÁLCULO RESULTADO DESTACADO */}
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-sky-50/60 p-6 rounded-2xl border border-sky-100">
            <div>
              <span className="text-xs font-bold text-[#0097DA] uppercase tracking-wider block">
                Ahorro Fiscal Estimado ({selectedMonths} Meses)
              </span>
              <p className="text-slate-500 text-xs mt-0.5">
                Basado en deducción del 100% en ISR y acreditación directa de IVA.
              </p>
            </div>

            <div className="text-right">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={estimatedSavings}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-3xl sm:text-4xl font-black text-[#00253E] tracking-tight block"
                >
                  {formatCurrency(estimatedSavings)} MXN
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

        </motion.div>

        {/* TEXTOS EXPLICATIVOS INFERIORES */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto space-y-6 pt-4 text-white/90 text-sm sm:text-lg leading-relaxed"
        >
          <p>
            <strong className="text-white font-bold">Ahorro en Despensa:</strong> Al otorgar $1,000 MXN en vales de despensa vía One Card vs. Dinero en Nómina, tu empresa ahorra hasta un 53% en ISR y exenta las cuotas patronales de IMSS e INFONAVIT sobre ese monto.
          </p>

          <p>
            <strong className="text-white font-bold">Ahorro en Combustible:</strong> Deducción limpia del 100% de ISR sin importar el monto pagado, más acreditamiento directo del IVA sin pérdidas por tickets no deducibles o extraviados.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default SavingsCalculator;