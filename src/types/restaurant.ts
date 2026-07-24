export interface OpeningHours {
  day: string;
  open: string; // e.g. "12:30 PM"
  close: string; // e.g. "11:00 PM"
  rawOpenMinutes: number; // minutes from midnight
  rawCloseMinutes: number; // minutes from midnight
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  whatsappPhone: string; // e.g. "+50259593013"
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  hours: Record<string, OpeningHours>;
}

export const RESTAURANT_DATA: RestaurantInfo = {
  name: "El Luchador",
  tagline: "Gastronomía Mexicana Fusión",
  address: "6 Calle 2-21, Ciudad de Guatemala, Guatemala",
  city: "Ciudad de Guatemala",
  country: "Guatemala",
  phone: "+502 5959-3013",
  whatsappPhone: "50259593013",
  googleMapsUrl: "https://maps.app.goo.gl/StdhNWEN1AEMeJV76",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.672621946059!2d-90.51478142410887!3d14.63479607594957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3ad5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2s6a%20Calle%202-21%2C%20Ciudad%20de%20Guatemala!5e0!3m2!1ses!2sgt!4v1700000000000!5m2!1ses!2sgt",
  facebookUrl: "https://www.facebook.com/lacasadelsanto.gt/",
  instagramUrl: "https://www.instagram.com/lacasadelluchadorgt/?hl=es",
  hours: {
    lunes: { day: "Lunes", open: "12:00 PM", close: "10:00 PM", rawOpenMinutes: 12 * 60, rawCloseMinutes: 22 * 60 },
    martes: { day: "Martes", open: "12:30 PM", close: "10:00 PM", rawOpenMinutes: 12 * 60 + 30, rawCloseMinutes: 22 * 60 },
    miercoles: { day: "Miércoles", open: "12:30 PM", close: "10:00 PM", rawOpenMinutes: 12 * 60 + 30, rawCloseMinutes: 22 * 60 },
    jueves: { day: "Jueves", open: "12:30 PM", close: "11:00 PM", rawOpenMinutes: 12 * 60 + 30, rawCloseMinutes: 23 * 60 },
    viernes: { day: "Viernes", open: "12:30 PM", close: "11:00 PM", rawOpenMinutes: 12 * 60 + 30, rawCloseMinutes: 23 * 60 },
    sabado: { day: "Sábado", open: "12:30 PM", close: "11:00 PM", rawOpenMinutes: 12 * 60 + 30, rawCloseMinutes: 23 * 60 },
    domingo: { day: "Domingo", open: "12:30 PM", close: "6:00 PM", rawOpenMinutes: 12 * 60 + 30, rawCloseMinutes: 18 * 60 },
  }
};

/**
 * Checks if the restaurant is currently open based on current local time
 */
export function getIsOpenNow(): { isOpen: boolean; nextStatusMessage: string } {
  const now = new Date();
  const dayNames = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  const currentDayKey = dayNames[now.getDay()];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const todayHours = RESTAURANT_DATA.hours[currentDayKey];

  if (currentMinutes >= todayHours.rawOpenMinutes && currentMinutes < todayHours.rawCloseMinutes) {
    return {
      isOpen: true,
      nextStatusMessage: `Cierra hoy a las ${todayHours.close}`
    };
  }

  return {
    isOpen: false,
    nextStatusMessage: `Abre a las ${todayHours.open}`
  };
}
