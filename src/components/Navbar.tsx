import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-700">IMAGINEER</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Tietoa meistä</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Projektit</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Palvelut</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Blogi</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Yhteystiedot</a>
          </div>
        </div>
      </div>
    </nav>
  );
}