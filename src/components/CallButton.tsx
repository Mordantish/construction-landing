import React from 'react';
import { Phone } from 'lucide-react';

export default function CallButton() {
  return (
    <a
      href="tel:8053717488"
      className="fixed right-0 top-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-3 rounded-l-lg shadow-lg hover:bg-emerald-700 transition-colors z-40 flex items-center gap-2"
    >
      <Phone size={20} />
      <span className="font-semibold">SOITA NYT</span>
    </a>
  );
}