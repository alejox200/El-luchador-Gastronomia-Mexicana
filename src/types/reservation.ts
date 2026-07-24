export interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  area: 'comedor' | 'terraza' | 'mezcaleria' | 'barra';
  specialRequests?: string;
}

export interface ReservationConfirmation extends ReservationFormData {
  confirmationCode: string;
  status: 'confirmada' | 'pendiente' | 'cancelada';
  createdAt: string;
}
