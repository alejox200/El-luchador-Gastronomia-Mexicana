import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../../types/restaurant';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const quickMessages = [
    '👋 ¡Hola! Quisiera consultar la disponibilidad de mesas para hoy.',
    '🌮 Me gustaría información sobre el menú de autor.',
    '📍 Quisiera confirmar la ubicación exacta del restaurante.',
    '🥊 Quisiera hacer una reservación para un grupo especial.',
  ];

  const handleSend = (msgText: string) => {
    const textToSend = msgText || customMessage || '¡Hola! Quisiera información sobre El Luchador.';
    const encoded = encodeURIComponent(textToSend);
    const whatsappUrl = `https://wa.me/${RESTAURANT_DATA.whatsappPhone}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Interactive Popup Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl glass-panel border border-emerald-500/30 p-5 shadow-2xl animate-fadeIn text-slate-100 relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">El Luchador WhatsApp</h4>
                <p className="text-[11px] text-emerald-400 font-medium flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-1.5"></span>
                  En línea • Respuesta rápida
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3 mb-4">
            <p className="text-xs text-slate-300">
              ¡Bienvenido a <span className="font-semibold text-luchador-gold">El Luchador</span>! Selecciona una consulta rápida o escríbenos directamente:
            </p>

            <div className="space-y-2">
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(msg)}
                  className="w-full text-left text-xs p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/40 text-slate-200 hover:text-white transition-all duration-200 flex items-start space-x-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{msg}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(customMessage)}
              className="flex-1 bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={() => handleSend(customMessage)}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              aria-label="Enviar mensaje a WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
          WhatsApp Directo
        </span>
      </button>
    </div>
  );
};
