import React from 'react';
import { Flame, MapPin, Phone, Instagram, Facebook, Clock, ShieldCheck, Code } from 'lucide-react';
import { RESTAURANT_DATA } from '../../types/restaurant';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09080b] border-t border-white/10 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-luchador-red to-luchador-gold p-0.5 shadow-glow-gold">
                <div className="w-full h-full bg-[#0d0c0e] rounded-[10px] flex items-center justify-center">
                  <Flame className="w-6 h-6 text-luchador-gold" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-white">EL LUCHADOR</h3>
                <p className="text-xs text-luchador-gold tracking-widest uppercase font-semibold">
                  Gastronomía Mexicana Fusión
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Donde la herencia culinaria mexicana y el coraje de la lucha libre se fusionan en platillos de autor inolvidables en el corazón de Guatemala.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href={RESTAURANT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-luchador-gold/20 hover:text-luchador-gold flex items-center justify-center transition-colors border border-white/5"
                aria-label="Instagram de El Luchador"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-luchador-gold/20 hover:text-luchador-gold flex items-center justify-center transition-colors border border-white/5"
                aria-label="Facebook de El Luchador"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-base border-b border-luchador-gold/30 pb-2 inline-block">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-luchador-gold transition-colors">
                  Inicio & Bienvenida
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-luchador-gold transition-colors">
                  Filosofía & Concepto
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-luchador-gold transition-colors">
                  Menú de Autor (en Quetzales Q)
                </a>
              </li>
              <li>
                <a href="#reservaciones" className="hover:text-luchador-gold transition-colors">
                  Reservación de Mesas
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-luchador-gold transition-colors">
                  Ubicación & Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Summary */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-base border-b border-luchador-gold/30 pb-2 inline-block">
              Horario de Atención
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">Lunes:</span>
                <span className="font-medium text-luchador-cream">12:00 PM – 10:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">Mar – Mié:</span>
                <span className="font-medium text-luchador-cream">12:30 PM – 10:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">Jue – Sáb:</span>
                <span className="font-medium text-luchador-cream">12:30 PM – 11:00 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-300">Domingo:</span>
                <span className="font-medium text-luchador-cream">12:30 PM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-base border-b border-luchador-gold/30 pb-2 inline-block">
              Información Oficial
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-luchador-gold shrink-0 mt-0.5" />
                <span>{RESTAURANT_DATA.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-luchador-gold shrink-0" />
                <a href={`tel:${RESTAURANT_DATA.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {RESTAURANT_DATA.phone}
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-luchador-gold/10 border border-luchador-gold/30 text-[11px] text-luchador-gold font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                  Precios Oficiales en Quetzales (Q)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Architecture Note */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} El Luchador – Gastronomía Mexicana Fusión. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-2 text-[11px] text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
            <Code className="w-3.5 h-3.5 text-luchador-gold" />
            <span>Arquitectura React preparada para integración de Backend / API</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
