import React from 'react';
import { Shield, Wrench, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Vakuutuskorvausten asiantuntijat',
    description: 'Suurten vakuutusyhtiöiden suosittelema urakoitsija, joka tarjoaa sujuvan korvausprosessin'
  },
  {
    icon: Wrench,
    title: 'Ammattimainen käsityötaito',
    description: 'Kokeneiden ammattilaisten ja suunnittelijoiden toteuttamat laadukkaat remontit'
  },
  {
    icon: Clock,
    title: 'Täsmällinen toteutus',
    description: 'Projektit valmistuvat aikataulussa läpinäkyvällä viestinnällä'
  },
  {
    icon: Award,
    title: 'Yli 10 vuoden kokemus',
    description: 'Vuosikymmen erinomaista kodin kunnostus- ja remontointipalvelua'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Miksi valita meidät?</h2>
          <p className="text-lg text-gray-600">Koe todellisten ammattilaisten ero</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}