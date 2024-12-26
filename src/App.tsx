import React from 'react';
import Navbar from './components/Navbar';
import EmergencyBanner from './components/EmergencyBanner';
import CallButton from './components/CallButton';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <EmergencyBanner />
      <Navbar />
      <CallButton />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
            alt="Moderni Keittiö"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Teemme remontoinnista helppoa ja tehokasta.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Uudista kotisi asiantuntevalla remonttipalvelullamme. Hoidamme kaiken vuosikymmenten ammattitaidolla.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Pyydä ilmainen tarjous
          </button>
        </div>
      </section>

      <Features />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;