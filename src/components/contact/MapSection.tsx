import React, { useState } from 'react';
import { MapPin, ExternalLink, Loader2 } from 'lucide-react';

/**
 * MapSection – reusable map display component.
 *
 * Props:
 *   - address: Full address string to show.
 *   - embedLink?: Google Maps embed URL (must start with "https://www.google.com/maps/embed?pb=")
 *   - googleMapsLink: Fallback URL to open Google Maps in a new tab.
 */
export const MapSection: React.FC<{
  name: string;
  address: string;
  phone: string;
  hours: Record<string, any>;
  embedLink?: string;
  googleMapsLink: string;
}> = ({ name, address, phone, hours, embedLink, googleMapsLink }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const isValidEmbed = embedLink && embedLink.startsWith('https://www.google.com/maps/embed?pb=');

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const Skeleton = () => (
    <div className="animate-pulse bg-gray-800/30 w-full h-full rounded-xl" />
  );

  if (isValidEmbed && !hasError) {
    return (
      <div className="rounded-xl overflow-hidden shadow-xl bg-[#1a181f] relative" style={{ height: '500px' }}>
        {isLoading && <Skeleton />}
        <iframe
          title="Ubicación de El Luchador"
          src={embedLink}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '0.75rem' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-500 ${!isLoading ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    );
  }

  // Fallback UI (Option B) – show full restaurant info
  return (
    <div className="rounded-xl shadow-xl bg-[#1a181f] p-6 flex flex-col items-center justify-center text-center space-y-4" style={{ height: '500px' }}>
      <MapPin className="w-12 h-12 text-luchador-gold" />
      <h2 className="text-white text-2xl font-bold">{name}</h2>
      <p className="text-slate-300">{address}</p>
      <p className="text-slate-300">Tel: {phone}</p>
      <div className="text-slate-300 text-sm">
        {Object.entries(hours).map(([key, h]) => (
          <div key={key} className="flex justify-between">
            <span className="capitalize mr-2">{h.day}</span>
            <span>{h.open} – {h.close}</span>
          </div>
        ))}
      </div>
      {hasError && <p className="text-red-400">No fue posible cargar el mapa de forma integrada.</p>}
      <a
        href={googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-luchador-gold via-amber-600 to-luchador-red text-white font-bold rounded-lg hover:brightness-110 transition-colors"
      >
        <span>Abrir en Google Maps</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};
