import React from 'react';
import { Sparkles, Utensils, ShieldAlert, Award, Star } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-[#0f0d12] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-luchador-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Showcase collage */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-luchador-gold/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=1000"
                alt="Gastronomía Mexicana Fusión El Luchador"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0e] via-transparent to-transparent"></div>
            </div>

            {/* Overlapping Badge Floating Box */}
            <div className="absolute -bottom-8 -right-4 sm:bottom-6 sm:right-6 glass-panel-gold p-6 rounded-2xl border border-luchador-gold/40 shadow-glow-gold max-w-xs">
              <div className="flex items-center space-x-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-200 italic font-display">
                "El matrimonio perfecto entre el fuego del maíz nixtamalizado y cortes prime de autor."
              </p>
              <p className="text-[10px] font-bold text-luchador-gold uppercase tracking-wider mt-2">
                — Chef Ejecutivo El Luchador
              </p>
            </div>
          </div>

          {/* Content Col */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-luchador-red/10 border border-luchador-red/30 text-luchador-red font-semibold text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nuestra Historia & Espíritu</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              PASIÓN EN EL CUADRILÁTERO DE LA <br />
              <span className="bg-gradient-to-r from-luchador-gold via-amber-400 to-luchador-red bg-clip-text text-transparent">
                ALTA GASTRONOMÍA
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              En <span className="font-semibold text-white">El Luchador</span>, rendimos homenaje al folklore mexicano y a la mística de los cuadriláteros, elevando sus sabores más auténticos mediante ingredientes locales guatemaltecos e innovadoras técnicas internacionales.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Cada platillo representa una pelea ganada contra lo ordinario: tortillas nixtamalizadas en casa, moles sazonados a fuego lento durante días, mariscos con tostado a las brasas y una mixología de mezcales que desafía los sentidos.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-luchador-gold/20 flex items-center justify-center text-luchador-gold">
                  <Utensils className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Nixtamalización Propia</h4>
                <p className="text-xs text-slate-400">
                  Elaboramos nuestras tortillas diariamente con maíces criollos seleccionados.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-luchador-red/20 flex items-center justify-center text-luchador-red">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Ingredientes en Quetzales</h4>
                <p className="text-xs text-slate-400">
                  Precios claros en moneda local (Q) y la mejor relación calidad-precio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
