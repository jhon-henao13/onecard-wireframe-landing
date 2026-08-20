// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import ComparisonTable from './components/ComparisonTable';
import AppShowcase from './components/AppShowcase';
import SavingsCalculator from './components/SavingsCalculator';
import ImplementationProcess from './components/ImplementationProcess';
import TestimonialsMarquee from './components/TestimonialsMarquee';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefilledEmail, setPrefilledEmail] = useState('');

  const openModal = (email = '') => {
    if (email) setPrefilledEmail(email);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#00629b] text-white overflow-x-hidden">
      <Navbar onOpenModal={() => openModal()} />
      <Hero onOpenModal={openModal} />
      <Solutions onOpenModal={() => openModal()} />
      <ComparisonTable onOpenModal={() => openModal()} />
      <AppShowcase onOpenModal={() => openModal()} />
      <SavingsCalculator onOpenModal={() => openModal()} />
      <ImplementationProcess onOpenModal={() => openModal()} />
      <TestimonialsMarquee />
      <FAQSection />
      <CTASection onOpenModal={() => openModal()} />
      <Footer />

      {/* Modal Unificado */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialEmail={prefilledEmail}
      />
    </div>
  );
}

export default App;