// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import ComparisonTable from './components/ComparisonTable'
import AppShowcase from './components/AppShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#00629b] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Solutions />
      <ComparisonTable />
      <AppShowcase />
      <Footer />
    </div>
  )
}

export default App