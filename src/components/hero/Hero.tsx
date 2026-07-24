import React from 'react';
import { Calendar, UtensilsCrossed, Flame, MapPin, Award, Shield, ChevronDown } from 'lucide-react';
import { useReservation } from '../../context/ReservationContext';
import { RESTAURANT_DATA, getIsOpenNow } from '../../types/restaurant';

export const Hero: React.FC = () => {
  const { openReservationModal } = useReservation();
  const openStatus = getIsOpenNow();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark & Crimson Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920"
          alt="El Luchador Gastronomía Mexicana"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0e] via-[#0d0c0e]/70 to-[#0d0c0e]/40"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0d0c0e]/60 to-[#0d0c0e]"></div>
      </div>

      {/* Decorative Golden Rays & Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luchador-red/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-luchador-gold/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live Status Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel-gold mb-6 border border-luchador-gold/40 shadow-glow-gold animate-fadeIn">
          <Flame className="w-4 h-4 text-luchador-gold animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-luchador-cream uppercase">
            {openStatus.isOpen ? (
              <span className="text-emerald-400">Restaurante Abierto hoy • {openStatus.nextStatusMessage}</span>
            ) : (
              <span className="text-amber-400">Cerrado en este momento • {openStatus.nextStatusMessage}</span>
            )}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none mb-6">
          DONDE LA TRADICIÓN <br />
          <span className="bg-gradient-to-r from-luchador-red via-luchador-gold to-amber-300 bg-clip-text text-transparent drop-shadow-lg">
            LUCHA CON EL AUTOR
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-10">
          Alta cocina mexicana fusión en la Ciudad de Guatemala. Sabores ancestrales nixtamalizados, mezcalería artesanal y la pasión vibrante de la Lucha Libre.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <button
            onClick={openReservationModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-luchador-gold via-amber-600 to-luchador-red text-white font-bold text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all duration-300 shadow-glow-gold flex items-center justify-center space-x-3 group"
          >
            <Calendar className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span>Reservar una Mesa</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border border-white/20 hover:border-luchador-gold/60 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 group"
          >
            <UtensilsCrossed className="w-5 h-5 text-luchador-gold group-hover:scale-110 transition-transform" />
            <span>Explorar Menú (Q)</span>
          </a>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-luchador-gold mb-1">
              <Award className="w-4 h-4" />
              <span className="font-bold text-xs text-white uppercase">Gastronomía Fusión</span>
            </div>
            <p className="text-[11px] text-slate-400">Recetas de autor con técnicas de vanguardia</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-luchador-gold mb-1">
              <Shield className="w-4 h-4" />
              <span className="font-bold text-xs text-white uppercase">Precios en Q</span>
            </div>
            <p className="text-[11px] text-slate-400">Precios transparentes en Quetzales</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-luchador-gold mb-1">
              <Flame className="w-4 h-4" />
              <span className="font-bold text-xs text-white uppercase">Mezcalería</span>
            </div>
            <p className="text-[11px] text-slate-400">Mixología de autor & agaves de origen</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-luchador-gold mb-1">
              <MapPin className="w-4 h-4" />
              <span className="font-bold text-xs text-white uppercase">Ubicación Central</span>
            </div>
            <p className="text-[11px] text-slate-400">6 Calle 2-21, Cd. de Guatemala</p>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#nosotros"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-400 hover:text-luchador-gold transition-colors animate-bounce p-2"
        aria-label="Ir a la sección Nosotros"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
