// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import ComparisonTable from './components/ComparisonTable'
import AppShowcase from './components/AppShowcase'
import SavingsCalculator from './components/SavingsCalculator'
import ImplementationProcess from './components/ImplementationProcess'
import TestimonialsMarquee from './components/TestimonialsMarquee'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#00629b] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Solutions />
      <ComparisonTable />
      <AppShowcase />
      <SavingsCalculator />
      <ImplementationProcess />
      <TestimonialsMarquee />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App