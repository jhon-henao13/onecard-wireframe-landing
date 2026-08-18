// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#00629b] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App