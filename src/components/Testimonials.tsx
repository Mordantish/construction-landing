import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sari Järvinen',
    role: 'Kodinomistaja',
    content: 'Imagineer muutti vanhanaikaisen keittiömme moderniksi mestariteokseksi. Heidän huolellisuutensa ja ammattimaisuutensa ylitti odotuksemme.',
    rating: 5
  },
  {
    name: 'Mikko Korhonen',
    role: 'Kiinteistöpäällikkö',
    content: 'Yhteistyö Imagineerin kanssa on ollut käänteentekevää kiinteistöjemme remonteissa. Heidän tiiminsä on tehokas, taitava ja toimittaa aina laadukkaita tuloksia.',
    rating: 5
  },
  {
    name: 'Emma Virtanen',
    role: 'Sisustussuunnittelija',
    content: 'Sisustussuunnittelijana olen työskennellyt monien urakoitsijoiden kanssa, mutta Imagineer erottuu poikkeuksellisella ammattitaidollaan ja luotettavuudellaan.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mitä asiakkaamme sanovat</h2>
          <p className="text-lg text-gray-600">Kokemuksia tyytyväisiltä kodinomistajilta</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}