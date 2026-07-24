import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_DATA, getIsOpenNow } from '../../types/restaurant';

export const HoursWidget: React.FC = () => {
  const status = getIsOpenNow();

  const dayList = [
    { key: 'lunes', label: 'Lunes', hours: RESTAURANT_DATA.hours.lunes },
    { key: 'martes', label: 'Martes', hours: RESTAURANT_DATA.hours.martes },
    { key: 'miercoles', label: 'Miércoles', hours: RESTAURANT_DATA.hours.miercoles },
    { key: 'jueves', label: 'Jueves', hours: RESTAURANT_DATA.hours.jueves },
    { key: 'viernes', label: 'Viernes', hours: RESTAURANT_DATA.hours.viernes },
    { key: 'sabado', label: 'Sábado', hours: RESTAURANT_DATA.hours.sabado },
    { key: 'domingo', label: 'Domingo', hours: RESTAURANT_DATA.hours.domingo },
  ];

  const now = new Date();
  const currentDayIndex = now.getDay();
  const dayIndexMap: Record<number, string> = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
  };
  const todayKey = dayIndexMap[currentDayIndex];

  return (
    <div className="p-6 rounded-2xl glass-panel-gold border border-luchador-gold/30 shadow-xl space-y-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center space-x-2 text-luchador-gold">
          <Clock className="w-5 h-5" />
          <h3 className="font-display font-bold text-lg text-white">Horarios de Atención</h3>
        </div>

        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-xs">
          <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
          <span className={status.isOpen ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
            {status.isOpen ? 'Abierto' : 'Cerrado'}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {dayList.map((item) => {
          const isToday = item.key === todayKey;
          return (
            <div
              key={item.key}
              className={`flex items-center justify-between p-2.5 rounded-xl transition-colors text-xs sm:text-sm ${
                isToday
                  ? 'bg-luchador-gold/20 border border-luchador-gold/40 font-bold text-white shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-2">
                {isToday && <CheckCircle2 className="w-4 h-4 text-luchador-gold" />}
                <span>{item.label}</span>
                {isToday && (
                  <span className="text-[10px] uppercase font-bold text-luchador-gold bg-luchador-gold/20 px-2 py-0.5 rounded-md">
                    Hoy
                  </span>
                )}
              </div>

              <span className="font-mono text-luchador-cream">
                {item.hours.open} – {item.hours.close}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
