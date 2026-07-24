import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Send, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../../types/restaurant';
import { MapSection } from './MapSection';
import { HoursWidget } from './HoursWidget';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build direct WhatsApp link or process submission
    const msg = `¡Hola El Luchador! Soy ${formData.name} (Tel: ${formData.phone}).%0A%0AMensaje: ${formData.message || 'Solicitud de contacto desde la página web'}`;
    const whatsappUrl = `https://wa.me/${RESTAURANT_DATA.whatsappPhone}?text=${msg}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0a090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-luchador-gold/10 border border-luchador-gold/30 text-luchador-gold font-bold text-xs uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            <span>En el Corazón de la Ciudad</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
            VISÍTANOS O <br />
            <span className="bg-gradient-to-r from-luchador-gold via-amber-400 to-luchador-red bg-clip-text text-transparent">
              CONTÁCTANOS
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Estamos ubicados estratégicamente en la Ciudad de Guatemala. Ven a vivir la verdadera gastronomía mexicana fusión.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Address */}
          <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-luchador-gold/40 transition-all duration-300 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-luchador-gold/20 flex items-center justify-center text-luchador-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Dirección Principal</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-mono">
                {RESTAURANT_DATA.address}
              </p>
            </div>
            <a
              href={RESTAURANT_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-bold text-luchador-gold hover:text-white transition-colors pt-2"
            >
              <span>Abrir Ubicación Exacta (Google Maps)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-luchador-gold/40 transition-all duration-300 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-luchador-red/20 flex items-center justify-center text-luchador-red">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Teléfono & WhatsApp</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-mono">
                {RESTAURANT_DATA.phone}
              </p>
            </div>
            <a
              href={`https://wa.me/${RESTAURANT_DATA.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors pt-2"
            >
              <span>Escribir por WhatsApp Directo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Social Media */}
          <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-luchador-gold/40 transition-all duration-300 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Redes Sociales</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Síguenos para conocer eventos, promociones y especiales del chef.
              </p>
            </div>
            <div className="flex flex-col space-y-2 pt-2">
              <a
                href={RESTAURANT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-luchador-gold hover:text-white transition-colors"
              >
                <span>Instagram: @lacasadelluchadorgt</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={RESTAURANT_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Facebook: La Casa Del Santo GT</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Maps and Hours 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-luchador-gold" />
              <span>Ubicación Exacta en Google Maps</span>
            </h3>
            <MapSection
              name="El Luchador"
              address={RESTAURANT_DATA.address}
              phone={RESTAURANT_DATA.phone}
              hours={RESTAURANT_DATA.hours}
              embedLink={undefined}
              googleMapsLink="https://www.google.com/maps/place/Restaurante+El+Luchador+Gastronom%C3%ADa+Mexicana+Fusion./@14.6530082,-90.5177041,17z/data=!4m6!3m5!1s0x8589a34536fcf105:0x93540130dd93c67c!8m2!3d14.6530452!4d-90.5164305!16s%2Fg%2F11sg92fmpw?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <HoursWidget />
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="max-w-3xl mx-auto p-8 rounded-2xl glass-panel-gold border border-luchador-gold/30 shadow-2xl">
          <div className="text-center space-y-2 mb-6">
            <h3 className="font-display font-bold text-2xl text-white">¿Tienes alguna duda o evento especial?</h3>
            <p className="text-xs text-slate-300">
              Envíanos un mensaje rápido y te responderemos por WhatsApp o teléfono.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
              <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-white text-base">¡Mensaje Enviado Exitosamente!</h4>
              <p className="text-xs text-slate-300">
                Se ha abierto una ventana de WhatsApp para enviar tu consulta directamente al equipo de El Luchador.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos Méndez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-luchador-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Teléfono de Contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+502 5555-5555"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-luchador-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Mensaje o Consulta
                </label>
                <textarea
                  rows={3}
                  placeholder="Detalles sobre tu reservación de grupo, evento privado o duda..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-luchador-gold resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-luchador-gold to-luchador-red text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all duration-200 shadow-glow-gold flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta por WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
