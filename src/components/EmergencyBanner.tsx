import React from 'react';
import { Phone } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="bg-emerald-600 text-white py-2 px-4 text-center relative">
      <div className="flex items-center justify-center gap-2">
        <span>Hätäpalvelu 24/7</span>
        <Phone size={16} className="inline" />
        <a href="tel:8053717488" className="font-semibold hover:text-emerald-100 transition-colors">
          (805) 371-7488
        </a>
      </div>
      <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white">×</button>
    </div>
  );
}