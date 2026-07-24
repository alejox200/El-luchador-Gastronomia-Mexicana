import React from 'react';
import { MapPin, ExternalLink, Compass } from 'lucide-react';
import { RESTAURANT_DATA } from '../../types/restaurant';

export const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="rounded-2xl overflow-hidden glass-panel border border-luchador-gold/40 shadow-2xl relative group">
      {/* Map Header Indicator */}
      <div className="bg-[#18151e] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Compass className="w-4 h-4 text-luchador-gold animate-spin-slow" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Restaurante El Luchador – 6a Calle 2-21, Ciudad de Guatemala
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20 font-mono">
          Ubicación Exacta
        </span>
      </div>

      {/* Map iframe */}
      <div className="w-full h-80 sm:h-96 relative bg-black/60">
          <img
            src="/map-preview.jpg"
            alt="Mapa de El Luchador"
            className="w-full h-full object-cover"
          />
      </div>

      {/* Floating Action Bar inside Map container */}
      <div className="p-4 bg-[#141218]/95 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-slate-200 text-xs">
          <MapPin className="w-4 h-4 text-luchador-gold shrink-0" />
          <span className="font-medium truncate">{RESTAURANT_DATA.address}</span>
        </div>

        <a
          href={RESTAURANT_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-luchador-gold via-amber-600 to-luchador-red hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 shadow-glow-gold active:scale-95"
        >
          <span>Abrir Ubicación en Google Maps</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
