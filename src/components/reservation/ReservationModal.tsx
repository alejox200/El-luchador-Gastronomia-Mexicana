import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { useReservation } from '../../context/ReservationContext';
import { RestaurantApiService } from '../../services/api';
import { ReservationConfirmation, ReservationFormData } from '../../types/reservation';
import { RESTAURANT_DATA } from '../../types/restaurant';

export const ReservationModal: React.FC = () => {
  const { isModalOpen, closeReservationModal, setLastConfirmation } = useReservation();
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<ReservationConfirmation | null>(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    email: '',
    date: todayStr,
    time: '13:00',
    guests: 2,
    area: 'comedor',
    specialRequests: '',
  });

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await RestaurantApiService.submitReservation(formData);
      setConfirmation(result);
      setLastConfirmation(result);
    } catch (err) {
      console.error('Error procesando reservación:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendWhatsAppConfirmation = () => {
    if (!confirmation) return;
    const msg = `¡Hola El Luchador! 🥊%0A%0AMi reservación fue registrada en la página web:%0A• Código: *${confirmation.confirmationCode}*%0A• Nombre: ${confirmation.name}%0A• Fecha: ${confirmation.date}%0A• Hora: ${confirmation.time}%0A• Personas: ${confirmation.guests}%0A• Área: ${confirmation.area}%0A%0AConfirmar disponibilidad por favor.`;
    const url = `https://wa.me/${RESTAURANT_DATA.whatsappPhone}?text=${msg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-2xl glass-panel-gold border border-luchador-gold/40 shadow-2xl overflow-hidden text-slate-100 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#15131a]/80">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-luchador-gold/20 flex items-center justify-center text-luchador-gold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">Reservar Mesa</h3>
              <p className="text-xs text-luchador-gold">El Luchador – Gastronomía Mexicana Fusión</p>
            </div>
          </div>

          <button
            onClick={() => {
              setConfirmation(null);
              closeReservationModal();
            }}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {confirmation ? (
            /* Confirmation View */
            <div className="text-center space-y-6 py-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-luchador-gold">
                  Código de Reservación
                </span>
                <h4 className="font-display font-black text-4xl text-white tracking-wider">
                  {confirmation.confirmationCode}
                </h4>
                <p className="text-xs text-emerald-400 font-semibold">
                  ¡Reservación generada exitosamente!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2 text-left max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">Cliente:</span>
                  <span className="font-bold text-white">{confirmation.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Fecha y Hora:</span>
                  <span className="font-bold text-luchador-cream">
                    {confirmation.date} a las {confirmation.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Personas:</span>
                  <span className="font-bold text-white">{confirmation.guests} personas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Área Preferida:</span>
                  <span className="font-bold text-luchador-gold uppercase">{confirmation.area}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleSendWhatsAppConfirmation}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Confirmación a WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setConfirmation(null);
                    closeReservationModal();
                  }}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Morales"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-luchador-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Teléfono celular *
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Fecha *
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-luchador-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Hora deseada *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-luchador-gold"
                  >
                    <option value="12:30" className="bg-[#16141a]">12:30 PM</option>
                    <option value="13:00" className="bg-[#16141a]">01:00 PM</option>
                    <option value="14:00" className="bg-[#16141a]">02:00 PM</option>
                    <option value="15:00" className="bg-[#16141a]">03:00 PM</option>
                    <option value="19:00" className="bg-[#16141a]">07:00 PM</option>
                    <option value="20:00" className="bg-[#16141a]">08:00 PM</option>
                    <option value="21:00" className="bg-[#16141a]">09:00 PM</option>
                    <option value="22:00" className="bg-[#16141a]">10:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    No. de Personas *
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-luchador-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Seleccionar Área Preferida
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'comedor', name: 'Comedor Principal' },
                    { id: 'terraza', name: 'Terraza Gastronómica' },
                    { id: 'mezcaleria', name: 'Mezcalería & Bar' },
                  ].map((area) => (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, area: area.id as any })}
                      className={`p-2.5 rounded-xl text-xs font-medium border transition-all text-center ${
                        formData.area === area.id
                          ? 'bg-luchador-gold text-[#0d0c0e] font-bold border-luchador-gold shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {area.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Peticiones Especiales (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej. Cumpleaños, aniversario, silla alta para bebé..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-luchador-gold resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-luchador-gold via-amber-600 to-luchador-red text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all duration-200 shadow-glow-gold flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <span>Procesando Reservación...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Confirmar Reservación de Mesa</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
