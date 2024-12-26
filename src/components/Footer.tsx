import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">IMAGINEER</h3>
            <p className="mb-4">Muutamme kodit unelmiksi ammattitaidolla ja omistautumisella laatuun.</p>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-emerald-500" />
              <span>24/7 Hätäpalvelu</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Yhteystiedot</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-emerald-500" />
                <span>Remonttikatu 123, 00100 Helsinki</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-emerald-500" />
                <a href="tel:8053717488" className="hover:text-white">(805) 371-7488</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-emerald-500" />
                <a href="mailto:info@imagineer.fi" className="hover:text-white">info@imagineer.fi</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Pikalinkit</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Tietoa meistä</a></li>
              <li><a href="#" className="hover:text-white">Palvelumme</a></li>
              <li><a href="#" className="hover:text-white">Portfolio</a></li>
              <li><a href="#" className="hover:text-white">Ota yhteyttä</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Lakiasiat</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Tietosuojaseloste</a></li>
              <li><a href="#" className="hover:text-white">Käyttöehdot</a></li>
              <li><a href="#" className="hover:text-white">UKK</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Imagineer. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  );
}