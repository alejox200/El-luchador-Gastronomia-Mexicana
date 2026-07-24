import React from 'react';
import { Calendar, Clock, Users, Wine, Sparkles, CheckCircle2 } from 'lucide-react';
import { useReservation } from '../../context/ReservationContext';

export const ReservationSection: React.FC = () => {
  const { openReservationModal } = useReservation();

  return (
    <section id="reservaciones" className="py-24 bg-[#0f0d12] relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luchador-red/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 border border-luchador-gold/40 shadow-glow-gold">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text & Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-luchador-gold/20 border border-luchador-gold/40 text-luchador-gold font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Experiencia Gastronómica Exclusiva</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                ASEGURA TU MESA EN <br />
                <span className="bg-gradient-to-r from-luchador-gold via-amber-400 to-luchador-red bg-clip-text text-transparent">
                  EL LUCHADOR GUATEMALA
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Garantiza una velada extraordinaria disfrutando de nuestra cocina de autor, mixología artesanal y ambientación inspirada en la mística de la Lucha Libre.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Clock className="w-5 h-5 text-luchador-gold shrink-0" />
                  <div>
                    <h5 className="font-bold text-white text-xs">Atención Flexible</h5>
                    <p className="text-[11px] text-slate-400">Mon-Sun horarios continuos</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Wine className="w-5 h-5 text-luchador-red shrink-0" />
                  <div>
                    <h5 className="font-bold text-white text-xs">Mezcalería Bar</h5>
                    <p className="text-[11px] text-slate-400">Coctelería de autor</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Users className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <h5 className="font-bold text-white text-xs">Grupos y Eventos</h5>
                    <p className="text-[11px] text-slate-400">Áreas privadas y terraza</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Box */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center p-8 rounded-2xl bg-black/40 border border-white/10 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-luchador-gold to-luchador-red p-0.5 shadow-glow-gold flex items-center justify-center">
                <div className="w-full h-full bg-[#0d0c0e] rounded-[14px] flex items-center justify-center text-luchador-gold">
                  <Calendar className="w-8 h-8" />
                </div>
              </div>

              <div>
                <h4 className="font-display font-bold text-xl text-white">¿Listo para celebrar?</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Reserva en segundos con confirmación inmediata.
                </p>
              </div>

              <button
                onClick={openReservationModal}
                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-luchador-gold via-amber-600 to-luchador-red text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all duration-300 shadow-glow-gold flex items-center justify-center space-x-2 group"
              >
                <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Abrir Formulario de Reservación</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
